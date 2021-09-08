import { render } from '@testing-library/react';

import RegistrationPage from './RegistrationPage';

describe('RegistrationPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegistrationPage />);
    expect(baseElement).toBeTruthy();
  });
});
