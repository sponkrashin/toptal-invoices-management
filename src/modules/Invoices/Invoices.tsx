import { Paper } from '@mui/material';
import InvoicesTable from 'components/InvoicesTable';
import { MOCK_INVOICES } from 'store/mock-invoices';

const Invoices = () => (
  <Paper>
    <InvoicesTable
      data={MOCK_INVOICES}
      onRowClick={(row) => console.log('From invoices page', row)}
      enableFiltering
      enableSorting
      enablePagination
    />
  </Paper>
);

export default Invoices;
