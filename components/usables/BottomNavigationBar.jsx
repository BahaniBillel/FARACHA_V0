import React, { useState, useEffect } from "react";
import { GrUserFemale } from "react-icons/gr";
import { ImHome3 } from "react-icons/im";
import { CiShop } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdPeople } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

function BottomNavigationBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex md:hidden flex-row space-x-8 bg-white border-t py-3 fixed bottom-0 left-0 w-full shadow-md px-2 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer ">
        <ImHome3 className="h-6 w-6" />
        <p className="text-gray-600">Home</p>
      </div>

      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer ">
        <MdOutlineLocalOffer className="h-6 w-6" />
        <p className="text-gray-600">Offers</p>
      </div>
      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer">
        <HiOutlineShoppingBag className="h-6 w-6" />
        <p className="text-gray-600">Shop</p>
      </div>
      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer ">
        <GrUserFemale className="h-6 w-6" />
        <p className="text-gray-600">Me</p>
      </div>
      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer">
        <IoMdPeople className="h-6 w-6" />
        <p className="text-gray-600">Community</p>
      </div>
      <div className="flex flex-col text-xs font-light items-center justify-center cursor-pointer">
        <CiShop className="h-6 w-6" />
        <p className="text-gray-600">Store</p>
      </div>
    </div>
  );
}

export default BottomNavigationBar;
