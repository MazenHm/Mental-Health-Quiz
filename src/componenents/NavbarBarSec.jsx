import React from "react";
import "../styles/NavbarBarSec.css";
import { Link } from "react-router-dom";

const NavbarBarSec = () => {
  return (
    <div className="nav-sec">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <Link to="/">
            <img
              src="./assets/photo/hope2.png"
              alt="logo"
              className="logo"
              height="80"
              width="80"
            />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <div className="d-flex align-items-center justify-content-center gap-1">
            <h1>+216 50-543-162</h1>
            <i class="fas fa-phone"></i>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <h1>صور</h1>
            <i class="fas fa-bullseye"></i>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-1">
            <h1>شكون أحنا</h1>
            <i class="fas fa-users"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarBarSec;
