import { PropsWithChildren } from 'react';
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const WrapperStyled = (props: PropsWithChildren<{}>) => (
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 'sm',
    }}
    {...props}
  />
);

const IconStyled = (props: PropsWithChildren<{}>) => <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} {...props} />;

const FormWrapperStyled = (props: PropsWithChildren<any>) => <Box sx={{ mt: 3, width: '100%' }} {...props} />;

const SubmitButtonWrapperStyled = (props: PropsWithChildren<any>) => <Button sx={{ mt: 3, mb: 2 }} {...props} />;

const SignIn = () => (
  <WrapperStyled>
    <IconStyled>
      <LockOutlinedIcon />
    </IconStyled>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <FormWrapperStyled component="form" noValidate>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        autoComplete="email"
        autoFocus
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
        Sign In
      </SubmitButtonWrapperStyled>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </FormWrapperStyled>
  </WrapperStyled>
);

export default SignIn;
