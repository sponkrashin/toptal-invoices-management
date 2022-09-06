import { NextRouter, useRouter } from 'next/router';

export enum NavigationTarget {
  Dashboard = 'Dashboard',
  SignIn = 'SignIn',
}

function navigate(router: NextRouter, target: NavigationTarget): Promise<boolean> {
  switch (target) {
    case NavigationTarget.Dashboard:
      return router.push('/');

    case NavigationTarget.SignIn:
      return router.push('/sign-in');

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
