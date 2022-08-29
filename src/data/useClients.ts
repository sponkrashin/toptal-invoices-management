import { useEffect } from 'react';
import useSWR from 'swr';
import * as apiService from 'data/apiService';
import { Client } from './client';
import { revalidationObjectFactory } from './dataHelpers';

const revalidationObject = revalidationObjectFactory();

export const revalidateClients = revalidationObject.revalidate;

export function useClients(): { data: Client[]; isLoading: boolean; error: any } {
  const { data, isValidating, error, mutate } = useSWR('clients', () => apiService.getClients());

  useEffect(() => {
    revalidationObject.addFunction(mutate);
    return () => revalidationObject.removeFunction(mutate);
  }, [mutate]);

  return {
    data: data ?? [],
    isLoading: isValidating,
    error,
  };
}
