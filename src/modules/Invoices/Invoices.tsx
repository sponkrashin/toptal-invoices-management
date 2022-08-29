import Card from 'components/Card';
import InvoicesTable from 'components/InvoicesTable';
import { useInvoices } from 'data/useInvoices';

const Invoices = () => {
  const { data, isLoading } = useInvoices();

  return (
    <Card loading={isLoading}>
      <InvoicesTable
        data={data}
        onRowClick={(row) => console.log('From invoices page', row)}
        enableFiltering
        enableSorting
        enablePagination
      />
    </Card>
  );
};

export default Invoices;
