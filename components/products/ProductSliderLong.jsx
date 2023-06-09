import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper";

// Images
import Product02 from "./Product02";
import promo1 from "../../images/promo1.jpg";
import promo2 from "../../images/promo2.jpg";
import promo3 from "../../images/promo3.jpg";
import promo4 from "../../images/promo4.jpg";
import promo5 from "../../images/promo5.jpg";
import promo6 from "../../images/promo6.jpg";

const products = [
  {
    image: promo1,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    description:
      "Complimentary with $85 Sulwhasoo purchase.*Beauty Insider members only.Online only*Exclusions/terms apply. ",
    cta: "SHOP NOW",
    backgroundColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    feature: "new",
  },
  {
    image: promo2,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-rose-300",
    feature: "new",
  },
  {
    image: promo3,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-teal-700",
    feature: "new",
  },
  {
    image: promo4,
    price: 800,
    title: "Dark spot toner",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-red-500",
    feature: "new",
  },
  {
    image: promo5,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-zinc-400",
    feature: "new",
  },
  {
    image: promo6,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-amber-400",
    feature: "new",
  },
];

function ProductSliderLong({ title, haveLabel }) {
  return (
    <div className=" md:px-32">
      <h2 className="px-2 mb-5 font-semibold text-xl ">{title}</h2>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Product02
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              feature={haveLabel ? product.feature : null}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSliderLong;
