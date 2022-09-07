import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as apiService from 'data/apiService';
import { HttpError } from 'data/httpError';
import * as authTokenStorage from 'services/authTokenStorage';
import type { AppState, AppThunk } from './rootStore';

export interface UserInfoState {
  userName: string | null;
  isLoggedIn: boolean | null;
}

const initialState: UserInfoState = {
  userName: null,
  isLoggedIn: null,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    signInInternal: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    signOutInternal: (state: UserInfoState) => {
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

const { signInInternal, signOutInternal } = userInfoSlice.actions;

export const initializeUserInfo = (): AppThunk => async (dispatch) => {
  try {
    const currentUser = await apiService.getCurrentUser();
    dispatch(signInInternal(currentUser.name));
  } catch (err: any) {
    if (err instanceof HttpError && err.isNotAuthenticated()) {
      dispatch(signOutInternal());
    }
  }
};

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

export const selectUserName = (state: AppState) => state.userInfo.userName;
export const selectUserIsLoggedIn = (state: AppState) => state.userInfo.isLoggedIn;
