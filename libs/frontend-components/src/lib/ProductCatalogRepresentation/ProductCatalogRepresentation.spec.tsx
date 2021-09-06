import { render } from '@testing-library/react';

import ProductCatalogRepresentation from './ProductCatalogRepresentation';

describe('ProductCatalogRepresentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductCatalogRepresentation />);
    expect(baseElement).toBeTruthy();
  });
});
