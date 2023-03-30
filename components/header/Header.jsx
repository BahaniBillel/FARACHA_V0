import React from "react";
import Identification from "./Identification";
import UpperRibbon from "./UpperRibbon";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="">
      <UpperRibbon />
      <Identification />
      <Navigation />
    </div>
  );
}

export default Header;
