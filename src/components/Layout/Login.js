import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Login({ onSignInClick }) {
  return (
    <Button color="inherit" onClick={onSignInClick}>
      <Typography component="h1" variant="h6">
        Sign In
      </Typography>
    </Button>
  );
}

Login.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default Login;
