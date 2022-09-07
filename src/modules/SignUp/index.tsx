import NonAuthGuard from 'guards/NonAuthGuard';
import SignUp from './SignUp';

const SignUpWithGuard = () => (
  <NonAuthGuard>
    <SignUp />
  </NonAuthGuard>
);

export default SignUpWithGuard;
