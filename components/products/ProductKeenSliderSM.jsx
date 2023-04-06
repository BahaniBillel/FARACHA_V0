import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductImage from "../../images/gelato.webp";

// Components
import Product01 from "./Product01";
import Modal from "../usables/Modal";

const ProductKeenSliderSM = ({ title, haveLabel, data, bottomLine }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 0 },
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

  // Hnadle Modal
  const [showModal, setShowModal] = useState(false);
  const ShowModel = () => {
    setShowModal(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  const CloseModalHandler = () => {
    setShowModal(false);
    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  return (
    <div className=" md:px-32 ">
      <div
        className={`navigation-wrapper   ${
          bottomLine ? "border-b" : null
        } py-5`}
      >
        <div>
          <div className="">
            <h2 className="px-2 mb-5 font-semibold text-xl ">{title}</h2>
            <div ref={sliderRef} className="keen-slider">
              {data.map((product) => (
                <div className="keen-slider__slide py-10 " key={product.image}>
                  <Product01
                    image={product.image}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    feature={haveLabel ? product.feature : null}
                    QuickViewHandler={ShowModel}
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
      {showModal ? (
        <Modal
          CloseModal={CloseModalHandler}
          picture={ProductImage}
          brandname="Comas"
          title="Bodyskin crema to soften the touch."
        />
      ) : null}
    </div>
  );
};

export default ProductKeenSliderSM;

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
