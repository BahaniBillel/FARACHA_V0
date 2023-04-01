import Image from "next/image";
import React from "react";

function Product01({ image, title, subtitle, price, feature, featureColor }) {
  return (
    <div className="w-48 h-72 shadow-xl p-2 relative rounded-md hover:-translate-y-1 transition-all duration-150 ease-in-out cursor-pointer">
      <span
        className={`absolute left-2 top-1 text-xs font-light px-3 py-0 ${featureColor}  bg-black text-white rounded-xl`}
      >
        {feature}
      </span>
      <div className="h-48">
        <Image src={image} alt={title} />
      </div>

      <div
        className="flex flex-col items-start h-20 flex-nowrap absolute bottom-2 left-0 px-2 text-left
      "
      >
        <p className="font-bold text-lg">{price} DA</p>
        <h3 className="text-xs uppercase font-semibold">{title}</h3>
        <p className="text-xs font-light">{subtitle}</p>
      </div>
    </div>
  );
}

export default Product01;
