import React from "react";

// Components
import {
  SunIcon,
  SpeakerWaveIcon,
  TagIcon,
  StarIcon,
  RectangleGroupIcon,
  FingerPrintIcon,
} from "@heroicons/react/24/outline";

function CardTN({ icon, title }) {
  return (
    <div className="h-44 w-28 p-5 rounded-md border relative bg-white shadow-md ">
      <p className="text-xs md:text-sm text-gray-600 font-normal text-left ">
        {title}
      </p>
      <div className="absolute bottom-2 right-2">{icon}</div>
    </div>
  );
}

export default CardTN;
