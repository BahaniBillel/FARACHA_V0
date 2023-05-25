import React from "react";
import { ForwardIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.png";

function Footer() {
  return (
    <footer className="w-full py-20 px-5 md:px-36 border-t  bg-gray-50 flex flex-col md:flex-row sapce-x-5 items-start justify-center font-sans ">
      {/* first box :identification */}
      <div className=" px-10 md:w-1/3">
        <div className="  w-1/3 mb-10 ">
          <Image src={Logo} alt="logo" />
        </div>
        <p className="font-extralight text-sm text-gray-400 pr-5 font-bold ">
          يُعد موقع هايلة وجهتك الأولى لتسوق جديد المنتجات المميزة الخاصة
          بالمرأة وكل العائلة بأفضل الأسعار، مع توفير تجربة ممتعة وسهلة لكم في
          التسوق وشراء مختلف السلع وطلبها عبر الأنترنت، تصلكم مباشرة إلى باب
          منزلكم أو مقر عملكم والدفع نقدا عند الإستلام مع ضمان جودة عالية
          للمنتجات والسلع. موقع التسوق المفضل للعائلة الجزائرية مع أكثر من 20
          ألف منتج مميز وجديد مع ضمان جودة الخدمة قبل وبعد البيع
        </p>

        <Link href={`/about`} className="hidden">
          <div className="flex flex-row space-x-2 items-center text-xs font-bold mt-4 border-b-[2px] border-solid pb-4  border-black">
            <p className="text-teal-400">Read more</p>
            <ForwardIcon className="h-4 text-teal-400 " />
          </div>
        </Link>
      </div>

      {/* second box : company */}
      <div className="md:w-1/3 px-10 ">
        <h1 className="text-black font-semibold text-2xl border-b pb-2 border-solid mb-10">
          Company
        </h1>
        <ul className="font-extralight text-sm text-gray-400 pr-5 space-y-2">
          <Link href="#">
            <li className="link pb-2">Home</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">About</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">Blogs</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">Blogs</li>
          </Link>
        </ul>
      </div>
      {/* thirdbox : categories */}
      <div className="md:w-1/3 px-10">
        <h1 className="text-black font-semibold text-2xl border-b pb-2 border-solid mb-10 ">
          Categories
        </h1>
        <ul className="font-extralight text-sm text-gray-400 pr-5 space-y-2">
          <Link href="#">
            <li className="link pb-2">Privacy Policy</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">Terms and conditions</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">Contact</li>
          </Link>
          <Link href="#">
            <li className="link pb-2">Newsletter</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
