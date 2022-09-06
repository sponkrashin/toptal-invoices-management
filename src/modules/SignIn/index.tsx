import NonAuthGuard from 'guards/NonAuthGuard';
import SignIn from './SignIn';

const SignInWithGuard = () => (
  <NonAuthGuard>
    <SignIn />
  </NonAuthGuard>
);

export default SignInWithGuard;
