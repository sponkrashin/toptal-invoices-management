import AuthGuard from 'guards/AuthGuard';
import UserCompanyGuard from 'guards/UserCompanyGuard';
import Dashboard from './Dashboard';

const DashboardWithGuard = () => (
  <AuthGuard>
    <UserCompanyGuard>
      <Dashboard />
    </UserCompanyGuard>
  </AuthGuard>
);

export default DashboardWithGuard;
