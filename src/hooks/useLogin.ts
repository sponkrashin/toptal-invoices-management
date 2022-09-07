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
  execute: (model: LoginRequest) => void;
} {
  const fetcher = useCallback((model: LoginRequest) => apiService.login(model), []);
  const { value, status, error, execute: executeAsync } = useAsync<LoginResponse, HttpError>(fetcher, false);

  const execute = useCallback(
    (model: LoginRequest) => {
      executeAsync(model);
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
