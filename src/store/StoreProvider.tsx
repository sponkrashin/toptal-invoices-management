import { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { AuthContextProvider } from './auth/AuthContext';

const StoreProvider = ({ children }: PropsWithChildren<{}>) => <AuthContextProvider>{children}</AuthContextProvider>;

StoreProvider.propTypes = {
  children: PropTypes.node,
};

export default StoreProvider;
