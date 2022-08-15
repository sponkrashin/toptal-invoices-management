import { SyntheticEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Menu, MenuItem } from '@mui/material';
import styles from './UserMenu.module.scss';

export interface UserMenuProps {
  userName: string;
  onSignOutClick: () => void;
}

const UserMenu = ({ userName, onSignOutClick }: UserMenuProps) => {
  const [menuAnchorElement, setMenuAnchorElement] = useState<HTMLElement | null>(null);

  const avatarClickHandler = (event: SyntheticEvent<HTMLElement>) => {
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
    <>
      <Avatar className={styles.icon} onClick={avatarClickHandler}>
        {firstLetters}
      </Avatar>
      <Menu
        anchorEl={menuAnchorElement}
        open={!!menuAnchorElement}
        onClick={menuCloseHandler}
        onClose={menuCloseHandler}
      >
        <MenuItem onClick={onSignOutClick}>Sign out</MenuItem>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default UserMenu;
