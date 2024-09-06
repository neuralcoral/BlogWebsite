import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from "./NavBar";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { PAGES } from "./pages";

describe('NavBar component', () => {
  test('renders Navbar children components', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
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
    const mockNavigate = jest.fn();

    jest.mock('react-router-dom', () => ({
      useNavigate: () => mockNavigate,
    }));

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