import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('./Feed', () => {
  const MockFeed = () => <div>Mock Feed</div>;
  MockFeed.displayName = 'MockFeed';
  return MockFeed;
});

describe('Home page', () => {
  test('Page renders', () => {
    render(<Home />);
    expect(screen.getByText('Mock Feed')).toBeInTheDocument();
  });
});
