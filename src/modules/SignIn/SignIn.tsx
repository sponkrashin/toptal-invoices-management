import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, TextField, Typography, Grid, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import Card from 'components/Card';
import Link from 'components/Link';
import Spinner from 'components/Spinner';
import { SIGN_UP_URL } from 'hooks/useAppRouter';
import { useLogin } from 'hooks/useLogin';
import { useDispatch } from 'store/hooks';
import { signIn } from 'store/userInfoSlice';
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

const GENERIC_ERROR = 'Something unusual happened. Please, try again later';

const SignIn = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error, execute: login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormValues, resolver: zodResolver(formSchema) });

  useEffect(() => {
    if (data) {
      dispatch(signIn(data.name, data.companyDetails, data.token));
    }
  }, [data, dispatch]);

  const handleFormSubmit = (data: FormInput) => {
    if (isLoading) {
      return;
    }

    login({ email: data.email, password: data.password });
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
          label="Email"
          error={!!errors.email}
          data-test="email"
        />
        {errors.email && (
          <FormHelperText error data-test="email-error">
            {errors.email.message}
          </FormHelperText>
        )}
        <TextField
          {...register('password')}
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          autoComplete="password"
          error={!!errors.password}
          data-test="password"
        />
        {errors.password && (
          <FormHelperText error data-test="password-error">
            {errors.password.message}
          </FormHelperText>
        )}
        {error && (
          <FormHelperText error data-test="form-error">
            {error.isBadRequest() ? error.message : GENERIC_ERROR}
          </FormHelperText>
        )}
        <Button
          className={styles.submitButton}
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          data-test="submit-login"
        >
          <Spinner size="large" spinning={isLoading} inContainer />
          Sign In
        </Button>
      </form>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href={SIGN_UP_URL} type="link">
            Don't have an account? Sign up
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignIn;
