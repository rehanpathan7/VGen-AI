import React from "react";
import { instrumentSans } from "../fonts/font";

interface IconType {
  icon: string | undefined; // Blob removed; img src expects string
  heading: string;
  description: string;
}

function Card({ icon, heading, description }: IconType) {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b   from-[#FFFFFF] to-[#F2ECFF] px-6 sm:px-8 py-6 sm:py-7 rounded-2xl border-[1.5px] border-[#D7C5FF] items-center gap-4 sm:gap-6">
      
      {/* Icon */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
        <div className="absolute inset-0 bg-[#4605d1] rounded-xl mix-blend-color"></div>
        {icon && (
          <img
            src={icon}
            alt={heading}
            className="w-full h-full object-contain relative z-10 mix-blend-multiply"
          />
        )}
      </div>

      {/* Text */}
      <div className="text-center sm:text-left">
        <h2 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{heading}</h2>
        <p className={`text-xs sm:text-sm ${instrumentSans.className}`}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
