import { PropsWithChildren, useEffect } from 'react';
import { NavigationTarget, useAppRouter } from 'hooks/useAppRouter';
import { useSelector } from 'store/hooks';
import { selectUserCompanyDetails } from 'store/userInfoSlice';

const UserCompanyGuard = ({ children }: PropsWithChildren) => {
  const { navigate } = useAppRouter();
  const userCompanyDetails = useSelector(selectUserCompanyDetails);

  useEffect(() => {
    if (!userCompanyDetails) {
      navigate(NavigationTarget.CompanyDetails);
    }
  }, [userCompanyDetails, navigate]);

  return !!userCompanyDetails ? <>{children}</> : null;
};

export default UserCompanyGuard;
