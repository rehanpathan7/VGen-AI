"use client";

import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

function SessionSchedule() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex justify-center items-center text-center mt-10 px-4 sm:px-6 lg:px-32">
      <div
        className="relative border-[1.51px] flex justify-center rounded-xl items-center min-h-[46vh] text-center w-full max-w-[1200px] border-[#DCDCDC] p-6 sm:p-12 md:p-20 overflow-hidden"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-700 bg-[#F2ECFF] ${
            hovering ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Background GIF */}
        <img
          src="/assets/lightspeed.gif"
          alt="background glow gif"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-overlay ${
            hovering ? "opacity-50 scale-100" : "opacity-0 scale-100"
          }`}
        />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col max-w-[100%] md:max-w-[100%] gap-6 sm:gap-8 md:gap-10">
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-5">
            <h1
              className={`flex justify-center text-[#391E73] items-center text-xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-7xl font-semibold ${
                hovering ? "gap-4 sm:gap-5 md:gap-5" : "gap-1 sm:gap-3 md:gap-2"
              }`}
            >
              <span>Ready to</span>

              <img
                src="/assets/VGen Logo.gif"
                alt=""
                className={`overflow-hidden transition-all duration-500 ${
                  hovering
                    ? "opacity-100 w-8 sm:w-10 md:w-12 scale-150 sm:scale-160 md:scale-180"
                    : "opacity-0 w-0"
                }`}
              />

              <span>Accelerate?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl">
              Stop building from scratch. Start building with a partner.
              <span className="block">
                Partner with Vithi IT to deploy a secure, scalable AI workforce
                powered by VGen.
              </span>
            </p>
          </div>

          <div className="flex justify-center">
            <button className="flex items-center gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg text-white bg-linear-to-b from-[#7E43FF] to-[#4C2899] text-sm sm:text-base md:text-lg">
              Schedule a Strategy Session
              <ArrowRight className="w-4 sm:w-5 md:w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionSchedule;
