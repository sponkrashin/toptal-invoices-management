import { useCallback, useEffect, useState } from 'react';

type Status = 'idle' | 'pending' | 'success' | 'error';

export function useAsync<T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
): { value: T | null; status: Status; error: E | null; execute: () => Promise<void> } {
  const [status, setStatus] = useState<Status>('idle');
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response: any) => {
        setValue(response);
        setStatus('success');
      })
      .catch((error: any) => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { value, status, error, execute };
}
