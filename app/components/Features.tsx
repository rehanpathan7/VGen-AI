import React ,{ReactNode} from "react";
import { useState, useRef, useEffect } from "react";
import {
  Cpu,
  Layers,
  Bug,
  Brain,
  Plus,
  Bot,
} from "lucide-react";

interface ChildrenProps {
  children: ReactNode;
}

const IconWrapper = ({ children }: ChildrenProps) => (
  <span className="w-[1.1em] h-[1.1em] flex items-center justify-center text-[#564B6C]">
    {children}
  </span>
);

const EnterpriseIcon = () => (
  <IconWrapper>
    <Bot className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const StrategyIcon = () => (
  <IconWrapper>
    <Cpu className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const GrowthIcon = () => (
  <IconWrapper>
    <Layers className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const BugIcon = () => (
  <IconWrapper>
    <Bug className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const ThinkTankIcon = () => (
  <IconWrapper>
    <Brain className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const PlusIcon = () => (
  <IconWrapper>
    <Plus className="w-full h-full" strokeWidth={1.5} />
  </IconWrapper>
);

const featuresInfo = [
  {
    title: "Build Intelligent Agents",
    description: (
      <>
        We leverage VGen’s{" "}
        <span className="font-semibold">Cognitive Core</span> to rapidly construct
        agents that understand context, reason through complex tasks, and adhere
        to strict enterprise guidelines.
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
        your{" "}
        <span className="font-semibold">Enterprise Fabric</span>—Salesforce,
        ServiceNow, Microsoft 365, and legacy ERPs—to automate end-to-end
        workflows.
      </>
    ),
    icon: "/assets/orchestrate.png",
    direction: "left",
  },
  {
    title: "Governance by Design",
    description: (
      <>
        Scale with confidence. VGen provides built-in guardrails, data sovereignty
        protocols, and audit trails, ensuring your AI remains secure and
        compliant from Day 1.
      </>
    ),
    icon: "/assets/background.png",
    gif: "/assets/VGen Logo.gif",
    direction: "right",
  },
];

const LeftText = ({ children }: ChildrenProps) => (
  <div className="pl-6.25 py-4.5">
    {children}
  </div>
);

const RightText = ({ children }: ChildrenProps) => (
  <div className="pr-4.5 py-4.5">
    {children}
  </div>
);

const LeftImage = ({ children }: ChildrenProps) => (
  <div className="pr-6.25 py-4.5 flex justify-center">
    {children}
  </div>
);

const RightImage = ({ children }: ChildrenProps) => (
  <div className="pl-6.25 py-4.5 flex justify-center">
    {children}
  </div>
);

export default function Features() {
  return (
    <section className="w-full flex flex-col items-center text-center pb-32 px">
      <div className="max-w-[100vw] mx-auto flex flex-col gap-4">
        <h1 className="text-3xl sm:text-7xl  font-semibold">
          The <span className="text-[#7E43FF]">Engine</span> Behind Your
          <span className="block">Digital Workforce</span>
        </h1>

        <p className="text-xl text-[#444]">
          VGen is the secure, enterprise-ready platform we use to build your
          advantage.
        </p>
      </div>
      <div className="max-w-[100vw] mx-auto flex flex-col gap-40">
        {featuresInfo.map((feature, index) => (
          /*spacing */
          <div
            key={index}
            className="first:mt-37.5
    [&:nth-child(1)]:translate-x-5
    [&:nth-child(3)]:translate-x-5
    [&:nth-child(2)]:-translate-x-10"
          >
            {feature.direction === "right" ? (
              <div className="flex items-center gap-[10%]">
                <div className="w-[38%] text-left">
                  <LeftText>
                    <h2 className="text-[25px] font-semibold mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-[18px] leading-[1.35]">
                      {feature.description}
                    </p>
                  </LeftText>
                </div>
                <div className="w-[62%]">
                  <RightImage>
                    {index === 0 ? (
                      <div className="w-full">
                        <ImageDemo />
                      </div>
                    ) : feature.title === "Governance by Design" ? (
                      <div className="relative w-[95%] aspect-700/420 overflow-hidden">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-full h-full object-contain rounded-2xl"
                        />
                        <img
                          src={feature.gif}
                          alt=""
                          className="absolute top-1/2 left-1/2 w-[21%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        />
                      </div>
                    ) : (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </RightImage>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-[10%]">
                <div className="w-[62%]">
                  <LeftImage>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-auto object-contain"
                    />
                  </LeftImage>
                </div>

                {/* TEXT */}
                <div className="w-[38%] text-left">
                  <RightText>
                    <h2 className="text-[25px] font-semibold mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-[18px] leading-[1.35]">
                      {feature.description}
                    </p>
                  </RightText>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}



export function ImageDemo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  function triggerPulse() {
    setPulse(true);
    
    if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current);
  }

    timeoutRef.current = setTimeout(() => {
      setPulse(false);
    }, 450);
  }

  useEffect(() => {
    function handleGlobalClick(e:any) {
      const autoBtn = document.querySelector("#auto-hotspot");

      if (autoBtn && autoBtn.contains(e.target)) return;
        const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (e.clientX > window.innerWidth - scrollbarWidth) return;
      triggerPulse();
    }

    document.addEventListener("mousedown", handleGlobalClick);
    return () => document.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-600/380"
    >

      <img
        src="/assets/build.png"
        alt="UI demo"
        className="w-full h-full object-contain"
      />

{/*Button*/}
      <div
        id="auto-hotspot"
        onMouseDown={(e) => {
          e.stopPropagation(); 
          setPulse(false);
          setDropdownOpen(v => !v);
        }}
        className={`
          absolute
          bottom-[24%]
          left-[43.1%]
          w-[10.15%]
          h-[6%]
          rounded-[2.5px]
          cursor-pointer
          transition-all duration-300
          ${
            dropdownOpen
              ? "bg-[#F6F1FF]/70"   
              : "bg-transparent"
          }
        `}
      />


      {pulse && (
        <div
          className="
            absolute
            bottom-[24%]
            left-[43.1%]
            w-[10.15%]
            h-[6%]
            rounded-none
            border border-[#0C8CE9]
            bg-[#0C8CE9]/20
            pointer-events-none
            transition-opacity duration-300
          "
        />
      )}
      {dropdownOpen && (
        <div className="absolute bottom-[32%] left-[43%] w-[28%] bg-white rounded-lg shadow-xl py-1 text-[11.5px] z-30">

          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-[#F6F1FF] cursor-pointer">
            <EnterpriseIcon />
            <span>Enterprise Core</span>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-[#F6F1FF] cursor-pointer">
            <StrategyIcon />
            <span>StrategyPro</span>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-[#F6F1FF] cursor-pointer">
            <GrowthIcon />
            <span>Growth Sphere</span>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-[#F6F1FF] cursor-pointer">
            <BugIcon />
            <span>BugFixCoder</span>
          </div>

          <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-[#F6F1FF] cursor-pointer">
            <ThinkTankIcon />
            <span>ThinkTank AI</span>
          </div>

          <div className="border-t my-1" />

          <div className="flex items-center gap-2 px-2 py-1.5  hover:bg-[#F6F1FF] cursor-pointer">
            <PlusIcon />
            <span>Create a new agent</span>
          </div>

        </div>
      )}
    </div>
  );
}