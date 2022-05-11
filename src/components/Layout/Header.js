import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Login from './Login';
import LoggedUser from './LoggedUser';

const AppBarStyled = styled(MuiAppBar)(({ theme }) => ({
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
  const [currentUserAuth, setCurrentUserAuth] = useState({
    isAuth: false,
    userName: null,
  });

  const signOutClickHandler = () =>
    setCurrentUserAuth({
      isAuth: false,
      userName: null,
    });

  const signInClickHandler = () =>
    setCurrentUserAuth({
      isAuth: true,
      userName: ' Test User',
    });

  const userAuth = currentUserAuth.isAuth ? (
    <LoggedUser
      userName={currentUserAuth.userName}
      onSignOutClick={signOutClickHandler}
    />
  ) : (
    <Login onSignInClick={signInClickHandler} />
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
          Dashboard
        </TitleStyled>
        {userAuth}
      </Toolbar>
    </AppBarStyled>
  );
}

Header.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Header;
