import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { PAGES } from './pages';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}));

jest.mock('uuid', () => ({
  v4: jest.fn(() => '12345-fixed-uuid')
}));

describe('NavBar component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Navbar children components', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    PAGES.map((page) => {
      expect(screen.getByText(page.pageName)).toBeInTheDocument();
    });
  });

  test('clicking on a page navigates correctly', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    PAGES.forEach((page) => {
      const pageItem = screen.getByText(page.pageName);
      fireEvent.click(pageItem);
      expect(mockNavigate).toHaveBeenCalledWith(page.route());
    });
  });
});
