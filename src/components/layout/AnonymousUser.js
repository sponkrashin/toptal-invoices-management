import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const SignInComponentStyled = (props) => {
  return (
    <Typography sx={{ mr: 2 }} {...props}>
      {props.children}
    </Typography>
  );
};

function AnonymousUser({ onSignInClick }) {
  return (
    <Fragment>
      <Button color="inherit" onClick={onSignInClick}>
        <SignInComponentStyled component="h1" variant="h6">
          Sign In
        </SignInComponentStyled>
      </Button>
      <Button color="inherit" component={Link} to="/sign-up">
        <Typography component="h1" variant="h6">
          Sign Up
        </Typography>
      </Button>
    </Fragment>
  );
}

AnonymousUser.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default AnonymousUser;
