import Image from "next/image";
import React from "react";
import Link from "next/link";

import { HeartIcon } from "@heroicons/react/24/solid";

function Product01({
  image,
  title,
  subtitle,
  price,
  feature,
  featureColor,
  QuickViewHandler,
  link,
}) {
  return (
    <div className="w-48 h-72 group  border hover:shadow-xl p-2 relative rounded-md hover:-translate-y-1 transition-all duration-150 ease-in-out cursor-pointer">
      <span
        className={`absolute left-2 top-1 text-xs font-light px-3 py-0 ${featureColor}  bg-black text-white rounded-xl`}
      >
        {feature}
      </span>
      <Link href={`/product/${link}`}>
        <div className="h-48">
          <Image src={image} alt={title} />
        </div>

        <div
          className="flex flex-col items-start h-20 flex-nowrap absolute bottom-4 left-0 px-2 text-left
      "
        >
          <p className="font-bold text-lg whitespace-pre">{price} DA</p>
          <h3 className="text-xs uppercase font-semibold whitespace-pre">
            {title}
          </h3>
          <p className="text-sm font-light font-sans ">{subtitle}</p>
        </div>
      </Link>
      <p
        className="absolute  -bottom-1/2 transition-all duration-300 ease-in-out 
      group-hover:bottom-1/2 left-1/2 -translate-x-1/2 bg-black/60 text-white 
      uppercase py-1 px-5 text-sm rounded-sm whitespace-pre"
        onClick={QuickViewHandler}
      >
        Quick look
      </p>
      <div className="absolute right-2 top-2 z-40 ">
        <HeartIcon className="h-6 w-6 text-gray-300 " />
      </div>
    </div>
  );
}

export default Product01;
