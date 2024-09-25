import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { PageInfo, PAGES } from './pages';
import { useAdmin } from '../../contexts/AdminContext';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const navigate = useNavigate();
  const { isAdmin } = useAdmin();

  const formatEntry = (page: PageInfo) => {
    return (
      <li
        className="option"
        key={page.pageName.replace(/\s/g, '').toLowerCase()}
        onClick={() => navigate(page.route())}
      >
        {page.pageName}
      </li>
    );
  };

  function options() {
    return (
      <>
        {PAGES.map((page) => {
          return page.isAdmin ? isAdmin && formatEntry(page) : formatEntry(page);
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
