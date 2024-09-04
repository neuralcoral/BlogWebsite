import React from "react";
import { render, screen } from '@testing-library/react';
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
  })  
})