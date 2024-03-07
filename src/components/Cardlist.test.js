import React from 'react';
import { render } from '@testing-library/react';
import Cardlist from './Cardlist';

// Ensure that Jest knows how to handle .snap files
import '@testing-library/jest-dom/extend-expect';

test('MyComponent snapshot', () => {
  const mockRobots = [ 
    {
        id: 1,
        name: 'robot test',
        email: 'robottest@gmail.com'
    }
  ]
  const { asFragment } = render(<Cardlist robots={mockRobots}/>);
  expect(asFragment()).toMatchSnapshot();
});