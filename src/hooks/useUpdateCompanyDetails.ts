import { useCallback } from 'react';
import * as apiService from 'data/apiService';
import { CompanyDetails } from 'data/companyDetails';
import { HttpError } from 'data/httpError';
import { useAsync } from './useAsync';
import { User } from 'data/user';

export function useUpdateCompanyDetails(): {
  isLoading: boolean;
  data: User | null;
  error: HttpError | null;
  execute: (model: CompanyDetails) => void;
} {
  const fetcher = useCallback((model: CompanyDetails) => apiService.updateCompanyDetails(model), []);
  const { status, value, error, execute: executeAsync } = useAsync<User, HttpError>(fetcher, false);

  const execute = useCallback(
    (model: CompanyDetails) => {
      executeAsync(model);
    },
    [executeAsync]
  );

  return {
    isLoading: status === 'pending',
    data: value,
    error,
    execute,
  };
}
