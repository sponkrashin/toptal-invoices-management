import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link, useMatch } from 'react-router-dom';

export default function SidebarItems() {
  const isDashboardActive = useMatch({ path: '/', end: true }) !== null;
  const isInvoicesActive = useMatch({ path: '/invoices', end: true }) !== null;
  const isClientsActive = useMatch({ path: '/clients', end: true }) !== null;

  return (
    <List component="nav">
      <ListItemButton selected={isDashboardActive} component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton
        selected={isInvoicesActive}
        component={Link}
        to="/invoices"
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Invoices" />
      </ListItemButton>
      <ListItemButton selected={isClientsActive} component={Link} to="/clients">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemButton>
    </List>
  );
}
