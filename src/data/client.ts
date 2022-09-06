import { CompanyDetails } from './companyDetails';

export interface Client {
  id: string;
  email: string;
  name: string;
  companyDetails: CompanyDetails;
  totalBilled?: number;
  invoicesCount?: number;
}
