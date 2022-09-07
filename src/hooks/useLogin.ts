import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { HttpError } from 'data/httpError';
import { LoginRequest } from 'data/loginRequest';
import { LoginResponse } from 'data/loginResponse';
import { useAsync } from './useAsync';

export function useLogin(): {
  data: LoginResponse | null;
  isLoading: boolean;
  error: HttpError | null;
  execute: (email: string, password: string) => void;
} {
  const fetcher = useCallback((email: string, password: string) => apiService.login({ email, password }), []);
  const { value, status, error, execute: executeAsync } = useAsync<LoginResponse, HttpError>(fetcher, false);

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
