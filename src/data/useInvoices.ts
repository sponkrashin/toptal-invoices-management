import { useEffect } from 'react';
import useSWR from 'swr';
import * as apiService from 'data/apiService';
import { revalidationObjectFactory } from './dataHelpers';
import { Invoice } from './invoice';

const revalidationObject = revalidationObjectFactory();

export const revalidateInvoices = revalidationObject.revalidate;

export function useInvoices(): { data: Invoice[]; isLoading: boolean; error: any } {
  const { data, isValidating, error, mutate } = useSWR('invoices', () => apiService.getInvoices());

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
