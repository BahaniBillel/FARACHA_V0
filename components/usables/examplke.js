import React, { useState, useEffect } from "react";
import { GrUserFemale } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

function BottomNavigationBar() {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0 && !isHidden) {
      setIsHidden(true);
    } else if (position === 0 && isHidden) {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white border-t py-3 shadow-md px-2 md:flex md:justify-center transition-all duration-500 ease-in-out ${
        isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <Link href="/">
        <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
          <ImHome3 className="h-6 w-6" />
          <p className="text-xs font-light text-gray-600">Home</p>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
        <MdOutlineLocalOffer className="h-6 w-6" />
        <p className="text-xs font-light text-gray-600">Offers</p>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
        <HiOutlineShoppingBag className="h-6 w-6" />
        <p className="text-xs font-light text-gray-600">Shop</p>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
        <GrUserFemale className="h-6 w-6" />
        <p className="text-xs font-light text-gray-600">Me</p>
      </div>
      <Link href="/community">
        <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
          <IoMdPeople className="h-6 w-6" />
          <p className="text-xs font-light text-gray-600">Community</p>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center cursor-pointer md:mx-4">
        <CiShop className="h-6 w-6" />
        <p className="text-xs font-light text-gray-600">Store</p>
      </div>
    </div>
  );
}

export default BottomNavigationBar;
