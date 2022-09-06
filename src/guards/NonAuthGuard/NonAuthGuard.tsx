import { PropsWithChildren, useEffect } from 'react';
import { NavigationTarget, useAppRouter } from 'hooks/useAppRouter';
import { selectUserIsLoggedIn } from 'store/authSlice';
import { useSelector } from 'store/hooks';

const NonAuthGuard = ({ children }: PropsWithChildren) => {
  const { navigate } = useAppRouter();
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);

  useEffect(() => {
    if (userIsLoggedIn === true) {
      navigate(NavigationTarget.Dashboard);
    }
  }, [userIsLoggedIn, navigate]);

  return userIsLoggedIn === false ? <>{children}</> : null;
};

export default NonAuthGuard;
