import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from "./NavBar";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { PAGES } from "./pages";
import { v4 as uuidv4 } from 'uuid';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('uuid', () => ({
  v4: jest.fn(() => '12345-fixed-uuid'),  // Return a fixed UUID for all tests
}));


describe('NavBar component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

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

  test('toggle functionality works', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    PAGES.forEach((page) => {
      expect(screen.getByText(page.pageName)).toBeVisible();
    });

    const toggleButton = screen.getByText('🧠');
    fireEvent.click(toggleButton);

    PAGES.forEach((page) => {
      expect(screen.queryByText(page.pageName)).toBeNull();
    });

    fireEvent.click(toggleButton);

    PAGES.forEach((page) => {
      expect(screen.getByText(page.pageName)).toBeVisible();
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

})