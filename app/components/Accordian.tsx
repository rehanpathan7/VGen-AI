"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { funnelDisplay, instrumentSans } from "../fonts/font";

interface AccordionItem {
  id: number;
  heading: {
    heading1: { part1: string; part2: string };
    heading2: string;
  };
  challenge: string;
  solution: {
    title: string;
    table: { title: string; info: string }[];
  };
  result?: string;
}

interface AccordianProps {
  items: AccordionItem[];
}

function Accordian({ items }: AccordianProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mt-10 flex flex-col gap-6">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={`md:py-8
              py-3 sm:py-6 px-4 sm:px-6 md:px-10 ${instrumentSans.className}  rounded-3xl shadow border border-[#DCDCDC] transition-all duration-300 cursor-pointer
              ${
                item.id === 1
                  ? "bg-gradient-to-b from-[#FFFFFF] to-[#F8F5FF]"
                  : ""
              }
            `}
          >
            {/* Header */}
            <div
              className="flex mt-2 flex-col sm:flex-row justify-between items-start sm:items-center gap-0"
              onClick={() => toggle(item.id)}
            >
              <div className="flex flex-col gap-1 sm:gap-2">
                <h1 className={`text-base sm:text-xl text-[#7E43FF] font-light`}>
                  {item.heading.heading1.part1}{" "}
                  <span className={`text-base sm:text-xl font-semibold ${funnelDisplay.className}`}>
                    {item.heading.heading1.part2}
                  </span>
                </h1>
                <span className="text-lg  md:text-4xl font-semibold ">
                  {item.heading.heading2}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(item.id);
                }}
                className={`transition-transform duration-300 self-start sm:self-auto ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown  className="size-8 sm:size-10 md:size-15" />
              </button>
            </div>

            {/* Animated Content */}
            <div
              className={`overflow-hidden transition-all duration-700 text-[#201140] ease-in-out ${
                isOpen ? "max-h-[2000px] opacity-100 mt-4 sm:mt-8 " : "max-h-0 opacity-0"
              }`}
            >
              {/* inner wrapper to avoid clipping */}
              <div>
                <hr className="border-[#DCDCDC] mb-2 sm:mb-6" />

                {/* Challenge */}
                <div className="mb-2 sm:mb-10">
                  <h2 className="font-normal text-xs  md:text-sm mb-2">THE CHALLENGE:</h2>
                  <p className="text-sm sm:text-base md:text-xl text-[#201140] max-w-4xl">
                    {item.challenge}
                  </p>
                </div>

                <hr className="border-[#DCDCDC] mb-2 sm:mb-6" />

                {/* Solution */}
                <div className="mb-2 mt-2 sm:mb-4 sm:mt-10">
                  <h2 className="font-normal  text-sm mb-2">THE SOLUTION:</h2>
                  <p className="text-sm text-[#201140] font-ligh t sm:text-xl sm:mb-4">
                    {item.solution.title}
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-6">
                    {item.solution.table.map((row, index) => (
                      <div key={index} className="flex flex-col mt-5">
                        <h3 className={`font-semibold text-xs md:text-md mb-1  ${funnelDisplay.className}`}>
                          {row.title}
                        </h3>
                        <p className="text-[10px] md:text-sm max-w-xs">
                          {row.info}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {item.result && (
                  <>
                    <hr className="border-[#DCDCDC] mb-2 mt-2 sm:mb-6 sm:mt-10" />
                    <div>
                      <h2 className="font-semibold text-sm md:text-md mb-2">
                        THE RESULT:
                      </h2>
                      <p className="text-xs md:text-lg text-gray-700">
                        {item.result}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
