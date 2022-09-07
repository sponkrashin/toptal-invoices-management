import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { notificationsSlice } from './notificationsSlice';
import { userInfoSlice } from './userInfoSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      userInfo: userInfoSlice.reducer,
      notifications: notificationsSlice.reducer,
    },
  });
}

export const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
