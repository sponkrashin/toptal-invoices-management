import { ClientCompanyDetails } from './clientCompanyDetails';

export interface Client {
  id: string;
  email: string;
  name: string;
  companyDetails: ClientCompanyDetails;
  totalBilled?: number;
  invoicesCount?: number;
}
