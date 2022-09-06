import { Client } from './client';
import { Invoice } from './invoice';
import { InvoiceResponse } from './invoiceResponse';
import { LoginRequest } from './loginRequest';
import { LoginResponse } from './loginResponse';

async function baseApiCall<T = any>(relativeUrl: string, includeAuthToken: boolean, options?: RequestInit): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;
  const authToken = '555';

  const authHeaders = includeAuthToken
    ? {
        'x-access-token': authToken,
      }
    : undefined;

  const headers = {
    ...options?.headers,
    ...authHeaders,
    'Content-Type': 'application/json',
  };

  const response = await fetch(`${baseUrl}${relativeUrl}`, { ...options, headers });
  return (await response.json()) as T;
}

const api = {
  get: function <T = any>(relativeUrl: string) {
    return baseApiCall<T>(relativeUrl, true, { method: 'GET' });
  },
  post: function <T = any>(relativeUrl: string, body: any, includeAuthToken: boolean = true) {
    return baseApiCall<T>(relativeUrl, includeAuthToken, { method: 'POST', body: JSON.stringify(body) });
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

export async function login(model: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/login', model, false);
  return response;
}
