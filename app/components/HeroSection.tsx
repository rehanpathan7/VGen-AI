import { ArrowRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="mt-20 pl-30">
      {/* Main Flex Container */}
      <div className="relative flex flex-col lg:flex-row items-center ">
        
        {/* Text Section */}
        <div className="flex flex-col gap-4">
          <div className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Accelarate <br />
            Enterprise <span className="text-[#7E43FF]">AI Adoption</span>
          </div>

          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Orchestrate a digital workforce that scales securely
          </div>

          <div className="max-w-full lg:max-w-2xl text-sm sm:text-base mb-5 text-gray-700">
            Stop bolting AI on. Let us build it in. The question is no
            longer if you should adopt AI, but how to scale it without risk.
            We combine the power of our proprietary{" "}
            <span className="text-[#7E43FF]">VGen Platform</span> with the
            precision of Vithi Strategic Consulting to architect, deploy, and
            manage your AI workforce.
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="flex bg-[#161616] items-center hover:bg-[#7E43FF] duration-200 text-white px-6 py-3 gap-2 rounded-lg justify-center sm:justify-start">
              <button className="text-sm">Start Your Transformation</button>
              <ArrowRight size={20} />
            </div>
            <button className="flex border p-3 sm:p-4 gap-2 rounded-lg hover:text-[#7E43FF] text-sm sm:text-base font-bold justify-center sm:justify-start">
              See the VGen Platform
            </button>
          </div>
        </div>
       
       
        {/* Image Section */}
        <div className="relative overflow-hidden mt-20  bg-dots">
           <div className="absolute bg-transparent"/>
          <img
            src="/assets/heroimage.gif"
            alt="Hero"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-full mix-blend-darken "
          />
        </div>
      </div>

      {/* Chat Button */}
      <div className="p-4 px-10 flex justify-end mt-10">
        <div className="group flex items-center p-3 shadow-xl hover:rounded-xl rounded-full bg-gradient-to-b from-[#7E43FF] to-[#6C3FCD] transition-transform duration-300 hover:translate-x-5">
          <div
            className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[140px]  group-hover:opacity-100  transition-all duration-300 ease-out text-sm sm:text-xl font-medium text-white whitespace-nowrap"
          >
            Start Chat
          </div>
          <img src="/assets/chat.png" alt="chat" className="w-6 sm:w-8" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
