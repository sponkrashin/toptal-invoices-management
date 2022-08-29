import { Client } from './client';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  date: Date;
  dueDate: Date;
  value: number;
  client: Client;
}
