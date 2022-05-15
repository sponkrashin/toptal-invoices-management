import { AuthContextProvider } from './auth/auth-context';
import PropTypes from 'prop-types';

function ContextsProvider({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

ContextsProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextsProvider;
