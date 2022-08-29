import keyBy from 'lodash/keyBy';
import Card from 'components/Card';
import ClientsTable from 'components/ClientsTable';
import InvoicesTable from 'components/InvoicesTable';
import { useClients } from 'data/useClients';
import { useInvoices } from 'data/useInvoices';

const Dashboard = () => {
  const { data: clients, isLoading: clientsLoading } = useClients();
  const { data: invoices, isLoading: invoicesLoading } = useInvoices();

  const filteredInvoices = invoices
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .filter((_, index) => index < 10);

  const filteredInvoicesByClientId = keyBy(filteredInvoices, (inv) => inv.clientId);

  const filteredClients = clients.filter((inv) => !!filteredInvoicesByClientId[inv.id]);

  return (
    <>
      <Card title="Clients" loading={clientsLoading}>
        <ClientsTable data={filteredClients} onRowClick={(row) => console.log('From dashboard', row)} />
      </Card>
      <Card title="Invoices" loading={invoicesLoading}>
        <InvoicesTable data={filteredInvoices} onRowClick={(row) => console.log('From dashboard', row)} />
      </Card>
    </>
  );
};

export default Dashboard;
