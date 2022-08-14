import { Paper } from '@mui/material';
import ClientsTable from 'components/ClientsTable';
import { MOCK_CLIENTS } from 'store/mock-clients';

const Clients = () => (
  <Paper>
    <ClientsTable
      data={MOCK_CLIENTS}
      onRowClick={(row) => console.log('From clients page', row)}
      enableFiltering
      enableSorting
      enablePagination
    />
  </Paper>
);

export default Clients;
