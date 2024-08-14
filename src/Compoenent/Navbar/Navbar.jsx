import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar-wrapper">
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <h1 className="nav-heading">ICACSDF-25</h1>
        </div>
        <nav className="Navbar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/committee">Comittee</a></li>
            <li><a href="/callforpaper">Call for Paper</a></li>
            <li><a href="/register">Registration</a></li>
            <li><a href="/contact">Contact-Us</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;