import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import promo1 from "../../images/promo1.jpg";
import promo2 from "../../images/promo2.jpg";
import promo3 from "../../images/promo3.jpg";
import promo4 from "../../images/promo4.jpg";
import promo5 from "../../images/promo5.jpg";
import promo6 from "../../images/promo6.jpg";
import Image from "next/image";

export default () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2.2, spacing: 5 },
        loop: true,
        mode: "free",
      },
      "(min-width: 1000px)": {
        slides: { perView: 3.2, spacing: 10 },
        loop: true,
        mode: "free",
      },
    },
    slides: { perView: 1.2 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const Images = [promo1, promo2, promo3, promo4, promo5, promo6];

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider ">
        {Images.map((el) => (
          <div className="keen-slider__slide " key={el}>
            <Image src={el} alt="/" />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}
    </div>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
