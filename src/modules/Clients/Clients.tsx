import { Paper } from '@mui/material';
import ClientsTable from 'components/ClientsTable';
import { useClients } from 'data/useClients';

const Clients = () => {
  const { data } = useClients();

  return (
    <Paper>
      <ClientsTable
        data={data}
        onRowClick={(row) => console.log('From clients page', row)}
        enableFiltering
        enableSorting
        enablePagination
      />
    </Paper>
  );
};

export default Clients;
