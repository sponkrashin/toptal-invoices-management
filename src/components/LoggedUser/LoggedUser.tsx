import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import UserMenu from '../UserMenu';
import styles from './LoggedUser.module.scss';

export interface LoggedUserProps {
  userName: string;
  onSignOut: () => void;
}

const LoggedUser = ({ userName, onSignOut }: LoggedUserProps) => (
  <>
    <Typography className={styles.username} component="h1" variant="h6">
      {userName}
    </Typography>
    <UserMenu userName={userName} onSignOutClick={onSignOut} />
  </>
);

LoggedUser.propTypes = {
  userName: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default LoggedUser;
