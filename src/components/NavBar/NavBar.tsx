import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className="side-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </div>
    );
}

export default NavBar;