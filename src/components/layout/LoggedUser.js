import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import UserMenu from './UserMenu';

const UserNameStyled = styled(Typography)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

function LoggedUser({ userName, onSignOutClick }) {
  return (
    <Fragment>
      <UserNameStyled component="h1" variant="h6">
        {userName}
      </UserNameStyled>
      <UserMenu userName={userName} onSignOutClick={onSignOutClick} />
    </Fragment>
  );
}

LoggedUser.propTypes = {
  userName: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default LoggedUser;
