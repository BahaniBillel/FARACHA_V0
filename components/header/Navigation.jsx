import React, { useState } from "react";
import { links } from "./MyLinks";
import DropDownList from "./DropDownList";
import Link from "next/link";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GiButterfly } from "react-icons/gi";

function BottomHeader() {
  const [heading, setHeading] = useState(false);
  const [subHeading, setSubHeading] = useState("");

  const CheckHover = () => {
    setLink(!link);
  };

  return (
    <div className="overflow-scroll lg:overflow-visible   md:flex flex-row items-center justify-center py-2 px-2 bg-gray-100  md:bg-black relative z-40">
      <div className="flex flex-row space-x-6 text-sm text-darkGray ml-2 ">
        {links.map((link, i) => (
          <div key={link.name} className="navlink group">
            <Link href={link.page}>
              <h1
                className="flex flex-row items-center justify-between group text-gray-800 border md:border-none border-gray-800 px-3 md:px-0 py-1 md:py-0  rounded-xl md:text-white text-sm whitespace-pre cursor-pointer"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}

                <span className="hidden md:block">
                  <GiButterfly className="text-darkGray h-4 navlink  group-hover:rotate-180 text-pink-400 group-hover:text-emerald-300 " />
                </span>
              </h1>
            </Link>

            {link.submenu && (
              <div>
                <div className="absolute left-0 top-6 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-transparent rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white text-darkGray p-5 grid grid-cols-3 gap-10 w-screen shadow-md">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600 my-2.5"
                            key={slink}
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomHeader;

{
  /* <div>Clothes</div>
        <div>Jewelry & Accessories</div>
        <div>Holidays & sales</div>
        <div>Home & Living</div>
        <div>Toy & Entertaiment</div>
        <div>Art & Collectible</div>
        <div>Craft Supplies</div>
        <div>Vintage</div> */
}
