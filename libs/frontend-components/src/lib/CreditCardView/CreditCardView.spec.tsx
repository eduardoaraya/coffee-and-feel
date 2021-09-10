import { render } from '@testing-library/react';

import CreditCardView from './CreditCardView';

describe('CreditCardView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreditCardView />);
    expect(baseElement).toBeTruthy();
  });
});
