import React from "react";
import Accordian from "./Accordian";

const AccordianInfo = [
  {
    id: 1,
    heading: {
      heading1: { part1: "Use Case A:", part2: "Customer Operations (CSOD)" },
      heading2: "The End-to-End Delivery Agent",
    },
    challenge:
      "Disconnected systems between Sales, Onboarding, and Support caused delays in customer go-live, impacting revenue recognition.",
    solution: {
      title: "We deployed a VGen Customer Orchestration Agent that unifies the entire lifecycle.",
      table: [
        { title: "Onboarding", info: "Automatically provisions accounts and sends welcome kits upon contract signature." },
        { title: "Delivery", info: "Tracks project milestones in real-time, nudging internal teams to prevent bottlenecks." },
        { title: "Support", info: "Proactively identifies delivery risks and alerts the success team before client complaints." },
      ],
    },
    result: "Reduced onboarding time by 35% and significantly improved Net Dollar Retention (NDR).",
  },
  {
    id: 2,
    heading: { heading1: { part1: "Use Case B:", part2: "Human Resources" }, heading2: "The 24/7 HR Concierge" },
    challenge:
      "HR Business Partners were buried in repetitive tickets regarding policy, payroll, benefits, preventing strategic talent work.",
    solution: {
      title:
        "We architected an internal HR intelligence Agent connected to the company's SharePoint and payroll systems.",
      table: [
        { title: "Instant Answers", info: '"What is the policy for remote work in California?" answered instantly in citations.' },
        { title: "Actionable", info: "Download my last 3 paystubs executed securely via API integration." },
      ],
    },
    result: "Deflected 70% of Tier-1 HR tickets, allowing the team to focus on culture and retention.",
  },
  {
    id: 3,
    heading: { heading1: { part1: "Use Case C:", part2: "Talent Acquisition" }, heading2: "The Intelligent Recruiter" },
    challenge:
      "Recruiters spent hours manually screening resumes against vague job descriptions, missing quality candidates in the noise.",
    solution: {
      title: "A VGen Recruitment Agent that acts as a screener co-pilot",
      table: [
        { title: "Smart Screening", info: "Ranks incoming resumes based on semantic matching to the job description, not just keywords." },
        { title: "Engagement", info: "Automatically schedules initial screens with top candidates via Outlook integration." },
      ],
    },
    result: "Reduced Time-to-Hire by 40% and increased interview-to-offer ratios.",
  },
];

function Impact() {
  return (
    <div className="flex flex-col px-4 sm:px-10 lg:px-30">
      {/* Header */}
      <div className="flex flex-col items-center text-center mt-10 sm:mt-16 gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
          Proven Impact <span className="block">Across the Enterprise</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl">
          See how we architect specific agents to solve critical business bottlenecks.
        </p>
      </div>

      {/* Accordion */}
      <div className="mt-10">
        <Accordian items={AccordianInfo} />
      </div>
    </div>
  );
}

export default Impact;
