import Card from 'components/Card';
import InvoicesTable from 'components/InvoicesTable';
import Spinner from 'components/Spinner';
import { useInvoices } from 'data/useInvoices';

const Invoices = () => {
  const { data, isLoading } = useInvoices();

  return (
    <Card>
      <Spinner size="large" spinning={!!isLoading} />
      {isLoading && (
        <InvoicesTable
          data={data}
          onRowClick={(row) => console.log('From invoices page', row)}
          enableFiltering
          enableSorting
          enablePagination
        />
      )}
    </Card>
  );
};

export default Invoices;
