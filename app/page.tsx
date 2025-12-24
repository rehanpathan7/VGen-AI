"use client";

import { useEffect, useState } from "react";
import Intro from "./components/Intro";

import Navbar from "./components/Navbar";
import ExpertStrategy from "./components/ExpertStrategy";
import Features from "./components/Features";
import ResponsibleAI from "./components/ResponsibleAI";
import Impact from "./components/Impact";
import VGenFramework from "./components/VGenFramework";
import SessionSchedule from "./components/SessionSchedule";
import Footer from "./components/Footer";
import {funnelDisplay, inter} from "./fonts/font"
import HeroSection from "./components/HeroSection";


// app/layout.tsx or app/page.tsx

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
        <div className={`text-[#161616 ${inter.className}]`} >
          <div className="bg-linear-to-b from-[#F1EBFF] to-[#FFFFFF] ">
            <Navbar />   {/* Perfectly Done, Pixel Perfect */}
            <HeroSection /> {/* Perfectly Done, Pixel Perfect */}
          </div>
          <ExpertStrategy /> {/* Perfectly Done, Pixel Perfect */}  
          <Features />        
          <ResponsibleAI /> {/* Perfectly Done, Pixel Perfect */} 
          <Impact />        {/* Perfectly Done, Pixel Perfect */} 
          <VGenFramework />   {/* Perfectly Done, Pixel Perfect */}
          <SessionSchedule  /> {/* Perfectly Done, Pixel Perfect */} 
          <Footer />  {/* Perfectly Done, Pixel Perfect */} 
        </div>
      )}
    </>
  );
}
