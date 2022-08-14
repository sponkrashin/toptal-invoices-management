import { Paper } from '@mui/material';
import { MOCK_INVOICES } from 'store/mock-invoices';
import InvoicesDataTable from './InvoicesDataTable';

export default function Invoices() {
  return (
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
}
