import React, { Component } from "react";

class Navbar extends React.Component {
  render() {
    return(
      <header className="nav-bar">
        <h2><a> Recipe List </a></h2>
        <nav className="link-container">
          <li className="nav-link"><a> New Recipe </a></li>
          <li className="nav-link"><a> Home </a></li>
          <li className="nav-link"><a> About </a></li>
          <li className="nav-link"><a> Contact Us </a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
