import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Components
import {
  SunIcon,
  SpeakerWaveIcon,
  TagIcon,
  StarIcon,
  RectangleGroupIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";
import CardTN from "./CardTN";

const cards = [
  {
    id: 1,
    title: "Foundation",
    icon: (
      <SunIcon className="w-16 h-16 absolute bottom-5 right-2 text-red-400 " />
    ),
  },
  {
    id: 2,
    title: "Moisturizers",
    icon: (
      <SpeakerWaveIcon className="w-16 h-16  absolute bottom-5 right-2 text-amber-400 " />
    ),
  },
  {
    id: 3,
    title: "Hair Styling and traitment",
    icon: (
      <TagIcon className="w-16 h-16 absolute bottom-5 right-2 text-fuchsia-400 " />
    ),
  },

  {
    id: 4,
    title: "Perfume",
    icon: (
      <StarIcon className="w-16 h-16  absolute bottom-5 right-2 text-emerald-400 " />
    ),
  },
  {
    id: 5,
    title: "Minis",
    icon: (
      <RectangleGroupIcon className="w-16 h-16  absolute bottom-5 right-2 text-cyan-400 " />
    ),
  },
  {
    id: 6,
    title: "Trending on social media",
    icon: (
      <FingerPrintIcon className="w-16 h-16  absolute bottom-5 right-2 text-pink-400 " />
    ),
  },
];

function SliderCardTN() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 3.1, spacing: 20 },
        loop: true,
        mode: "free",
      },
      "(min-width: 1000px)": {
        slides: { perView: 5.5, spacing: 5 },
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
    <div className="flex flex-col md:flex-row md:justify-center md:items-center   py-5 mb-20  ">
      <div className="px-2 mr-10">
        <h3 className="font-semibold text-xl">Featured Categories</h3>
        <p>Shop whats popular now.</p>
      </div>

      <div className=" flex flex-row  space-x-10 items-center">
        <div ref={sliderRef} className="keen-slider">
          {cards.map((card) => (
            <div className="keen-slider__slide py-10 " key={card.id}>
              <CardTN title={card.title} icon={card.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderCardTN;
