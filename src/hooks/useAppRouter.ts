import { NextRouter, useRouter } from 'next/router';

export const DASHBOARD_URL = '/';
export const CLIENTS_URL = '/clients';
export const INVOICES_URL = '/invoices';
export const COMPANY_DETAILS_URL = '/company-details';
export const SIGN_IN_URL = '/login';
export const SIGN_UP_URL = '/sign-up';
export const VIEW_CLIENT_URL = '/clients/{id}';
export const VIEW_INVOICE_URL = '/invoices/{id}/view';

export enum NavigationTarget {
  Dashboard = 'Dashboard',
  SignIn = 'SignIn',
  CompanyDetails = 'CompanyDetails',
  ViewClient = 'ViewClient',
  ViewInvoce = 'ViewInvoce',
}

const ID_QUERY_PARAM = 'id';

function formatUrl(url: string, params: Record<string, string>): string {
  let result = url;

  for (const key in params) {
    result = result.replace(`{${key}}`, params[key]);
  }

  return result;
}

function navigate(router: NextRouter, target: NavigationTarget, id?: string): Promise<boolean> {
  switch (target) {
    case NavigationTarget.Dashboard:
      return router.push(DASHBOARD_URL);

    case NavigationTarget.SignIn:
      return router.push(SIGN_IN_URL);

    case NavigationTarget.CompanyDetails:
      return router.push(COMPANY_DETAILS_URL);

    case NavigationTarget.ViewClient:
      if (!id) {
        throw new Error('Id parameter is required');
      }

      return router.push(formatUrl(VIEW_CLIENT_URL, { [ID_QUERY_PARAM]: id.toString() }));

    case NavigationTarget.ViewInvoce:
      if (!id) {
        throw new Error('Id parameter is required');
      }

      return router.push(formatUrl(VIEW_INVOICE_URL, { [ID_QUERY_PARAM]: id.toString() }));

    default:
      throw new Error(`Navigation target ${target} is not supported yet`);
  }
}

export function useAppRouter(): {
  router: NextRouter;
  idQueryParam: string | null;
  navigate: (target: NavigationTarget, id?: string) => Promise<boolean>;
} {
  const router = useRouter();

  const idQueryParam = router.query[ID_QUERY_PARAM] ? (router.query[ID_QUERY_PARAM] as string) : null;

  return {
    router,
    idQueryParam,
    navigate: (target, id) => navigate(router, target, id),
  };
}
