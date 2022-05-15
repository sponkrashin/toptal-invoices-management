import { createContext, useReducer } from 'react';

import { authReducer } from './auth-reducer';
import * as authActions from './auth-actions';

const AUTH_STATE_INIT = {
  userName: undefined,
  isLoggedIn: false,
};

export const AuthContext = createContext(undefined);

export const AuthContextProvider = (props) => {
  const [authState, dispatchAuthState] = useReducer(
    authReducer,
    AUTH_STATE_INIT
  );

  const authContext = {
    ...authState,
    onSignIn: (userName) => dispatchAuthState(authActions.signIn(userName)),
    onSignOut: () => dispatchAuthState(authActions.signOut()),
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
