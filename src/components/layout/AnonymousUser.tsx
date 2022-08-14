import { Fragment, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

const SignInComponentStyled = (props: PropsWithChildren<any>) => <Typography sx={{ mr: 2 }} {...props} />;

export interface AnonymousUserProps {
  onSignIn: Function;
}

const AnonymousUser = ({ onSignIn }: AnonymousUserProps) => {
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
};

AnonymousUser.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default AnonymousUser;
