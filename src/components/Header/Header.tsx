import { MouseEventHandler } from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'store/hooks';
import { selectUserIsLoggedIn, selectUserName, signOut } from 'store/userInfoSlice';
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

  const handleSignOut = () => dispatch(signOut());

  const userComponent = userIsLoggedIn ? (
    <LoggedUser userName={userName!} onSignOut={handleSignOut} />
  ) : (
    <AnonymousUser />
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
