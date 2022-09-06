import { useCallback } from 'react';
import { useAsync } from './useAsync';

const cache: Record<string, { data: any } | null> = {};

export function useFetch<T, E = string>(
  cacheKey: string,
  asyncFunction: () => Promise<T>,
  immediate = true
): { data: T | null; isLoading: boolean; error: E | null; execute: () => Promise<void> } {
  const asyncFunctionWithCache = useCallback(async () => {
    const cacheValue = cache[cacheKey];
    if (cacheValue) {
      return Promise.resolve(cacheValue.data);
    }

    cache[cacheKey] = { data: null };

    const data = await asyncFunction();

    cache[cacheKey] = { data };

    return data;
  }, [cacheKey, asyncFunction]);

  const { execute, status, value, error } = useAsync<T, E>(asyncFunctionWithCache, immediate);

  const executeFetch = async (): Promise<void> => {
    cache[cacheKey] = null;
    return execute();
  };

  return {
    data: value,
    isLoading: status === 'pending',
    error,
    execute: executeFetch,
  };
}
