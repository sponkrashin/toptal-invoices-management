import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { Client } from 'data/client';
import { HttpError } from 'data/httpError';
import { useAsync } from './useAsync';

export function useClients(): { data: Client[]; isLoading: boolean; error: HttpError | null } {
  const fetcher = useCallback(() => apiService.getClients(), []);
  const { status, value, error } = useAsync<Client[], HttpError>(fetcher, true);

  return {
    data: value ?? [],
    isLoading: status === 'pending',
    error,
  };
}
