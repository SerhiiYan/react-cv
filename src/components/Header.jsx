import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="react-cv/">HOME</Link>
        <Link to="react-cv/about">ABOUT</Link>
        <Link to="react-cv/resume">RESUME</Link>
      </nav>
    </header>
  );
};

export default Header;
