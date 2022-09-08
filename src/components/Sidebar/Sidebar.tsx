import PropTypes from 'prop-types';
import { Divider, Drawer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import SidebarItems from './SidebarItems';
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  open: boolean;
}

const Sidebar = ({ open }: SidebarProps) => (
  <Drawer className={`${styles.drawer} ${!open && styles.collapsed}`} variant="permanent" open={open}>
    <Toolbar />
    <Divider />
    <SidebarItems />
  </Drawer>
);

Sidebar.propTypes = {
  open: PropTypes.bool,
};

export default Sidebar;
