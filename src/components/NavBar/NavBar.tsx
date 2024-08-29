import React from 'react';
import './NavBar.css';

const NavBar: React.FC = () => {
    return (
        <div className="side-nav">
            <li><a href="">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="login">Login</a></li>
        </div>
    );
}

export default NavBar;