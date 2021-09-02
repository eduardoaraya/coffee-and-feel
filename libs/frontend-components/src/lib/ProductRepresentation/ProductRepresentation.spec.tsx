import { render } from '@testing-library/react';

import ProductRepresentation from './ProductRepresentation';

describe('ProductRepresentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductRepresentation />);
    expect(baseElement).toBeTruthy();
  });
});
