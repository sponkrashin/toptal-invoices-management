import { Typography } from '@mui/material';
import Link from 'components/Link';
import { SIGN_IN_URL, SIGN_UP_URL } from 'hooks/useAppRouter';

const AnonymousUser = () => (
  <>
    <Link href={SIGN_IN_URL} type="button">
      <Typography component="h1" variant="h6">
        Sign In
      </Typography>
    </Link>
    <Link href={SIGN_UP_URL} type="button">
      <Typography component="h1" variant="h6">
        Sign Up
      </Typography>
    </Link>
  </>
);

export default AnonymousUser;
