import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { Client } from './client';
import { useFetch } from './useFetch';

export function useClients(): { data: Client[]; isLoading: boolean; error: any } {
  const fetcher = useCallback(() => apiService.getClients(), []);
  const { isLoading, data, error } = useFetch('clients', fetcher, true);

  return {
    data: data ?? [],
    isLoading,
    error,
  };
}
