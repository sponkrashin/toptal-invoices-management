import { useAppRouter } from 'hooks/useAppRouter';

const ViewClient = () => {
  const { idQueryParam } = useAppRouter();
  return <div>View client page with id {idQueryParam}</div>;
};

export default ViewClient;
