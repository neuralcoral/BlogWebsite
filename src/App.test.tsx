import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/NavBar/NavBar', () => () => <div>Mocked NavBar</div>);
jest.mock('./components/Content/Content', () => () => <div>Mocked Content</div>);

describe('App Component', () => {
  test('renders NavBar and Content components', () => {
    render(<App />);

    expect(screen.getByText('Mocked NavBar')).toBeInTheDocument();
    expect(screen.getByText('Mocked Content')).toBeInTheDocument();
  });
});
