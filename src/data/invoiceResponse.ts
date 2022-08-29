import { Client } from './client';

export interface InvoiceResponse {
  invoice: {
    id: string;
    invoice_number: string;
    client_id: string;
    date: number;
    dueDate: number;
    value: number;
  };
  client: Client;
}
