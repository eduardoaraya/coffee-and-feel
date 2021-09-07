import { SocialLoginButton } from '@atlascode/coffee-front-components';
import { Box } from '@material-ui/core';

/* eslint-disable-next-line */
export interface LoginPageProps {}

export function LoginPage(props: LoginPageProps) {
  return (
    <div>
      <SocialLoginButton />
    </div>
  );
}

export default LoginPage;
