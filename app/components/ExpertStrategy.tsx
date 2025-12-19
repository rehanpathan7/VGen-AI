import React from "react";

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
    <div className="mt-10">
      {/* Top Section */}
      <div className="xl:pl-30  sm:flex flex-col xl:flex-row items-center gap-11 min-h-screen">
        {/* Text Section */}
        <div className="pl-4 lg:pl-4 xl:pl-0  pr-2 lg:pr-0 flex flex-col gap-6 max-w-full lg:max-w-full">
          <div className="flex flex-col gap-3 text-4xl sm:text-5xl lg:text-7xl font-semibold">
            <div>Expert Strategy.</div>
            <div className="text-[#7E43FF]">Platform Speed.</div>
          </div>

          <div className="flex flex-col  gap-6">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-full">
              Enterprises often face a choice: <br />
              buy a rigid SaaS tool or hire consultants to build from scratch.
              Both are slow. We offer a third way.
            </p>
            <p className="text-base  sm:text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-2xl xl:max-w-3xl">
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
            className="xl:min-w-[50vw] xl:min-h-[95vh] w-full h-full "
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col px-4 sm:px-20 sm:flex-row flex-wrap justify-center gap-10 md:gap-6 mt-20 mb-50">
        {cardInfo.map((card) => (
          <div
            key={card.title}
            className="relative border w-full hover:bg-[#F8F5FF] border-[#F5F5F5] border-[1.51px] rounded-xl flex flex-col  sm:w-[30%] p-6  gap-4"
          >
            <div className="absolute   bg-[#F8F5FF] p-3 rounded-lg top-0 right-6 -translate-y-1/2 flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16">
              <img
                src={`/assets/${card.icon}`}
                alt={card.title}
                className="w-full h-full  object-contain" />
            </div>
            <h1 className="font-semibold text-2xl  sm:text-3xl pb-5">{card.title}</h1>
            <p className="text-base sm:text-xl font-light">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertStrategy;
