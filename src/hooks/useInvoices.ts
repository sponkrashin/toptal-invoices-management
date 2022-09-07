import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { HttpError } from 'data/httpError';
import { Invoice } from 'data/invoice';
import { useAsync } from './useAsync';

export function useInvoices(): { data: Invoice[]; isLoading: boolean; error: HttpError | null } {
  const fetcher = useCallback(() => apiService.getInvoices(), []);
  const { status, value, error } = useAsync<Invoice[], HttpError>(fetcher, true);

  return {
    data: value ?? [],
    isLoading: status === 'pending',
    error,
  };
}
