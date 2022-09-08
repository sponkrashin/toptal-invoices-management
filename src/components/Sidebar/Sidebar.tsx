import { Drawer } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import SidebarItems from './SidebarItems';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <Drawer className={styles.drawer} variant="permanent">
    <Toolbar />
    <SidebarItems />
  </Drawer>
);

export default Sidebar;
