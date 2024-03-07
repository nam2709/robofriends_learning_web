import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

// Ensure that Jest knows how to handle .snap files
import '@testing-library/jest-dom/extend-expect';

test('MyComponent snapshot', () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});