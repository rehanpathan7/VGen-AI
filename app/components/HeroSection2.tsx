import { url } from "inspector";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function HeroSection2() {
  return (
    <div className="mt-20 mb-20 ">
      <div className="relative flex flex-col lg:flex-row items-center text-left justify-between gap-10">
        {/* LEFT TEXT SECTION */}
        <div className="flex px-6 lg:px-30 opacity-100 flex-col gap-3 justify-center mt-20 items-start text-left">
          <h1 className="text-4xl sm:text-7xl font-bold max-w-full">
            Accelerate <br />
            Enterprise <span className="text-[#7E43FF]">AI Adoption</span>
          </h1>

          <p className="text-xl sm:text-3xl font-semibold">
            Orchestrate a digital workforce that scales securely
          </p>

          <p className="text-gray-700 text-sm sm:text-base max-w-3xl leading-tight">
            Stop bolting AI on. Let us build it in. The question is no
            longer if you should adopt AI, but how to scale it without risk. We
            combine the power of our proprietary
            <span className="text-[#7E43FF] font-semibold">
              VGen Platform
            </span>{" "}
            with the precision of Vithi Strategic Consulting to architect,
            deploy, and manage your AI workforce.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-[#7E43FF] transition">
              Start Your Transformation
              <ArrowRight size={18} className="ml-2" />
            </button>

            <button className="border border-black px-6 py-3 rounded-lg font-semibold hover:text-[#7E43FF] transition">
              See the VGen Platform
            </button>
          </div>
        </div>

        {/* RIGHT SECTION WITH DOTS */}
        <div className="absolute min-w-3xl right-0 h-[70vh] mt-10  z-0">
          <div className="absolute inset-0 flex justify-center items-center content-center">
            {/* GIF Background */}
            <img
      src="/assets/dots.png"
      alt="Dots Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
            <img
              src="/assets/heroimage.gif"
              alt=""
              className="bg-blend-darken opacity-30 max-w-full max-h-full object-contain"
            />

            {/* Center Overlay Image */}
            <img
              src="/assets/vgenlogo.png"
              alt=""
              className="absolute top-1/2 left-1/2 scale-100 transform -translate-x-1/2 -translate-y-1/2 max-w-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
