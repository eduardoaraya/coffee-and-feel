import { render } from '@testing-library/react';

import BlogOverviewPage from './BlogOverviewPage';

describe('BlogOverviewPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogOverviewPage />);
    expect(baseElement).toBeTruthy();
  });
});
