import AuthGuard from 'guards/AuthGuard';
import Sidebar from './Sidebar';

const SidebarWithGuards = () => (
  <AuthGuard>
    <Sidebar />
  </AuthGuard>
);

export default SidebarWithGuards;
