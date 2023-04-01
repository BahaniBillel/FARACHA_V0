import React from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { BsHeart, BsBasket, BsSearch } from "react-icons/bs";
import Link from "next/link";

function Identification() {
  return (
    <div className="bg-white h-28 shadow-md md:px-14 items-center justify-center flex flex-row md:space-x-6">
      <div className="text-xl text-slate-900 tracking-widest font-bold ">
        <Link href="/">FARACHA</Link>
      </div>
      <div className="relative flex flex-row justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className=" bg-gray-100 hover:bg-fuchsia-200 transition-colors duration-200 ease-in-out rounded-2xl  pl-10 px-2 py-1   outline-none w-44 md:w-96 "
        />
        <BsSearch className="w-4 h-4 text-gray-500 absolute left-2" />
      </div>
      <div className="flex flex-row md:space-x-5">
        <ul className="hidden md:flex flex-row space-x-8 border-r border-gray-300 pr-5">
          <li className="flex flex-row items-center cursor-pointer">
            <SiHomeassistantcommunitystore className="w-6 h-6 text-gray-800" />
            <p className="hidden md:flex text-sm font-light ml-1 flex-col">
              Store & services
              <span className="text-xs text-gray-400">choose your store</span>
            </p>
          </li>
          <li className="flex flex-row items-center cursor-pointer">
            <IoIosPeople className="w-6 h-6 text-gray-800" />
            <p className="hidden md:flex text-sm font-light ml-1 flex-col">
              Community
              <span className="text-xs text-gray-400">share</span>
            </p>
          </li>
        </ul>
        <ul className="flex flex-row space-x-4 md:space-x-8 ">
          <li className="flex flex-row items-center cursor-pointer">
            <BsHeart className="w-6 h-6 text-gray-800" />
            <p className="hidden md:flex text-sm font-light ml-1 flex-col">
              LogIn
            </p>
          </li>
          <li className="flex flex-row items-center cursor-pointer">
            <BsBasket className="w-6 h-6 text-gray-800" />
            <p className="hidden md:flex text-sm font-light ml-1 flex-col">
              Basket
            </p>
          </li>
          <li className="flex flex-row items-center cursor-pointer">
            <CiLogin className="w-6 h-6 text-gray-800" />
            <p className="hidden md:flex text-sm font-light ml-1 flex-col">
              Login
              <span className="text-xs text-gray-400">Enter your space</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Identification;
