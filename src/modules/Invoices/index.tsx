import AuthGuard from 'guards/AuthGuard';
import Invoices from './Invoices';

const InvoicesWithGuard = () => (
  <AuthGuard>
    <Invoices />
  </AuthGuard>
);

export default InvoicesWithGuard;
