import React from "react";
import Logo from "../../images/logo.svg";

// import { useState } from "react";

const Header = () => {
  return (
    <div className="container mx-auto flex-center">
      <header className="flex w-screen">
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>

        <div className="hamburger flex flex-col space-y-2 md:hidden">
          <span className="inline-block w-10 h-1.5 bg-black"></span>
          <span className="inline-block w-10 h-1.5 bg-black"></span>
          <span className="inline-block w-10 h-1.5 bg-black"></span>
        </div>

        <nav className="navbar hidden md:flex justify-between w-full">
          {/* List of items in the navigation bar */}
          <div className="nav-list w-full">
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
