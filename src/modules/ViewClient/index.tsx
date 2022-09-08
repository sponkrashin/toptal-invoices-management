import AuthGuard from 'guards/AuthGuard';
import UserCompanyGuard from 'guards/UserCompanyGuard';
import ViewClient from './ViewClient';

const ViewClientWithGuards = () => (
  <AuthGuard>
    <UserCompanyGuard>
      <ViewClient />
    </UserCompanyGuard>
  </AuthGuard>
);

export default ViewClientWithGuards;
