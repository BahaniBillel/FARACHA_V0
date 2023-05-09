import React, { useState, useEffect } from "react";
import Image from "next/image";
import MakeupCollection from "../../public/images/makeup_collection.jpg";
import Promo3 from "../../public/images/promo3.jpg";
import Promo5 from "../../public/images/promo5.jpg";

const bgImages = [MakeupCollection, Promo3, Promo5];

function UpperRibbon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`h-10 overflow-hidden  transition-transform duration-300 `}>
      <Image src={bgImages[index]} alt="banner" />
    </div>
  );
}

export default UpperRibbon;
