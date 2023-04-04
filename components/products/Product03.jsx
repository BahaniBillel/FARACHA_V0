import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

function Product03({ image, title, subtitle, description, bgColor }) {
  return (
    <div className="w-[400px] h-60 border   relative rounded-md overflow-hidden  transition-all duration-150 ease-in-out cursor-pointer">
      <div className="relative">
        <Image src={image} alt={title} className=" -translate-y-3 -z-10" />
        <div
          className={`flex flex-col items-start  flex-nowrap  py-2 text-left space-y-1 px-2   ${bgColor} z-30 absolute left-0 top-0`}
        >
          <h3 className="text-xl uppercase font-bold whitespace-pre">
            {title}
          </h3>
          <p className="text-sm font-normal  ">{subtitle}</p>
          <p className="text-xs tracking-wider font-light text-gray-600 underline   ">
            {description}
          </p>
          <div className="flex flex-row items-center cursor-pointer ">
            <p>Shop now</p>
            <AiFillCaretRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product03;
