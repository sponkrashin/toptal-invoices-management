import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { HttpError } from 'data/httpError';
import { RegisterRequest } from 'data/registerRequest';
import { useAsync } from './useAsync';

export function useRegister(): {
  isLoading: boolean;
  error: HttpError | null;
  execute: (model: RegisterRequest) => void;
} {
  const fetcher = useCallback((model: RegisterRequest) => apiService.register(model), []);
  const { status, error, execute: executeAsync } = useAsync<void, HttpError>(fetcher, false);

  const execute = useCallback(
    (model: RegisterRequest) => {
      executeAsync(model);
    },
    [executeAsync]
  );

  return {
    isLoading: status === 'pending',
    error,
    execute,
  };
}
