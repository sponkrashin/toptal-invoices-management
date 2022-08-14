import { Fragment, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import UserMenu from '../UserMenu';

const UserNameStyled = styled<PropsWithChildren<any>>(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export interface LoggedUserProps {
  userName: string;
  onSignOut: () => void;
}

const LoggedUser = ({ userName, onSignOut }: LoggedUserProps) => (
  <Fragment>
    <UserNameStyled component="h1" variant="h6">
      {userName}
    </UserNameStyled>
    <UserMenu userName={userName} onSignOutClick={onSignOut} />
  </Fragment>
);

LoggedUser.propTypes = {
  userName: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default LoggedUser;
