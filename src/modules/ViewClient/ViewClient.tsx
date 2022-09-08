import { useAppRouter } from 'hooks/useAppRouter';

const ViewClient = () => {
  const { router } = useAppRouter();
  return <div>View client page with id {router.query['id']}</div>;
};

export default ViewClient;
