import React from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { BsHeart, BsBasket, BsSearch } from "react-icons/bs";
import { TbBrandBlogger } from "react-icons/tb";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import SearchComp from "../usables/SearchComp";
import { useSelector } from "react-redux";
import { selectItems, selectLikes } from "../../redux/slices/basketSlice";

function Identification() {
  const items = useSelector(selectItems);
  const likes = useSelector(selectLikes);
  return (
    <div className=" px-2 bg-white   md:px-fit items-center justify-center  grid grid-cols-4 md:space-x-6 my-5">
      <div className="text-xl text-slate-900 tracking-widest font-bold font-sans col-span-1 ">
        <Link href="/">
          <Image src={Logo} alt="faracha" className="h-fit w-fit md:h-20" />
        </Link>
      </div>

      {/* search bar */}
      <SearchComp />

      {/* buttons */}
      <div className="hidden lg:flex flex-row  md:space-x-5 col-span-1">
        <ul className="flex flex-row space-x-4 md:space-x-8 ">
          <Link href="/blogs/12" className="hidden">
            <li className="flex flex-row items-center ">
              <TbBrandBlogger className="w-6 h-6 text-gray-800" />
              <p className="hidden md:flex text-sm font-light ml-1 flex-col">
                Blogs
              </p>
            </li>
          </Link>
          <Link href="/likes">
            <li className="flex flex-row items-center relative">
              <BsHeart className="w-6 h-6 text-gray-800" />
              <span className=" absolute -top-3 left-1/4 text-white text-xs font-bold   z-10  bg-red-600 py-1 px-2 rounded-full">
                {likes ? likes.length : 0}
              </span>
              <p className="hidden md:flex text-sm font-light ml-1 flex-col">
                Likes
              </p>
            </li>
          </Link>

          <Link href="/cart">
            <div className="relative items-center ">
              <BsBasket className="h-5 md:h-8 " />
              <span className=" absolute -top-2 left-2/4 text-white text-xs font-bold   z-10  bg-red-600 py-1 px-2 rounded-full">
                {items ? items.length : 0}
              </span>
            </div>
          </Link>

          <Link href="/login">
            <li className="flex flex-row items-center cursor-pointer">
              <CiLogin className="w-6 h-6 text-gray-800" />
              <p className="hidden md:flex text-sm font-light ml-1 flex-col">
                Login
                {/* <span className="text-xs text-gray-400 hidden lg:block">
                Enter your space
              </span> */}
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Identification;

<ul className="flex flex-row space-x-8 border-r border-gray-300 pr-5">
  <li className="flex flex-row items-center cursor-pointer">
    <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-800" />
    <p className="hidden md:flex text-sm font-light ml-1 flex-col">
      Store & services
      {/* <span className="text-xs text-gray-400">choose your store</span> */}
    </p>
  </li>
  <li className="flex flex-row items-center cursor-pointer">
    <IoIosPeople className="w-6 h-6 text-gray-800" />
    <p className="hidden md:flex text-sm font-light ml-1 flex-col">
      Community
      <span className="text-xs text-gray-400">share</span>
    </p>
  </li>
</ul>;
