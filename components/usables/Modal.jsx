import React from "react";
import Image from "next/image";
import { AiFillCloseCircle, AiFillHeart } from "react-icons/ai";
import StarRatings from "react-star-ratings";
import Link from "next/link";

function Modal({ CloseModal, picture, title, brandname }) {
  return (
    <div className=" fixed left-0  top-0  z-50 w-screen h-screen bg-black/30 flex flex-col items-center justify-center px-1 md:px-0 ">
      <div
        className="w-full md:w-3/4 h-3/4  md:h-3/4 bg-white rounded-t-lg p-3 relative translate-y-16 transition-all ease-in-out 
      duration-200 md:translate-y-0"
      >
        {/* brand , title, reviews */}
        <div className="">
          <p className="font-semibold whitespace-pre">{brandname}</p>
          <p className="font-light text-xl">{title}</p>
          <div className="flex flex-row  items-center space-x-2 text-sm font-bold mb-5">
            <StarRatings
              rating={4}
              starRatedColor="black"
              changeRating={3}
              numberOfStars={5}
              name="rating"
              starDimension="12px"
            />
            <p>77 reviews</p>
            <div className="flex flex-row flex-nowrap  items-center space-x-3">
              <AiFillHeart />
              <p>66.6k loves</p>
            </div>
          </div>
          <p className="font-bold text-xl">128 $</p>
        </div>
        {/* Image , reivews, likes */}
        <div className=" ">
          <Image
            src={picture}
            alt={title}
            className="w-auto md:w-auto h-80 md:h-80"
          />
        </div>

        {/* specification,description, variation, price */}
        <div className="mt-2">
          <p className="text-xs text-gray-500 tracking-wider">
            SIZE 0.2 oz / 7 mL•ITEM 2562932
          </p>
          <p className="text-sm tracking-wider">
            A cocktail of unique oils that delivers thirst-quenching hydration,
            nourishment, protection, and visible repair for soothed, moisturized
            lips.
          </p>
        </div>
        {/* Call to action */}
        <div className="flex flex-row items-center justify-center space-x-4 mt-5">
          <Link href="#">
            <div className="bg-white rounded-2xl py-1 px-3 border-2 text-light whitespace-pre cursor-pointer hover:scale-95 transition-all duration-200 ease-in-out">
              View details
            </div>
          </Link>
          <Link href="#">
            <div className="bg-red-500 rounded-2xl py-1 px-3 text-white text-light whitespace-pre cursor-pointer hover:scale-95 transition-all duration-200 ease-in-out">
              Add to Basket
            </div>
          </Link>
        </div>
        <span
          className="px-3 py-1  text-xl  rounded-full absolute right-2 top-2 cursor-pointer "
          onClick={CloseModal}
        >
          <AiFillCloseCircle />
        </span>
      </div>
    </div>
  );
}

export default Modal;
