import { render } from '@testing-library/react';

import SocialLoginButton from './SocialLoginButton';

describe('SocialLoginButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialLoginButton />);
    expect(baseElement).toBeTruthy();
  });
});
