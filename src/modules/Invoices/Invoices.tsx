import Card from 'components/Card';
import InvoicesTable from 'components/InvoicesTable';
import Spinner from 'components/Spinner';
import { useInvoices } from 'hooks/useInvoices';
import styles from './Invoices.module.scss';

const Invoices = () => {
  const { data, isLoading } = useInvoices();

  return (
    <Card contentClassName={`${isLoading ? styles.cardContentWithLoading : ''}`}>
      <Spinner size="large" spinning={isLoading} />
      {!isLoading && (
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
