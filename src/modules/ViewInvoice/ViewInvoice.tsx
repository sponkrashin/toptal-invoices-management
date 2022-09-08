import { useAppRouter } from 'hooks/useAppRouter';

const ViewInvoice = () => {
  const { router } = useAppRouter();
  return <div>View invoice page with id {router.query['id']}</div>;
};

export default ViewInvoice;
