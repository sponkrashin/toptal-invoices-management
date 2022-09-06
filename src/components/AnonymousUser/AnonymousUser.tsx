import Link from 'next/link';
import { Button, Typography } from '@mui/material';

const AnonymousUser = () => (
  <>
    <Link href="/sign-in">
      <Button color="inherit">
        <Typography component="h1" variant="h6">
          Sign In
        </Typography>
      </Button>
    </Link>
    <Link href="/sign-up">
      <Button color="inherit">
        <Typography component="h1" variant="h6">
          Sign Up
        </Typography>
      </Button>
    </Link>
  </>
);

export default AnonymousUser;
