import React from "react";
import { funnelDisplay, instrumentSans } from "../fonts/font";

const cardInfo = [
  {
    title: "Architect",
    description: "We map high-value use cases to your business goals.",
    icon: "architectIcon.png",
  },
  {
    title: "Accelerate",
    description:
      "We use VGen's modular framework to bypass 80% of development time.",
    icon: "accelerateIcon.png",
  },
  {
    title: "Orchestrate",
    description:
      "We deploy and manage a cohesive digital workforce that works with your people.",
    icon: "orchesterateIcon.png",
  },
];

function ExpertStrategy() {
  return (
    <div className={`${instrumentSans.className}`}>
      {/* Top Section */}
      <div className="xl:pl-30 mt-10 sm:mt-0 sm:flex flex-col xl:flex-row  items-center gap-6 ">
        {/* Text Section */}
        <div className="xl:pl-4 text-[#161616] px-4 sm:pr-2 lg:pr-0 flex flex-col gap-3 sm:gap-10 max-w-full lg:max-w-full">
          <div className={`flex flex-col gap-3 text-4xl sm:text-5xl lg:text-7xl ${funnelDisplay.className}`}>
            <div className="font-semibold">Expert Strategy.</div>
            <div className="text-[#7E43FF] font-semibold">Platform Speed.</div>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-full">
              Enterprises often face a choice: <br />
              buy a rigid SaaS tool or hire consultants to build from scratch.
              Both are slow. We offer a third way.
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-2xl xl:max-w-2xl">
              <span className="font-semibold">
                Vithi IT delivers AI as a Managed Strategic Service.
              </span>{" "}
              We don't just hand you a login. We act as your AI Architects,
              using our <span className="font-semibold">VGen Platform</span> as
              the "engine" to deliver custom, enterprise-grade agents in weeks,
              not months.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-fit h-fit">
          <img
            src="/assets/chatscreen.png"
            alt="Chat Screen"
            className="xl:min-w-[52vw]  w-full h-full "
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:gap-10  px-4 sm:px-20 md:flex-row flex-wrap justify-center gap-10  lg:gap-6 mt-10 mb-10 xl:mb-40">
        {cardInfo.map((card) => (
          <div
            key={card.title}
            className="relative border-[#F5F5F5] border-[1.51px] rounded-xl flex flex-col w-full lg:w-[30%] p-6 sm:gap-4">
            <div className="absolute bg-[#F8F5FF] p-3 rounded-lg top-0 right-6 -translate-y-1/2 flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14">
              <img
                src={`/assets/${card.icon}`}
                alt={card.title}
                className="w-full h-full  object-contain" />
            </div>
            <h1 className={`font-semibold text-xl sm:text-2xl md:text-3xl pb-5 ${funnelDisplay.className}`}>{card.title}</h1>
            <p className="text-sm md:text-lg sm:text-xl font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertStrategy;
