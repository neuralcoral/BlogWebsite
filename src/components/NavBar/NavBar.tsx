import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { PAGES } from './pages';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const navigate = useNavigate();
  function options() {
    return (
      <>
        {PAGES.map((page) => {
          return (
            <li
              className="option"
              key={page.pageName.replace(/\s/g, '').toLowerCase()}
              onClick={() => navigate(page.route())}
            >
              {page.pageName}
            </li>
          );
        })}
      </>
    );
  }

  return (
    <div className="side-nav visible">
      <ul>{options()}</ul>
    </div>
  );
};

export default NavBar;
