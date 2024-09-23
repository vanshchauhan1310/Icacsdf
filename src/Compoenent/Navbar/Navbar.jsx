import React, { useState } from 'react';
import './Navbar.css';
import styled from "styled-components";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCallForPaperDropdown, setShowCallForPaperDropdown] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToggleCallForPaperDropdown = () => {
    setShowCallForPaperDropdown(!showCallForPaperDropdown);
  };

  

const StyledWrapper = styled.div`
.paste-button {
position: relative;
display: block;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.button {
background-color: transparent;
color: white;
font-size: 20px;
font-weight: bold;
border: 2px solid transparent;
border-radius: 15px;
cursor: pointer;
}

.dropdown-content {
display: none;
font-size: 13px;
position: relative;
z-index: 1;
min-width: 200px;
background-color: #212121;
border-radius: 0px 15px 15px 15px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
color: white;
padding: 8px 10px;
text-decoration: none;
display: block;
transition: 0.1s;
}

.dropdown-content a:hover {
background-color: #4CAF50;
color: #212121;
}

.dropdown-content a:focus {
background-color: #212121;
color: #4CAF50;
}

.dropdown-content #top:hover {
border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
display: block;
position: fixed;
}

`;
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
            <li>
            <StyledWrapper>
      <div className="paste-button">
        <button className="button">Call for Paper&nbsp; &#9660;</button>
        <div className="dropdown-content">
          <a id="top" href="#">
           Track Details
          </a>
          <a id="middle" href="#">
            Important Dates
          </a>
          <a id="bottom" href="#">
            Author Guidelines
          </a>
          <a id="bottom" href="#">
            Paper Template
          </a>
          <a id="bottom" href="#">
            Paper Submission
          </a>
        </div>
      </div>
    </StyledWrapper>
            </li>
            <li><a href="/register">Registration</a></li>
            <li><a href="/review">Review Process</a></li>
            <li><a href="/contact">Contact</a></li>
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