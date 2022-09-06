import AuthGuard from 'guards/AuthGuard';
import Clients from './Clients';

const ClientsWithGuard = () => (
  <AuthGuard>
    <Clients />
  </AuthGuard>
);

export default ClientsWithGuard;
