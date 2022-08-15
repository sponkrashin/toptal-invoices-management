import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import styles from './AnonymousUser.module.scss';

export interface AnonymousUserProps {
  onSignIn: Function;
}

const AnonymousUser = ({ onSignIn }: AnonymousUserProps) => {
  const signInHandler = () => onSignIn('Test User');

  return (
    <>
      <Button color="inherit" onClick={signInHandler}>
        <Typography className={styles.signInContainer} component="h1" variant="h6">
          Sign In
        </Typography>
      </Button>
      <Link href="/sign-up">
        <Button color="inherit">
          <Typography component="h1" variant="h6">
            Sign Up
          </Typography>
        </Button>
      </Link>
    </>
  );
};

AnonymousUser.propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

export default AnonymousUser;
