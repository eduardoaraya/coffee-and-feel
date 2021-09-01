import { render } from '@testing-library/react';

import LayoutStore from './LayoutStore';

describe('LayoutStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutStore />);
    expect(baseElement).toBeTruthy();
  });
});
