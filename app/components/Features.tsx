"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { Cpu, Layers, Bug, Brain, Plus, Bot, SquarePlus } from "lucide-react";
import { funnelDisplay, instrumentSans, inter } from "../fonts/font";
import { motion, AnimatePresence } from "framer-motion";

// ------------------- Icon Wrapper -------------------
interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <span className="w-[1.1em] h-[1.1em] flex items-center justify-center text-[#564B6C]">
    {children}
  </span>
);



// ------------------- Feature Info -------------------
interface Feature {
  title: string;
  description: ReactNode;
  icon: string;
  gif?: string;
  direction: "left" | "right";
}

const featuresInfo: Feature[] = [
  {
    title: "Build Intelligent Agents",
    description: (
      <>
        We leverage VGen’s <span className="font-semibold">Cognitive Core</span>{" "}
        to rapidly construct agents that understand context, reason through
        complex tasks, and adhere to strict enterprise guidelines.
      </>
    ),
    icon: "/assets/build.png",
    direction: "right",
  },
  {
    title: "Integrate & Orchestrate",
    description: (
      <>
        VGen creates a unified intelligence layer. We natively connect agents to
        your <span className="font-semibold">Enterprise Fabric</span>
        —Salesforce, ServiceNow, Microsoft 365, and legacy ERPs—to automate
        end-to-end workflows.
      </>
    ),
    icon: "/assets/orchestrate.png",
    direction: "left",
  },
  {
    title: "Governance by Design",
    description: (
      <>
        Scale with confidence. VGen provides built-in guardrails, data
        sovereignty protocols, and audit trails, ensuring your AI remains secure
        and compliant from Day 1.
      </>
    ),
    icon: "/assets/background.png",
    gif: "/assets/VGen Logo.gif",
    direction: "right",
  },
];

// ------------------- Features Component -------------------
export default function Features() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 text-center xl:pb-24 mb-10 xl:mb-20  xl:px-0">
      <div className={`max-w-[100vw] xl:w-[85%] mx-auto flex flex-col gap-2 xl:gap-4`}>
        <h1 className={`text-2xl sm:text-5xl lg:text-7xl xl:leading-22 font-semibold ${funnelDisplay.className}`}>
          The <span className={`text-[#7E43FF] `}>Engine</span> Behind Your
          <span className={`block `}>Digital Workforce</span>
        </h1>

        <p className={`text-base sm:text-xl text-[#444] ${instrumentSans.className}`}>
          VGen is the secure, enterprise-ready platform we use to build your
          advantage.
        </p>
      </div>

      <div className="mt-7 sm:mt-20 xl:mt-30  flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-30 w-full max-w-full">
        {featuresInfo.map((feature, index) => (
          <div key={index} className="">
            {feature.direction === "right" ? (
              <div className="flex flex-col gap-5 lg:gap-0 xl:gap-10 max-w-full justify-center items-center md:flex-row">
                
                {/* TEXT */}
                <div className="flex max-w-full xl:max-w-md  xl:ml-52 flex-col gap-2 font-extralight justify-center w-full text-left">
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-semibold md:mb-3 ${funnelDisplay.className}`}>
                    {feature.title}
                  </h2>
                  <p className={`text-sm xl:pr-5 text-[#161616] sm:text-lg  lg:text-xl font-extralight leading-snug ${instrumentSans.className}`}>
                    {feature.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="xl:w-full flex items-center  bg-transparent justify-start xl:justify-center">
                  {index === 0 ? (
                    <div className="w-full lg:w-[85%] h-auto">
                      <ImageDemo />
                    </div>
                  ) : feature.title === "Governance by Design" ? (
                    <div className="relative w-full xl:w-[90%] aspect-700/420 xl:overflow-hidden">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-auto xl:h-full  object-contain rounded-2xl"
                      />
                      {feature.gif && (
                        <img
                          src={feature.gif}
                          alt=""
                          className="absolute top-1/2  scale-115 left-1/2 w-[21%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full xl:w-[85%] h-full object-contain"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div className="gap-5 w-full text-center flex flex-col md:flex-row justify-center  xl:items-center  xl:gap-5 lg:-translate-x-6">
                
                {/* IMAGE */}
                <div className="w-full xl:w-full xl:mr-10 flex flex-col items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-auto xl:w-[85%] xl:h-auto  object-contain"
                  />
                </div>
                
                {/* TEXT */}  
                <div className="flex flex-col max-w-xl xl:px-4 xl:pr-36 justify-center w-full text-left">
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 md:mb-4 ${funnelDisplay.className}`}>
                    {feature.title}
                  </h2>
                  <p className={` text-[#161616] text-sm sm:text-lg lg:text-xl max-w-md font-extralight  xl:leading-snug ${instrumentSans.className}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ------------------- ImageDemo Component -------------------
export function ImageDemo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative w-full aspect-600/380">
      <img
        src="/assets/build.png"
        alt="UI demo"
        className="w-full h-full object-contain"
      />

      {/* Hotspot Button */}
      <div
        id="auto-hotspot"
        onClick={() => setDropdownOpen((v) => !v)}
        className="absolute bottom-[24%] left-[43.1%] w-[10.15%] h-[5%] cursor-pointer"
      />

      {/* Dropdown */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -6 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -6 }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="
              absolute
              bottom-[34%]
              right-27
              -translate-x-1/2
              w-[45%]
              sm:w-[35%]
              lg:w-[28%]
              bg-white
              rounded-lg
              shadow-xl
              z-30
              overflow-hidden
              text-[#564B6C]
              text-[5px] sm:text-sm
            "
          >
            <MenuItem  label="Enterprise Core" icon={<Bot className="size-3 md:size-4"/>} />
            <MenuItem  label="StrategyPro" icon={<Cpu className="size-3 md:size-4"/>}/>
            <MenuItem  label="Growth Sphere" icon={<Layers className="size-3 md:size-4"/>}/>
            <MenuItem  label="BugFixCoder" icon={<Bug className="size-3 md:size-4"/>}/>
            <MenuItem  label="ThinkTank AI" icon={<Brain className="size-3 md:size-4"/>}/>

            <div className="border-t border-[#f5f5f5] mx-2 my-1" />

            <MenuItem  label="Create a new agent" icon={<SquarePlus className="size-3 md:size-4" />} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


function MenuItem({
   label,
  icon,
}: {
   label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1 xl:gap-2 px-3 py-2 hover:bg-[#F6F1FF] cursor-pointer">
      {icon}
      <span className="text-[13px]"> {label}</span>
    </div>
  );
}
