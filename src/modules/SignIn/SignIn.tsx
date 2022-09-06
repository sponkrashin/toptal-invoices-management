import { ChangeEvent, MouseEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, TextField, Typography, Grid } from '@mui/material';
import Card from 'components/Card';
import Link from 'components/Link';
import { useLogin } from 'data/useLogin';
import { selectUserIsLoggedIn, signIn } from 'store/authSlice';
import { useDispatch, useSelector } from 'store/hooks';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);
  const dispatch = useDispatch();
  const { data: userData, execute: login } = useLogin();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const router = useRouter();

  useEffect(() => {
    if (userIsLoggedIn) {
      router.push('/');
    }
  }, [userIsLoggedIn, router]);

  useEffect(() => {
    if (!userIsLoggedIn && userData) {
      dispatch(signIn(userData.name, userData.token));
    }
  }, [userIsLoggedIn, userData, dispatch]);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => (emailRef.current = event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => (passwordRef.current = event.target.value);

  const handleSubmitClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (userIsLoggedIn || !emailRef.current || !passwordRef.current) {
      return;
    }

    login(emailRef.current, passwordRef.current);
  };

  return (
    <Card className={styles.wrapper}>
      <div className={styles.content}>
        <Avatar className={styles.icon}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box className={styles.form} component="form" noValidate>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            onChange={handleEmailChange}
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="password"
            required
            onChange={handlePasswordChange}
          />
          <Button
            className={styles.submitButton}
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmitClick}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/sign-up" type="link">
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Card>
  );
};

export default SignIn;
