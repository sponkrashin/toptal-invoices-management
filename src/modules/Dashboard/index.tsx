import AuthGuard from 'guards/AuthGuard';
import Dashboard from './Dashboard';

const DashboardWithGuard = () => (
  <AuthGuard>
    <Dashboard />
  </AuthGuard>
);

export default DashboardWithGuard;
