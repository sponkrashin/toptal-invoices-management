import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './rootStore';

type NotificationType = 'success';

interface Notification {
  type: NotificationType;
  message: string;
}

export interface NotificationsState {
  notification: Notification | null;
}

const initialState: NotificationsState = {
  notification: null,
};

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<Notification>) => {
      state.notification = action.payload;
    },
  },
});

export const { showNotification } = notificationsSlice.actions;

export const selectNotification = (state: AppState) => state.notifications.notification;
