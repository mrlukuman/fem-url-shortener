import React from "react";
import Logo from "../../images/logo.svg";

// import { useState } from "react";

const Header = () => {
  return (
    <div className="">
      <header className="">
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>

        <div className="hamburger flex flex-col space-y-2 md:hidden">
          <span className="inline-block w-10 h-1.5 bg-black rounded"></span>
          <span className="inline-block w-10 h-1.5 bg-black rounded"></span>
          <span className="inline-block w-10 h-1.5 bg-black rounded"></span>
        </div>

        <nav className="navbar hidden md:flex justify-between">
          {/* List of items in the navigation bar */}
          <div className="nav-list">
            <ul className="flex space-x-5 md:ml-6">
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>

          {/* Call to action */}
          <div className="cta space-x-5 flex ">
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
