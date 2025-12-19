import React from "react";

const timelineData = [
  {
    week: "Weeks 1–2",
    title: "Strategic Blueprint",
    desc: "We assess your data readiness and identify high-impact “Flagship Use Cases.”",
    side: "left",
  },
  {
    week: "Weeks 3–6",
    title: "The Proof of Value",
    desc: "Using VGen's modular blocks, we deploy a live pilot agent in a secure sandbox.",
    side: "right",
  },
  {
    week: "Weeks 7-10",
    title: "Integration & Hardening",
    desc: "We connect the agent to enterprise systems (ERPs, CRMs) and implement rigorous security testing.",
    side: "left",
  },
  {
    week: "Week 11+",
    title: "Scale & Enablement",
    desc: "We roll out to the enterprise and train your internal “AI Center of Excellence.”",
    side: "right",
  },
];

export default function VGenFramework() {
  return (
    <section className="w-full bg-white py-24 flex justify-center">
      <div className="max-w-6xl w-full px-6">

        {/* Heading */}
        <div className="text-center mb-28">
          <h1 className="text-2xl sm:text-[56px] leading-[1.1] font-bold text-black">
            The VGen Acceleration <br />
            <span className="text-[#7E43FF]">Framework™</span>
          </h1>
          <p className="mt-6 text-[16px] text-[#4B4B4B]">
            Our proven methodology de-risks deployment and ensures rapid time-to-value.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -top-10 -bottom-10 -translate-x-1/2 w-px bg-[#7E43FF]/40" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_13px_1fr] items-center mb-24"
            >
              {/* LEFT SIDE (week + line OR text) */}
              {item.side === "left" ? (
                <div className="flex justify-end items-center">
                  <span className="px-5 py-2 rounded-full border border-[#7E43FF] text-[#7E43FF] text-lg font-semibold">
                    {item.week}
                  </span>
                  <div className="h-px w-12 bg-[#7E43FF]/40" />
                </div>
              ) : (
                <div className="text-right px-3 sm:px-7">
                  <h3 className="text-lg sm:text-2xl font-semibold text-[#7E43FF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-xl max-w-full text-[#4B4B4B] ">
                    {item.desc}
                  </p>
                </div>
              )}

              {/* CENTER DOT */}
              <div className="inline-flex justify-center">
                <span className="w-3 h-3 rounded-full bg-[#7E43FF]" />
              </div>

              {/* RIGHT SIDE */}
              {item.side === "right" ? (
                <div className="flex items-center">
                  <div className="h-px w-12 bg-[#7E43FF]/40" />
                  <span className="px-5 py-2 rounded-full border border-[#7E43FF] text-[#7E43FF] text-lg font-semibold">
                    {item.week}
                  </span>
                </div>
              ) : (
                <div className="text-left px-4 sm:px-8">
                  <h3 className="text-lg sm:text-2xl font-semibold text-[#7E43FF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-xl max-w-full text-[#4B4B4B]">
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
