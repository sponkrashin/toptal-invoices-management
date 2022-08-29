import { Paper } from '@mui/material';
import ClientsTable from 'components/ClientsTable';
import InvoicesTable from 'components/InvoicesTable';
import Title from 'components/Title';
import { useClients } from 'data/useClients';
import { useInvoices } from 'data/useInvoices';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { data: clients } = useClients();
  const { data: invoices } = useInvoices();

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
