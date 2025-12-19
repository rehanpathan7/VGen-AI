"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

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

  return (
    <div className="mt-10 flex flex-col gap-6">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className={`md:py-8
    py-6 px-4 sm:px-6 md:px-10 rounded-3xl shadow  cursor-pointer transition-all border border-[#DCDCDC]
    ${
      item.id === 1
        ? "bg-gradient-to-b from-[#FFFFFF] to-[#F8F5FF] "
        : ""
    }
  `}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg sm:text-xl text-[#7E43FF]">
                  {item.heading.heading1.part1}{" "}
                  <span className="font-semibold">
                    {item.heading.heading1.part2}
                  </span>
                </h1>
                <span className="text-2xl sm:text-4xl font-semibold">
                  {item.heading.heading2}
                </span>
              </div>

              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="transition-transform duration-300 self-start sm:self-auto"
              >
                <ChevronDown size={36} className={isOpen ? "rotate-180" : ""} />
              </button>
            </div>

            {/* Content */}
            {isOpen && (
              <div className="mt-6 sm:mt-8">
                <hr className="border-[#DCDCDC] mb-6" />

                {/* Challenge */}
                <div className="mb-6">
                  <h2 className="font-semibold text-md mb-2">THE CHALLENGE:</h2>
                  <p className="text-base sm:text-lg text-gray-700">
                    {item.challenge}
                  </p>
                </div>

                <hr className="border-[#DCDCDC] mb-6" />

                {/* Solution */}
                <div className="mb-6">
                  <h2 className="font-semibold text-md mb-2">THE SOLUTION:</h2>
                  <p className="text-base sm:text-lg mb-4">
                    {item.solution.title}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {item.solution.table.map((row, index) => (
                      <div key={index} className="flex flex-col">
                        <h3 className="font-semibold text-md mb-1">
                          {row.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                          {row.info}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {item.result && (
                  <>
                    <hr className="border-[#DCDCDC] mb-6" />
                    <div>
                      <h2 className="font-semibold text-md mb-2">
                        THE RESULT:
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700">
                        {item.result}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordian;
