import { MouseEventHandler, useContext } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { AuthContext } from 'store/auth/AuthContext';
import AnonymousUser from '../AnonymousUser';
import LoggedUser from '../LoggedUser';
import styles from './Header.module.scss';

export interface HeaderProps {
  onToggleDrawer: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ onToggleDrawer }: HeaderProps) => {
  const authContext = useContext(AuthContext)!;

  const signInHandler = (userName: string) => authContext.onSignIn(userName);

  const userComponent = authContext.isLoggedIn ? (
    <LoggedUser userName={authContext.userName!} onSignOut={authContext.onSignOut} />
  ) : (
    <AnonymousUser onSignIn={signInHandler} />
  );

  return (
    <AppBar className={styles.appBar} position="absolute">
      <Toolbar>
        <IconButton
          className={styles.drawerButton}
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={styles.title} component="h1" variant="h6" color="inherit" noWrap>
          Invoices Management
        </Typography>
        {userComponent}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};

export default Header;
