import Image from "next/image";
import Link from "next/link";
import React from "react";

function Product02({
  image,
  title,
  subtitle,
  description,
  feature,
  featureColor,
  hasDetails,
}) {
  return (
    <div className="w-56 h-96 border hover:shadow-xl  relative rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-150 ease-in-out cursor-pointer">
      <span
        className={`absolute left-2 top-1 text-xs font-light px-3 py-0 ${featureColor}  bg-black text-white rounded-xl`}
      >
        {feature}
      </span>
      <div className="h-40">
        <Image src={image} alt={title} />
      </div>

      <div
        className="flex flex-col items-start h-20 flex-nowrap  py-2 text-left space-y-1 px-2
      "
      >
        <h3 className="text-xs uppercase font-bold whitespace-pre">{title}</h3>
        <p className="text-sm font-normal  ">{subtitle}</p>
        <p className="text-xs tracking-wider font-light text-gray-600   ">
          {description}
        </p>
        <div className="grow"></div>
        <div className="flex flex-row flex-nowrap absolute bottom-4 left-2 items-center justify-center space-x-5">
          <Link href="#">
            <p className="font-semibold border rounded-lg text-sm bg-white px-5 py-1 flex-none">
              Apply
            </p>
          </Link>

          <Link href="#">
            {hasDetails ? (
              <p className="text-xs text-blue-600 whitespace-pre flex-none">
                See details
              </p>
            ) : null}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product02;
