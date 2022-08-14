import { Paper } from '@mui/material';
import { MOCK_INVOICES } from 'store/mock-invoices';
import InvoicesDataTable from './InvoicesDataTable';

const Invoices = () => (
  <Paper>
    <InvoicesDataTable
      data={MOCK_INVOICES}
      onRowClick={(row) => console.log('From invoices page', row)}
      enableFiltering
      enableSorting
      enablePagination
    />
  </Paper>
);

export default Invoices;
