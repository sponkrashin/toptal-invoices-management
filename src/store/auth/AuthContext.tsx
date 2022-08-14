import { createContext, PropsWithChildren, useReducer } from 'react';
import * as authActions from './auth-actions';
import { authReducer } from './auth-reducer';

export interface AuthState {
  userName: string | null;
  isLoggedIn: boolean;
}

const AUTH_STATE_INIT: AuthState = {
  userName: null,
  isLoggedIn: false,
};

export const AuthContext = createContext<
  (AuthState & { onSignIn: (userName: string) => void; onSignOut: () => void }) | null
>(null);

export const AuthContextProvider = (props: PropsWithChildren<{}>) => {
  const [authState, dispatchAuthState] = useReducer(authReducer, AUTH_STATE_INIT);

  const authContext = {
    ...authState,
    onSignIn: (userName: string) => dispatchAuthState(authActions.signIn(userName)),
    onSignOut: () => dispatchAuthState(authActions.signOut()),
  };

  return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>;
};
