import React from "react";
import Image from "next/image";
import MakeupCollection from "../../images/makeup_collection.jpg";

function UpperRibbon() {
  return (
    <div className="h-10 overflow-hidden">
      <Image src={MakeupCollection} alt="banner" />
    </div>
  );
}

export default UpperRibbon;
