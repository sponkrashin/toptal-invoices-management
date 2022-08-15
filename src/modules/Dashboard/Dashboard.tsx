import { Paper } from '@mui/material';
import ClientsTable from 'components/ClientsTable';
import InvoicesTable from 'components/InvoicesTable';
import Title from 'components/Title';
import { MOCK_CLIENTS } from 'store/mock-clients';
import { MOCK_INVOICES } from 'store/mock-invoices';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  // Temporarily, just as an example
  const clients = MOCK_CLIENTS.filter((_, i) => i < 2);
  const invoices = MOCK_INVOICES.filter((_, i) => i < 3);

  return (
    <>
      <Paper className={styles.card}>
        <Title>Clients</Title>
        <ClientsTable data={clients} onRowClick={(row) => console.log('From dashboard', row)} />
      </Paper>
      <Paper className={styles.card}>
        <Title>Invoices</Title>
        <InvoicesTable data={invoices} onRowClick={(row) => console.log('From dashboard', row)} />
      </Paper>
    </>
  );
};

export default Dashboard;
