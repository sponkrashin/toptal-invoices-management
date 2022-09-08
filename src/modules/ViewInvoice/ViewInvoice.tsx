import { useAppRouter } from 'hooks/useAppRouter';

const ViewInvoice = () => {
  const { idQueryParam } = useAppRouter();
  return <div>View invoice page with id {idQueryParam}</div>;
};

export default ViewInvoice;
