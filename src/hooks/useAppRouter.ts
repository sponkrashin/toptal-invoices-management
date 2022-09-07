import { NextRouter, useRouter } from 'next/router';

export const DASHBOARD_URL = '/';
export const CLIENTS_URL = '/clients';
export const INVOICES_URL = '/invoices';
export const SIGN_IN_URL = '/login';
export const SIGN_UP_URL = '/sign-up';

export enum NavigationTarget {
  Dashboard = 'Dashboard',
  SignIn = 'SignIn',
  CompanyDetails = 'CompanyDetails',
}

function navigate(router: NextRouter, target: NavigationTarget): Promise<boolean> {
  switch (target) {
    case NavigationTarget.Dashboard:
      return router.push(DASHBOARD_URL);

    case NavigationTarget.SignIn:
      return router.push(SIGN_IN_URL);

    default:
      throw new Error(`Navigation target ${target} is not supported yet`);
  }
}

export function useAppRouter(): { router: NextRouter; navigate: (target: NavigationTarget) => Promise<boolean> } {
  const router = useRouter();

  return {
    router,
    navigate: (target) => navigate(router, target),
  };
}
