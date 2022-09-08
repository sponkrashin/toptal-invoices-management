import keyBy from 'lodash/keyBy';
import Card from 'components/Card';
import ClientsTable from 'components/ClientsTable';
import InvoicesTable from 'components/InvoicesTable';
import Spinner from 'components/Spinner';
import { Client } from 'data/client';
import { Invoice } from 'data/invoice';
import { NavigationTarget, useAppRouter } from 'hooks/useAppRouter';
import { useClients } from 'hooks/useClients';
import { useInvoices } from 'hooks/useInvoices';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const { data: clients, isLoading: clientsLoading } = useClients();
  const { data: invoices, isLoading: invoicesLoading } = useInvoices();
  const { navigate } = useAppRouter();

  const filteredInvoices = invoices
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .filter((_, index) => index < 10);

  const filteredInvoicesByClientId = keyBy(filteredInvoices, (inv) => inv.clientId);

  const filteredClients = clients.filter((inv) => !!filteredInvoicesByClientId[inv.id]);

  const handleClientsRowClick = (row: Client) => navigate(NavigationTarget.ViewClient, row.id);
  const handleInvoicesRowClick = (row: Invoice) => navigate(NavigationTarget.ViewInvoce, row.id);

  return (
    <>
      <Card title="Clients" contentClassName={`${clientsLoading ? styles.cardContentWithLoading : ''}`}>
        <Spinner size="large" spinning={clientsLoading} />
        {!clientsLoading && (
          <ClientsTable data={filteredClients} onRowClick={(row) => handleClientsRowClick(row as any)} />
        )}
      </Card>
      <Card title="Invoices" contentClassName={`${invoicesLoading ? styles.cardContentWithLoading : ''}`}>
        <Spinner size="large" spinning={invoicesLoading} />
        {!invoicesLoading && (
          <InvoicesTable data={filteredInvoices} onRowClick={(row) => handleInvoicesRowClick(row as any)} />
        )}
      </Card>
    </>
  );
};

export default Dashboard;
