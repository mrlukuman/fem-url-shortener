import React from "react";
import Logo from "../../images/logo.svg";

// import { useState } from "react";

const Header = () => {
  return (
    <div className="">
      <header>
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>

        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="navbar">
          {/* List of items in the navigation bar */}
          <div className="nav-list">
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="cta">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
