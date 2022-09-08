import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'store/hooks';
import { selectUserIsLoggedIn, selectUserName, signOut } from 'store/userInfoSlice';
import AnonymousUser from '../AnonymousUser';
import LoggedUser from '../LoggedUser';
import styles from './Header.module.scss';

const Header = () => {
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
        <Typography className={styles.title} component="h1" variant="h6" noWrap>
          Invoices Management
        </Typography>
        {userComponent}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
