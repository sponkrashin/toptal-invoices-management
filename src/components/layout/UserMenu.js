import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';

const AvatarStyled = styled(Avatar)(() => ({
  cursor: 'pointer',
}));

function UserMenu({ userName, onSignOutClick }) {
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

  const avatarClickHandler = (event) => {
    setMenuAnchorElement(event.currentTarget);
  };

  const menuCloseHandler = () => {
    setMenuAnchorElement(null);
  };

  const firstLetters = userName
    .split(' ')
    .map((arr) => arr[0])
    .join('');

  return (
    <Fragment>
      <AvatarStyled onClick={avatarClickHandler}>{firstLetters}</AvatarStyled>
      <Menu
        anchorEl={menuAnchorElement}
        open={!!menuAnchorElement}
        onClick={menuCloseHandler}
        onClose={menuCloseHandler}
      >
        <MenuItem onClick={onSignOutClick}>Sign out</MenuItem>
      </Menu>
    </Fragment>
  );
}

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default UserMenu;
