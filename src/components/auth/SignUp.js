import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const WrapperStyled = (props) => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 'sm',
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

const IconStyled = (props) => {
  return (
    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }} {...props}>
      {props.children}
    </Avatar>
  );
};

const FormWrapperStyled = (props) => {
  return (
    <Box sx={{ mt: 3, width: '100%' }} {...props}>
      {props.children}
    </Box>
  );
};

const SubmitButtonWrapperStyled = (props) => {
  return (
    <Button sx={{ mt: 3, mb: 2 }} {...props}>
      {props.children}
    </Button>
  );
};

export default function SignUp() {
  return (
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
        {/* </Grid>
        </Grid> */}
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
}
