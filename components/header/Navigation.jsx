import React from "react";

function Navigation() {
  const Navs = [
    "New",
    "Brands",
    "Makeup",
    "Skincare",
    "Hair",
    "Fragrance",
    "Tolls & Brushes",
    "Bath & Body",
    "Mini Size",
    "Gifts",
    "Beauty under $20",
    "Sale & Offers",
  ];
  return (
    <div className=" overflow-x-auto  snap-start flex flex-row space-x-6 md:space-x-10 h-10 bg-black items-center md:justify-center px-3">
      {Navs.map((nav) => (
        <p
          className="font-light text-xs  md:text-sm text-white cursor-pointer whitespace-pre "
          key={nav}
        >
          {nav}
        </p>
      ))}
    </div>
  );
}

export default Navigation;
