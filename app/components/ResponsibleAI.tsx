import React from 'react';
import Card from './Card';

const aiFeatures = [
  {
    icon: "/assets/file.gif",
    heading: "Zero-Retention Architecture",
    description: "We architect solutions where your proprietary data never trains public foundation models."
  },
  {
    icon: "/assets/storage-security.gif",
    heading: "Role-Based Access Control (RBAC)",
    description: "Granular permission settings ensure agents only access data appropriate for the user's clearance level."
  },
  {
    icon: "/assets/document-analysis.gif",
    heading: "Full Auditability",
    description: "Every agent decision, query, and output is logged for compliance and forensic review."
  },
  {
    icon: "/assets/data-safety.gif",
    heading: "Guardrails & Hallucination Control",
    description: "Proprietary verification layers check agent outputs against ground-truth data before presenting answers."
  }
];

function ResponsibleAI() {
  return (
    <div className=" bg-gradient-to-b from-[#FAFAFA] to-[#FFFFFF] flex flex-col">
      
      {/* Header */}
      <div className="px-4 sm:px-10 lg:px-20 py-10 sm:py-16 flex flex-col gap-4">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold leading-snug">
          Responsible AI. <span className="block"><span className="text-[#7E43FF]">Built-In,</span> Not Bolted On.</span>
        </h1>
        <p className="font-light text-base sm:text-lg lg:text-xl">
          Security, privacy, and governance are the foundation of the VGen platform. We ensure your AI adoption creates value, not liability.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-10 lg:px-20 pb-10">
        {aiFeatures.map((card) => (
          <Card
            key={card.heading}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ResponsibleAI;
