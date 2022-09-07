import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Button, Grid, Link, TextField, Typography, FormHelperText } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import { NavigationTarget, SIGN_IN_URL, useAppRouter } from 'hooks/useAppRouter';
import { useRegister } from 'hooks/useRegister';
import { useDispatch } from 'store/hooks';
import { showNotification } from 'store/notificationsSlice';
import styles from './SignUp.module.scss';

interface FormInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const formSchema = zod
  .object({
    name: zod.string().min(1, { message: 'This field is required' }),
    email: zod.string().min(1, { message: 'This field is required' }).email(),
    password: zod
      .string()
      .min(5, { message: 'The password length should be between 5 and 16 symbols' })
      .max(16, { message: 'The password length should be between 5 and 16 symbols' }),
    confirmPassword: zod.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

const defaultFormValues: FormInput = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const GENERIC_ERROR = 'Something unusual happened. Please, try again later';

const SignUp = () => {
  const { isLoading, isSuccess, error, execute: registerUser } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: defaultFormValues, resolver: zodResolver(formSchema) });

  const dispatch = useDispatch();
  const { navigate } = useAppRouter();

  useEffect(() => {
    if (isSuccess) {
      dispatch(showNotification({ message: 'User successfully created!', type: 'success' }));
      navigate(NavigationTarget.SignIn);
    }
  }, [isSuccess, dispatch, navigate]);

  const handleFormSubmit = (data: FormInput) => {
    if (isLoading) {
      return;
    }

    registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
  };

  return (
    <Card className={styles.card} contentClassName={styles.content}>
      <Avatar className={styles.icon}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          {...register('name')}
          margin="normal"
          fullWidth
          label="Name"
          autoComplete="name"
          error={!!errors.name}
          data-test="name"
        />
        {errors.name && (
          <FormHelperText error data-test="name-error">
            {errors.name.message}
          </FormHelperText>
        )}
        <TextField
          {...register('email')}
          margin="normal"
          fullWidth
          label="Email"
          autoComplete="email"
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
        <TextField
          {...register('confirmPassword')}
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
          autoComplete="password"
          error={!!errors.confirmPassword}
          data-test="confirm-password"
        />
        {errors.confirmPassword && (
          <FormHelperText error data-test="confirm-password-error">
            {errors.confirmPassword.message}
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
          data-test="submit-sign-up"
        >
          <Spinner size="large" spinning={isLoading} inContainer />
          Sign Up
        </Button>
      </form>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href={SIGN_IN_URL} type="link">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SignUp;
