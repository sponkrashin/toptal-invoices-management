import { CompanyDetails } from './companyDetails';

export interface LoginResponse {
  user_id: string;
  email: string;
  name: string;
  token: string;
  companyDetails: CompanyDetails;
}
