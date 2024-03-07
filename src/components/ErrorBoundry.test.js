import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundry from './ErrorBoundry';

// Ensure that Jest knows how to handle .snap files
import '@testing-library/jest-dom/extend-expect';

test('MyComponent snapshot', () => {
  const { asFragment } = render(<ErrorBoundry />);
  expect(asFragment()).toMatchSnapshot();
});

// test('correctly error', () => {

// })