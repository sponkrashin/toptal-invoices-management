import { PropsWithChildren, useEffect } from 'react';
import { NavigationTarget, useAppRouter } from 'hooks/useAppRouter';
import { selectUserIsLoggedIn } from 'store/authSlice';
import { useSelector } from 'store/hooks';

const AuthGuard = ({ children }: PropsWithChildren) => {
  const { navigate } = useAppRouter();
  const userIsLoggedIn = useSelector(selectUserIsLoggedIn);

  useEffect(() => {
    if (userIsLoggedIn === false) {
      navigate(NavigationTarget.SignIn);
    }
  }, [userIsLoggedIn, navigate]);

  return userIsLoggedIn === true ? <>{children}</> : null;
};

export default AuthGuard;
