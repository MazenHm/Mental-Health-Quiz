import React from "react";
import Navbar from "../componenents/NavBarTop";
import NavbarBarSec from "../componenents/NavbarBarSec";
import TestSection from "../layout/TestSection";
import TeamSection from "../layout/TeamSection";
import Gallery from "../layout/Gallery";
import FooterHome from "../componenents/FooterHome";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <NavbarBarSec />
      <TestSection />
      <TeamSection />
      <Gallery />
      <FooterHome />
    </div>
  );
};

export default HomePage;
