import { CompanyDetails } from './companyDetails';

export interface User {
  id: string;
  name: string;
  email: string;
  companyDetails: CompanyDetails;
}
