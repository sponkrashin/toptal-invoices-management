import { NextRouter, useRouter } from 'next/router';

export const DASHBOARD_URL = '/';
export const CLIENTS_URL = '/clients';
export const INVOICES_URL = '/invoices';
export const COMPANY_DETAILS_URL = '/company-details';
export const SIGN_IN_URL = '/login';
export const SIGN_UP_URL = '/sign-up';

export enum NavigationTarget {
  Dashboard = 'Dashboard',
  SignIn = 'SignIn',
  CompanyDetails = 'CompanyDetails',
}

const ID_QUERY_PARAM = 'id';

function navigate(router: NextRouter, target: NavigationTarget): Promise<boolean> {
  switch (target) {
    case NavigationTarget.Dashboard:
      return router.push(DASHBOARD_URL);

    case NavigationTarget.SignIn:
      return router.push(SIGN_IN_URL);

    case NavigationTarget.CompanyDetails:
      return router.push(COMPANY_DETAILS_URL);

    default:
      throw new Error(`Navigation target ${target} is not supported yet`);
  }
}

export function useAppRouter(): {
  router: NextRouter;
  idQueryParam: number | null;
  navigate: (target: NavigationTarget) => Promise<boolean>;
} {
  const router = useRouter();

  const idQueryParam = router.query[ID_QUERY_PARAM] ? +router.query[ID_QUERY_PARAM] : null;

  return {
    router,
    idQueryParam,
    navigate: (target) => navigate(router, target),
  };
}
