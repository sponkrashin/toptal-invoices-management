import Card from 'components/Card';
import ClientsTable from 'components/ClientsTable';
import Spinner from 'components/Spinner';
import { useClients } from 'hooks/useClients';
import styles from './Clients.module.scss';

const Clients = () => {
  const { data, isLoading } = useClients();

  return (
    <Card contentClassName={`${isLoading ? styles.cardContentWithLoading : ''}`}>
      <Spinner size="large" spinning={isLoading} />
      {!isLoading && (
        <ClientsTable
          data={data}
          onRowClick={(row) => console.log('From clients page', row)}
          enableFiltering
          enableSorting
          enablePagination
        />
      )}
    </Card>
  );
};

export default Clients;
