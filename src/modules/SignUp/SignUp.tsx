import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import styles from './SignUp.module.scss';

const SignUp = () => (
  <Box className={styles.wrapper}>
    <Avatar className={styles.icon}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign up
    </Typography>
    <Box className={styles.form} component="form" noValidate>
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
      <Button className={styles.submitButton} type="submit" fullWidth variant="contained">
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default SignUp;
