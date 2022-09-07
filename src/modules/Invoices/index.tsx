import AuthGuard from 'guards/AuthGuard';
import UserCompanyGuard from 'guards/UserCompanyGuard';
import Invoices from './Invoices';

const InvoicesWithGuard = () => (
  <AuthGuard>
    <UserCompanyGuard>
      <Invoices />
    </UserCompanyGuard>
  </AuthGuard>
);

export default InvoicesWithGuard;
