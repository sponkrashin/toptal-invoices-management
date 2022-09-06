import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { Invoice } from './invoice';
import { useFetch } from './useFetch';

export function useInvoices(): { data: Invoice[]; isLoading: boolean; error: any } {
  const fetcher = useCallback(() => apiService.getInvoices(), []);
  const { isLoading, data, error } = useFetch('invoices', fetcher, true);

  return {
    data: data ?? [],
    isLoading,
    error,
  };
}
