import { MouseEventHandler, PropsWithChildren, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from 'store/auth/AuthContext';
import AnonymousUser from '../AnonymousUser';
import LoggedUser from '../LoggedUser';

const AppBarStyled = styled<PropsWithChildren<any>>(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerButtonStyled = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const TitleStyled = styled<PropsWithChildren<any>>(Typography)(() => ({
  flexGrow: 1,
}));

export interface HeaderProps {
  open: boolean;
  onToggleDrawer: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ open, onToggleDrawer }: HeaderProps) => {
  const authContext = useContext(AuthContext)!;

  const signInHandler = (userName: string) => authContext.onSignIn(userName);

  const userComponent = authContext.isLoggedIn ? (
    <LoggedUser userName={authContext.userName!} onSignOut={authContext.onSignOut} />
  ) : (
    <AnonymousUser onSignIn={signInHandler} />
  );

  return (
    <AppBarStyled position="absolute" open={open}>
      <Toolbar>
        <DrawerButtonStyled edge="start" color="inherit" aria-label="open drawer" onClick={onToggleDrawer}>
          <MenuIcon />
        </DrawerButtonStyled>
        <TitleStyled component="h1" variant="h6" color="inherit" noWrap>
          Invoices Management
        </TitleStyled>
        {userComponent}
      </Toolbar>
    </AppBarStyled>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Header;
