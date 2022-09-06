import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as authTokenStorage from 'services/authTokenStorage';
import type { AppState, AppThunk } from './rootStore';

export interface AuthState {
  userName: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  userName: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInInternal: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    signOutInternal: (state: AuthState) => {
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

const { signInInternal, signOutInternal } = authSlice.actions;

export const signIn =
  (username: string, authToken: string): AppThunk =>
  (dispatch) => {
    authTokenStorage.setAuthToken(authToken);
    dispatch(signInInternal(username));
  };

export const signOut = (): AppThunk => (dispatch) => {
  authTokenStorage.setAuthToken(null);
  dispatch(signOutInternal());
};

export const selectUserName = (state: AppState) => state.auth.userName;
export const selectUserIsLoggedIn = (state: AppState) => state.auth.isLoggedIn;
