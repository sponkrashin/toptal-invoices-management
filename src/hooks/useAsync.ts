import { useCallback, useEffect, useState } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

export function useAsync<T, E = string>(
  asyncFunction: (...args: any[]) => Promise<T>,
  immediate = true
): { value: T | null; status: Status; error: E | null; execute: (...args: any[]) => Promise<void> } {
  const [status, setStatus] = useState<Status>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      setStatus('pending');
      setValue(null);
      setError(null);

      try {
        const response = await asyncFunction(...args);
        setValue(response);
        setStatus('success');
      } catch (error: any) {
        setError(error);
        setStatus('error');
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { value, status, error, execute };
}
