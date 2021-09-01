import { render } from '@testing-library/react';

import AdminComponents from './AdminComponents';

describe('AdminComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminComponents />);
    expect(baseElement).toBeTruthy();
  });
});
