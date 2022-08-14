import { AUTH_ACTIONS } from './auth-actions';
import { AuthState } from './AuthContext';

export const authReducer = (state: AuthState, action: AUTH_ACTIONS) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
        userName: null,
      };

    default:
      return state;
  }
};
