import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './rootStore';

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
    signIn: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    signOut: (state: AuthState) => {
      state.userName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const selectUserName = (state: AppState) => state.auth.userName;
export const selectUserIsLoggedIn = (state: AppState) => state.auth.isLoggedIn;
