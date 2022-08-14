import Link from 'next/link';
import { useRouter } from 'next/router';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';

const SidebarItems = () => {
  const { pathname: currentPath } = useRouter();

  const isDashboardActive = currentPath === '/';
  const isInvoicesActive = currentPath === '/invoices';
  const isClientsActive = currentPath === '/clients';

  return (
    <List component="nav">
      <Link href="/">
        <ListItemButton selected={isDashboardActive}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link href="/invoices">
        <ListItemButton selected={isInvoicesActive}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItemButton>
      </Link>
      <Link href="/clients">
        <ListItemButton selected={isClientsActive}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default SidebarItems;
