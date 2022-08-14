import { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from 'store/auth/auth-context';
import AnonymousUser from './AnonymousUser';
import LoggedUser from './LoggedUser';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerButtonStyled = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const TitleStyled = styled(Typography)(() => ({
  flexGrow: 1,
}));

function Header({ open, onToggleDrawer }) {
  const authContext = useContext(AuthContext);

  const signInHandler = (userName) => authContext.onSignIn(userName);

  const userComponent = authContext.isLoggedIn ? (
    <LoggedUser
      userName={authContext.userName}
      onSignOut={authContext.onSignOut}
    />
  ) : (
    <AnonymousUser onSignIn={signInHandler} />
  );

  return (
    <AppBarStyled position="absolute" open={open}>
      <Toolbar>
        <DrawerButtonStyled
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
        >
          <MenuIcon />
        </DrawerButtonStyled>
        <TitleStyled component="h1" variant="h6" color="inherit" noWrap>
          Invoices Management
        </TitleStyled>
        {userComponent}
      </Toolbar>
    </AppBarStyled>
  );
}

Header.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Header;
