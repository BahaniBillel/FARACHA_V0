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
  // QuickViewHandler,
  link,
  fill,
  width,
  length,
}) {
  return (
    <div
      className={` ${"w-48" || width}  ${
        "h-80" || length
      }  group  border hover: shadow-xl p-2 relative rounded-md 
    hover:-translate-y-1 transition-all duration-150 ease-in-out cursor-pointer`}
    >
      {feature ? (
        <span
          className={`absolute -left-1 top-1 text-xs font-light px-3 py-1 ${featureColor}  bg-black text-white rounded-r-xl`}
        >
          {feature}
        </span>
      ) : null}
      <Link href={`/listing/${link}`}>
        <div className="h-48 overflow-hidden">
          <Image src={image} alt={title} fill={fill} />
        </div>

        <div
          className="flex flex-col items-start h-24 flex-nowrap absolute bottom-4 left-0 px-2 text-left
      "
        >
          <h3 className="text-xs uppercase font-semibold ">{title}</h3>
          <p className="text-xs font-light font-sans line-clamp-3 ">
            {subtitle}
          </p>
          <p className="flex flex-grow"></p>
          <p className="font-bold text-base whitespace-pre pt-1">{price} DA</p>
        </div>
      </Link>
      {/* <p
        className="absolute  -bottom-1/2 transition-all duration-300 ease-in-out 
      group-hover:bottom-1/2 left-1/2 -translate-x-1/2 bg-black/60 text-white 
      uppercase py-1 px-5 text-sm rounded-sm whitespace-pre"
        onClick={QuickViewHandler}
      >
        Quick look
      </p> */}
      <div className="absolute right-2 top-2 z-40 ">
        <HeartIcon className="h-6 w-6 text-gray-300 " />
      </div>
    </div>
  );
}

export default Product01;
