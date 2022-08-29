import Card from 'components/Card';
import ClientsTable from 'components/ClientsTable';
import { useClients } from 'data/useClients';

const Clients = () => {
  const { data, isLoading } = useClients();

  return (
    <Card loading={isLoading}>
      <ClientsTable
        data={data}
        onRowClick={(row) => console.log('From clients page', row)}
        enableFiltering
        enableSorting
        enablePagination
      />
    </Card>
  );
};

export default Clients;
