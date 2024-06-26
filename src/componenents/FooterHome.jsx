import React from "react";
import "../styles/FooterHome.css";
const FooterHome = () => {
  return (
    <div className="footer-home">
      <div className="footer-box">
        <div className="img-ft">
          <img src="./assets/photo/build.png" alt="" height="200" width="200" />
        </div>
        <div className="d-flex justify-content-center flex-column gap-3">
          <h3>شكون أحنا</h3>
          <h3>صور</h3>
          <h3>+216 50 543 162 </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <h3>CONNECT</h3>
          <a
            href="https://www.instagram.com/hope_builders_psc/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around gap-3 py-3 pt-4">
        <h3>© 2024 All Rights Reserved.</h3>
        <h3>Web Designed and Created By Mazen HAMMOUDA</h3>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <h3>Connect With Me</h3>
          <a href="https://www.instagram.com/hammoudamazen/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
