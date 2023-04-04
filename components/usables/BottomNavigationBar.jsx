import React from "react";
import { GrUserFemale } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

function BottomNavigationBar() {
  const OpenModal = () => {};
  return (
    <div className="flex md:hidden flex-row space-x-9 bg-white border-t py-3 fixed bottom-0 left-0 w-full shadow-md px-2 overflow-visible">
      <Link href="/">
        <div
          className="flex flex-col text-xs font-light items-center justify-center cursor-pointer "
          onClick={OpenModal}
        >
          <ImHome3 className="h-6 w-6" />
          <p className="text-gray-600">Home</p>
        </div>
      </Link>

      <div
        className="flex flex-col text-xs font-light items-center justify-center cursor-pointer "
        onClick={OpenModal}
      >
        <MdOutlineLocalOffer className="h-6 w-6" />
        <p className="text-gray-600">Offers</p>
      </div>
      <div
        className="flex flex-col text-xs font-light items-center justify-center cursor-pointer"
        onClick={OpenModal}
      >
        <HiOutlineShoppingBag className="h-6 w-6" />
        <p className="text-gray-600">Shop</p>
      </div>
      <div
        className="flex flex-col text-xs font-light items-center justify-center cursor-pointer "
        onClick={OpenModal}
      >
        <GrUserFemale className="h-6 w-6" />
        <p className="text-gray-600">Me</p>
      </div>
      <Link href="/community">
        <div
          className="flex flex-col text-xs font-light items-center justify-center cursor-pointer"
          onClick={OpenModal}
        >
          <IoMdPeople className="h-6 w-6" />
          <p className="text-gray-600">Community</p>
        </div>
      </Link>
      <div
        className="flex flex-col text-xs font-light items-center justify-center cursor-pointer"
        onClick={OpenModal}
      >
        <CiShop className="h-6 w-6" />
        <p className="text-gray-600">Store</p>
      </div>
    </div>
  );
}

export default BottomNavigationBar;
