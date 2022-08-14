import { Action } from 'store/action';

export interface SignInAction extends Action {
  type: 'SIGN_IN';
  payload: string;
}

export interface SignOutAction extends Action {
  type: 'SIGN_OUT';
}

export type AUTH_ACTIONS = SignInAction | SignOutAction;

export const signIn = (userName: string): SignInAction => ({
  type: 'SIGN_IN',
  payload: userName,
});

export const signOut = (): SignOutAction => ({
  type: 'SIGN_OUT',
});
