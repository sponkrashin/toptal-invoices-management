import { MouseEventHandler, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useLogin } from 'data/useLogin';
import { selectUserIsLoggedIn, selectUserName, signIn, signOut } from 'store/authSlice';
import { useSelector, useDispatch } from 'store/hooks';
import AnonymousUser from '../AnonymousUser';
import LoggedUser from '../LoggedUser';
import styles from './Header.module.scss';

export interface HeaderProps {
  onToggleDrawer: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({ onToggleDrawer }: HeaderProps) => {
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const { data: userData, execute: login } = useLogin();

  const handleSignIn = () => {
    login('fake_user1@officehourtesting.com', '123456');
  };

  useEffect(() => {
    if (userData) {
      dispatch(signIn(userData.name, userData.token));
    }
  }, [userData, dispatch]);

  const handleSignOut = () => dispatch(signOut());

  const userComponent = userIsLoggedIn ? (
    <LoggedUser userName={userName!} onSignOut={handleSignOut} />
  ) : (
    <AnonymousUser onSignIn={handleSignIn} />
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
