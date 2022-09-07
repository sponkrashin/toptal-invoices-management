import Link from 'next/link';
import { useRouter } from 'next/router';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { CLIENTS_URL, DASHBOARD_URL, INVOICES_URL } from 'hooks/useAppRouter';

const SidebarItems = () => {
  const { pathname: currentPath } = useRouter();

  const isDashboardActive = currentPath === DASHBOARD_URL;
  const isInvoicesActive = currentPath === INVOICES_URL;
  const isClientsActive = currentPath === CLIENTS_URL;

  return (
    <List component="nav">
      <Link href={DASHBOARD_URL}>
        <ListItemButton selected={isDashboardActive}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </Link>
      <Link href={INVOICES_URL}>
        <ListItemButton selected={isInvoicesActive}>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Invoices" />
        </ListItemButton>
      </Link>
      <Link href={CLIENTS_URL}>
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
