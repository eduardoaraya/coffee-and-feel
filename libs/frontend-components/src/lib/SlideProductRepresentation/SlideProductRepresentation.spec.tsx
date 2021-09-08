import { render } from '@testing-library/react';

import SlideProductRepresentation from './SlideProductRepresentation';

describe('SlideProductRepresentation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SlideProductRepresentation />);
    expect(baseElement).toBeTruthy();
  });
});
