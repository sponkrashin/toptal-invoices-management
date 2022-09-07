import AuthGuard from 'guards/AuthGuard';
import UserCompanyGuard from 'guards/UserCompanyGuard';
import Clients from './Clients';

const ClientsWithGuards = () => (
  <AuthGuard>
    <UserCompanyGuard>
      <Clients />
    </UserCompanyGuard>
  </AuthGuard>
);

export default ClientsWithGuards;
