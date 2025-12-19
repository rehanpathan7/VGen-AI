"use client";

import { useEffect, useState } from "react";
import Intro from "./components/Intro";

import Navbar from "./components/Navbar";
import HeroSection2 from "./components/HeroSection2";
import ExpertStrategy from "./components/ExpertStrategy";
import Features from "./components/Features";
import ResponsibleAI from "./components/ResponsibleAI";
import Impact from "./components/Impact";
import VGenFramework from "./components/VGenFramework";
import SessionSchedule from "./components/SessionSchedule";
import Footer from "./components/Footer";
// …other imports

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && <Intro />}

      {!showIntro && (
        <div>
          <div className="bg-linear-to-b from-[#F1EBFF] to-[#FFFFFF]">
            <Navbar />
            <HeroSection2 />
          </div>
          <ExpertStrategy />
          <Features />
          <ResponsibleAI />
          <Impact />
          <VGenFramework />
          <SessionSchedule  />
          <Footer />
        </div>
      )}
    </>
  );
}
