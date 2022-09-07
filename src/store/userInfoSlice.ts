import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as apiService from 'data/apiService';
import { CompanyDetails } from 'data/companyDetails';
import { HttpError } from 'data/httpError';
import * as authTokenStorage from 'services/authTokenStorage';
import type { AppState, AppThunk } from './rootStore';

export interface UserInfoState {
  userName: string | null;
  companyDetails: CompanyDetails | null;
  isLoggedIn: boolean | null;
}

const initialState: UserInfoState = {
  userName: null,
  companyDetails: null,
  isLoggedIn: null,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    signInInternal: (state, action: PayloadAction<{ userName: string; companyDetails: CompanyDetails | null }>) => {
      state.userName = action.payload.userName;
      state.companyDetails = action.payload.companyDetails;
      state.isLoggedIn = true;
    },
    signOutInternal: (state: UserInfoState) => {
      state.userName = null;
      state.companyDetails = null;
      state.isLoggedIn = false;
    },
  },
});

const { signInInternal, signOutInternal } = userInfoSlice.actions;

export const initializeUserInfo = (): AppThunk => async (dispatch) => {
  try {
    const currentUser = await apiService.getCurrentUser();
    dispatch(signInInternal({ userName: currentUser.name, companyDetails: currentUser.companyDetails }));
  } catch (err: any) {
    if (err instanceof HttpError && err.isNotAuthenticated()) {
      dispatch(signOutInternal());
    }
  }
};

export const signIn =
  (userName: string, companyDetails: CompanyDetails | null, authToken: string): AppThunk =>
  (dispatch) => {
    authTokenStorage.setAuthToken(authToken);
    dispatch(signInInternal({ userName, companyDetails }));
  };

export const signOut = (): AppThunk => (dispatch) => {
  authTokenStorage.setAuthToken(null);
  dispatch(signOutInternal());
};

export const selectUserName = (state: AppState) => state.userInfo.userName;
export const selectUserCompanyDetails = (state: AppState) => state.userInfo.companyDetails;
export const selectUserIsLoggedIn = (state: AppState) => state.userInfo.isLoggedIn;
