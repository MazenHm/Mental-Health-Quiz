import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="/assets/photo/hope2.png"
          height="110"
          width="110"
          alt="hope"
          className="logo1"
        />
      </Link>
      <h5 className="text-brand">اختبار الصحة النفسية للصغار</h5>
      <a
        href="https://www.polytecsousse.tn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img           className="logo2"
 src="/assets/photo/poly2.png" height="60" width="100" alt="poly" />
      </a>
    </div>
  );
};

export default Header;
