import AuthGuard from 'guards/AuthGuard';
import CompanyDetails from './CompanyDetails';

const CompanyDetailsWithGuards = () => (
  <AuthGuard>
    <CompanyDetails />
  </AuthGuard>
);

export default CompanyDetailsWithGuards;
