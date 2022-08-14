import { PropsWithChildren } from 'react';
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const WrapperStyled = (props: PropsWithChildren<{}>) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 'sm',
    }}
    {...props}
  />
);

const IconStyled = (props: PropsWithChildren<{}>) => <Avatar sx={{ mb: 1, bgcolor: 'primary.main' }} {...props} />;

const FormWrapperStyled = (props: PropsWithChildren<any>) => <Box sx={{ mt: 1, width: '100%' }} {...props} />;

const SubmitButtonWrapperStyled = (props: PropsWithChildren<any>) => <Button sx={{ mt: 3, mb: 2 }} {...props} />;

const SignUp = () => (
  <WrapperStyled>
    <IconStyled>
      <LockOutlinedIcon />
    </IconStyled>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <FormWrapperStyled component="form" noValidate>
      <TextField
        margin="normal"
        fullWidth
        id="firstName"
        name="firstName"
        label="First Name"
        autoComplete="given-name"
        autoFocus
        required
      />
      <TextField
        margin="normal"
        fullWidth
        id="lastName"
        name="lastName"
        label="Last Name"
        autoComplete="family-name"
        required
      />
      <TextField
        margin="normal"
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        autoComplete="email"
        required
      />
      <TextField
        margin="normal"
        fullWidth
        id="password"
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        required
      />
      <SubmitButtonWrapperStyled type="submit" fullWidth variant="contained">
        Sign Up
      </SubmitButtonWrapperStyled>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </FormWrapperStyled>
  </WrapperStyled>
);

export default SignUp;
