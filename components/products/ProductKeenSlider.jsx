import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Components
import Product02 from "./Product02";

const ProductKeenSlider = ({ title, haveLabel, data }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1.8, spacing: 20 },
        loop: true,
        mode: "free",
      },
      "(min-width: 1000px)": {
        slides: { perView: 4.2, spacing: 10 },
        loop: true,
        mode: "free",
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="my-10 md:px-32 ">
      <div className="navigation-wrapper  border-b  py-10 ">
        <div>
          <div className="">
            <h2 className="px-2 mb-5 font-semibold text-xl ">{title}</h2>
            <div ref={sliderRef} className="keen-slider">
              {data.map((product) => (
                <div className="keen-slider__slide py-10 " key={product.image}>
                  <Product02
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                    description={product.description}
                    feature={haveLabel ? product.feature : null}
                    hasDetails={product.details}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductKeenSlider;
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
