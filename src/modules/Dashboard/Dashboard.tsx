import { Paper } from '@mui/material';
import keyBy from 'lodash/keyBy';
import ClientsTable from 'components/ClientsTable';
import InvoicesTable from 'components/InvoicesTable';
import Title from 'components/Title';
import { useClients } from 'data/useClients';
import { useInvoices } from 'data/useInvoices';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { data: clients } = useClients();
  const { data: invoices } = useInvoices();

  const filteredInvoices = invoices
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .filter((_, index) => index < 10);

  const filteredInvoicesByClientId = keyBy(filteredInvoices, (inv) => inv.clientId);

  const filteredClients = clients.filter((inv) => !!filteredInvoicesByClientId[inv.id]);

  return (
    <>
      <Paper className={styles.card}>
        <Title>Clients</Title>
        <ClientsTable data={filteredClients} onRowClick={(row) => console.log('From dashboard', row)} />
      </Paper>
      <Paper className={styles.card}>
        <Title>Invoices</Title>
        <InvoicesTable data={filteredInvoices} onRowClick={(row) => console.log('From dashboard', row)} />
      </Paper>
    </>
  );
};

export default Dashboard;
