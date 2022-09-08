import AuthGuard from 'guards/AuthGuard';
import UserCompanyGuard from 'guards/UserCompanyGuard';
import ViewInvoice from './ViewInvoice';

const ViewInvoiceWithGuards = () => (
  <AuthGuard>
    <UserCompanyGuard>
      <ViewInvoice />
    </UserCompanyGuard>
  </AuthGuard>
);

export default ViewInvoiceWithGuards;
