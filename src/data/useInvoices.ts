import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { Invoice } from './invoice';
import { useAsync } from './useAsync';

export function useInvoices(): { data: Invoice[]; isLoading: boolean; error: any } {
  const fetcher = useCallback(() => apiService.getInvoices(), []);
  const { status, value, error } = useAsync(fetcher, true);

  return {
    data: value ?? [],
    isLoading: status === 'pending',
    error,
  };
}
