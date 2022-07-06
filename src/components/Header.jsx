import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">HOME</Link>
        <Link to="about">ABOUT</Link>
        <Link to="resume">RESUME</Link>
      </nav>
    </header>
  );
};

export default Header;
