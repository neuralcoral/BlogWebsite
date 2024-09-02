import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the child components since we are focusing on testing the App component
jest.mock('./components/NavBar/NavBar', () => () => <div>Mocked NavBar</div>);
jest.mock('./components/Content/Content', () => () => <div>Mocked Content</div>);

describe('App Component', () => {
  test('renders NavBar and Content components', () => {
    render(
      <App />
    );

    // Check that the mocked NavBar component is rendered
    expect(screen.getByText('Mocked NavBar')).toBeInTheDocument();

    // Check that the mocked Content component is rendered
    expect(screen.getByText('Mocked Content')).toBeInTheDocument();
  });
});
