import { Paper } from '@mui/material';
import { MOCK_CLIENTS } from 'store/mock-clients';
import ClientsDataTable from './ClientsDataTable';

const Clients = () => (
  <Paper>
    <ClientsDataTable
      data={MOCK_CLIENTS}
      onRowClick={(row) => console.log('From clients page', row)}
      enableFiltering
      enableSorting
      enablePagination
    />
  </Paper>
);

export default Clients;
