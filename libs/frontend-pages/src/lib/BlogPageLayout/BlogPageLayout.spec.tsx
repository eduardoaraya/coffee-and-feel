import { render } from '@testing-library/react';

import BlogPageLayout from './BlogPageLayout';

describe('BlogPageLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPageLayout />);
    expect(baseElement).toBeTruthy();
  });
});
