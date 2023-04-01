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
import Product01 from "./Product01";
import promo1 from "../../images/gelato.webp";
import promo2 from "../../images/lip-butter-lamp.webp";
import promo3 from "../../images/lancome.webp";
import promo4 from "../../images/dark-spot-toner.webp";
import promo5 from "../../images/glow-recipe.webp";
import promo6 from "../../images/gelato.webp";
import promo7 from "../../images/gelato.webp";

const products = [
  {
    image: promo1,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
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
  {
    image: promo7,
    price: 1200,
    title: "Must-Have Minis",
    subtitle: "Small but mighty picks to pocket right now",
    cta: "SHOP NOW",
    backgroundColor: "bg-fushia-200",
    feature: "new",
  },
];

function ProductsShowCase({ title, haveLabel }) {
  return (
    <div className="my-10 md:px-32">
      <h2 className="px-2 mb-5 font-semibold text-xl">{title}</h2>
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
          type: "fraction",
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide>
            <Product01
              image={product.image}
              price={product.price}
              title={product.title}
              subtitle={product.subtitle}
              feature={haveLabel ? product.feature : null}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsShowCase;
