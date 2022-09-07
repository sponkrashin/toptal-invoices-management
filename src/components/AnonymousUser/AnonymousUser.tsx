import { Typography } from '@mui/material';
import Link from 'components/Link';

const AnonymousUser = () => (
  <>
    <Link href="/sign-in" type="button">
      <Typography component="h1" variant="h6">
        Sign In
      </Typography>
    </Link>
    <Link href="/sign-up" type="button">
      <Typography component="h1" variant="h6">
        Sign Up
      </Typography>
    </Link>
  </>
);

export default AnonymousUser;
