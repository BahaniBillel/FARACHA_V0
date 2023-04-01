import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import promo1 from "../../images/promo1.jpg";
import promo2 from "../../images/promo2.jpg";
import promo3 from "../../images/promo3.jpg";
import promo4 from "../../images/promo4.jpg";
import promo5 from "../../images/promo5.jpg";
import promo6 from "../../images/promo6.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function SliderSwiper() {
  const Images = [
    {
      image: promo1,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      image: promo2,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-rose-300",
    },
    {
      image: promo3,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-teal-700",
    },
    {
      image: promo4,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-red-500",
    },
    {
      image: promo5,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-zinc-400",
    },
    {
      image: promo6,
      title: "Must-Have Minis",
      subtitle: "Small but mighty picks to pocket right now",
      cta: "SHOP NOW",
      backgroundColor: "bg-amber-400",
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Images.map((el) => (
          <div className="" key={el}>
            <SwiperSlide>
              {" "}
              <Image src={el.image} alt="/" priority={true} />
              <div
                className={`${el.backgroundColor} w-full h-40 absolute bottom-0 left-0 text-start p-4 opacity-95 flex flex-col`}
              >
                <h3 className="text-2xl font-semibold tracking-wide">
                  {el.title}
                </h3>
                <p className="font-light underline cursor-pointer text-base">
                  {el.subtitle}
                </p>
                <div className="flex  flex-grow"></div>
                <p className="font-bold text-lg">{el.cta}</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}

export default SliderSwiper;
