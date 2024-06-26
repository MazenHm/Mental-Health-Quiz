import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-p">
      <div className="nav-it">
        <div className="d-flex align-items-center justify-content-center gap-2">
          <h1>Search</h1>
          <i class="fas fa-search"></i>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <h1>Contact Us</h1>
          <i class="fas fa-envelope"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
