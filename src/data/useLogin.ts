import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { LoginResponse } from './loginResponse';
import { useAsync } from './useAsync';

export function useLogin(): {
  data: LoginResponse | null;
  isLoading: boolean;
  error: any;
  execute: (email: string, password: string) => void;
} {
  const fetcher = useCallback((email: string, password: string) => apiService.login({ email, password }), []);
  const { value, status, error, execute: executeAsync } = useAsync(fetcher, false);

  const execute = useCallback(
    (email: string, password: string) => {
      executeAsync(email, password);
    },
    [executeAsync]
  );

  return {
    data: value,
    isLoading: status === 'pending',
    error,
    execute,
  };
}
