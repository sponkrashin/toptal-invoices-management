import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SignInComponentStyled = (props) => {
  return (
    <Typography sx={{ mr: 2 }} {...props}>
      {props.children}
    </Typography>
  );
};

function AnonymousUser({ onSignIn }) {
  const signInHandler = () => onSignIn('Test User');

  return (
    <Fragment>
      <Button color="inherit" onClick={signInHandler}>
        <SignInComponentStyled component="h1" variant="h6">
          Sign In
        </SignInComponentStyled>
      </Button>
      <Link href="/sign-up">
        <Button color="inherit">
          <Typography component="h1" variant="h6">
            Sign Up
          </Typography>
        </Button>
      </Link>
    </Fragment>
  );
}

AnonymousUser.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default AnonymousUser;
