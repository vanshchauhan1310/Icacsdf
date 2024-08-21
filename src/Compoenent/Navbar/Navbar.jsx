import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <h1 className="nav-heading">ICACSDF-25</h1>
        </div>
        <nav className="Navbar-links">
          <ul className={showMenu ? 'show' : ''}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/committee">Committee</a></li>
            <li><a href="/callforpaper">Call for Paper</a></li>
            <li><a href="/register">Registration</a></li>
            <li><a href="/contact">Contact-Us</a></li>
          </ul>
          <div className="hamburger" onClick={handleToggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;