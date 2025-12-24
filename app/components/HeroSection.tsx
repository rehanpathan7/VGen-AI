import { url } from "inspector";
import { ArrowRight } from "lucide-react";
import React from "react";
import { instrumentSans } from "../fonts/font";

export default function HeroSection() {
  return (
    <div className="xl:mt-20 mb-0 px-4 xl:px-0">
      <div className="relative flex flex-col lg:flex-row items-center text-left justify-between gap-20">
        <div className="flex px-4 xl:pl-35 opacity-100 flex-col gap-7 justify-center mt-20 items-start text-left">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-4xl sm:text-7xl font-bold max-w-full">
                Accelerate <br />
                Enterprise <span className="text-[#7E43FF]">AI Adoption</span>
              </h1>
            </div>

            <div className={`flex flex-col gap-2 ${instrumentSans.className}`}>
              <p className={`text-xl sm:text-3xl font-semibold`}>
                Orchestrate a digital workforce that scales securely
              </p>
              <p
                className={`text-[#161616] text-sm sm:text-base xl:max-w-[43vw] max-w-full leading-tight`}
              >
                Stop bolting AI on. Let us build it in. The question is no
                longer if you should adopt AI, but how to scale it without
                risk. We combine the power of our proprietary
                <span className="text-[#7E43FF] font-semibold">
                  {" "}
                  VGen Platform
                </span>{" "}
                with the precision of <span className="text-[#161616] font-semibold"> Vithi Strategic Consulting </span>to architect,
                deploy, and manage your AI workforce.
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row text-sm gap-5 ${instrumentSans.className}`}
          >
            <button className="flex items-center bg-black text-[#FFFFFF]  px-5 py-4 rounded-lg hover:bg-[#7E43FF] hover:duration-200 hover:shadow-lg transition">
              Start Your Transformation
              <ArrowRight size={18} className="ml-2" />
            </button>

            <button className="border border-black px-5 py-3 rounded-lg font-semibold hover:text-[#7E43FF]  hover:duration-200 hover:border-[#7E43FF] transition">
              See the VGen Platform
            </button>
          </div>
        </div>

        {/* RIGHT SECTION WITH DOTS */}
        <div className="absolute min-w-[45vw] hidden xl:flex right-0 h-[75vh] mt-30 z-99">
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
              className="bg-blend-darken opacity-40 max-w-full max-h-full object-contain"
            />

            {/* Center Overlay Image */}
            <img
              src="/assets/vgenlogo.png"
              alt=""
              className="absolute top-1/2 left-1/2 scale-90 transform -translate-x-1/2 -translate-y-1/2 max-w-[40%]"
            />
          </div>
        </div>
      </div>
      {/* CHAT SECTION */}
      <div className="p-4 flex justify-end mt-10 xl:mt-45 px-20">
        <div className="group flex items-center p-3 hover:gap-2 shadow-xl hover:rounded-xl rounded-full bg-linear-to-b from-[#7E43FF] to-[#4C2899] transition-transform duration-300 ">
          <div className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-35  group-hover:opacity-100  transition-all duration-300 ease-out text-sm sm:text-xl font-medium hover:translate-x-5 text-white whitespace-nowrap">
            Start Chat
          </div>
          <img src="/assets/chat.png" alt="chat" className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
      </div>
    </div>
  );
}
