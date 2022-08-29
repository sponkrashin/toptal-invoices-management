import { Client } from './client';
import { Invoice } from './invoice';
import { InvoiceResponse } from './invoiceResponse';

async function baseApiCall<T = any>(relativeUrl: string, options?: RequestInit): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;
  const authToken = '555';

  const headers = {
    ...options?.headers,
    'x-access-token': authToken,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${baseUrl}${relativeUrl}`, { ...options, headers });
  return (await response.json()) as T;
}

const api = {
  get: function <T = any>(relativeUrl: string) {
    return baseApiCall<T>(relativeUrl, { method: 'GET' });
  },
};

export async function getClients(): Promise<Client[]> {
  const response = await api.get<{ clients: Client[] }>('/clients');
  return response.clients;
}

export async function getInvoices(): Promise<Invoice[]> {
  const response = await api.get<{ invoices: InvoiceResponse[] }>('/invoices');

  return response.invoices.map(
    (inv) =>
      ({
        id: inv.invoice.id,
        invoiceNumber: inv.invoice.invoice_number,
        clientId: inv.invoice.client_id,
        date: new Date(inv.invoice.date),
        dueDate: new Date(inv.invoice.dueDate),
        value: inv.invoice.value,
        client: inv.client,
      } as Invoice)
  );
}
