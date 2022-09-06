import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { Client } from './client';
import { useAsync } from './useAsync';

export function useClients(): { data: Client[]; isLoading: boolean; error: any } {
  const fetcher = useCallback(() => apiService.getClients(), []);
  const { status, value, error } = useAsync(fetcher, true);

  return {
    data: value ?? [],
    isLoading: status === 'pending',
    error,
  };
}
