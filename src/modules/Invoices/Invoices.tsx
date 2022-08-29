import { Paper } from '@mui/material';
import InvoicesTable from 'components/InvoicesTable';
import { useInvoices } from 'data/useInvoices';

const Invoices = () => {
  const { data } = useInvoices();

  return (
    <Paper>
      <InvoicesTable
        data={data}
        onRowClick={(row) => console.log('From invoices page', row)}
        enableFiltering
        enableSorting
        enablePagination
      />
    </Paper>
  );
};

export default Invoices;
