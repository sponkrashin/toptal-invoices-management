import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, TextField, Typography, Grid, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import Card from 'components/Card';
import Link from 'components/Link';
import Spinner from 'components/Spinner';
import { useLogin } from 'data/useLogin';
import { signIn } from 'store/authSlice';
import { useDispatch } from 'store/hooks';
import styles from './SignIn.module.scss';

interface FormInput {
  email: string;
  password: string;
}

const formSchema = zod.object({
  email: zod.string().min(1, { message: 'This field is required' }).email(),
  password: zod
    .string()
    .min(5, { message: 'The password length should be between 5 and 16 symbols' })
    .max(16, { message: 'The password length should be between 5 and 16 symbols' }),
});

const defaultFormValues: FormInput = {
  email: '',
  password: '',
};

const INVALID_CREDENTIALS_ERROR = 'Email or password is incorrect';
const GENERIC_ERROR = 'Something unusual happened. Please, try again later';

const SignIn = () => {
  const dispatch = useDispatch();

  const { isLoading: userDataLoading, data: userData, error: userDataError, execute: login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormValues, resolver: zodResolver(formSchema) });

  useEffect(() => {
    if (userData) {
      dispatch(signIn(userData.name, userData.token));
    }
  }, [userData, dispatch]);

  const handleFormSubmit = (data: FormInput) => {
    if (userDataLoading || !data.email || !data.password) {
      return;
    }

    login(data.email, data.password);
  };

  return (
    <Card className={styles.card} contentClassName={styles.content}>
      <Avatar className={styles.icon}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('email')}
          margin="normal"
          fullWidth
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register('password')}
          margin="normal"
          fullWidth
          type="password"
          autoComplete="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        {userDataError && (
          <FormHelperText error>
            {userDataError.isBadRequest() ? INVALID_CREDENTIALS_ERROR : GENERIC_ERROR}
          </FormHelperText>
        )}
        <Button className={styles.submitButton} type="submit" fullWidth variant="contained" disabled={userDataLoading}>
          <Spinner size="large" spinning={userDataLoading} inContainer />
          Sign In
        </Button>
      </form>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/sign-up" type="link">
            Don't have an account? Sign up
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignIn;
