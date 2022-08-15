import { Avatar, Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from './SignIn.module.scss';

const SignIn = () => (
  <Box className={styles.wrapper}>
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
      <Button className={styles.submitButton} type="submit" fullWidth variant="contained">
        Sign In
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default SignIn;
