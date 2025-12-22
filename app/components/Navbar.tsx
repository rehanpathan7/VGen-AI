"use client";

import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { funnelDisplay } from "../fonts/font";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`w-full py-6 px-4 sm:px-10 xl:px-32 ${funnelDisplay.className}`}>
      <div className="flex justify-between mt-6 mb-0 items-center text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 leading-tight">
          <img src="/assets/VGen Logo.gif" className="w-9 h-9 -mt-0.5 scale-120 object-contain" />
          <h1 className={`text-2xl sm:text-xl md:text-2xl lg:text-3xl bg-linear-to-b from-[#BFA2FF] to-[#6536CC] bg-clip-text text-transparent font-semibold`}>
            VGen AI
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex sm:gap-5  md:gap-8 lg:gap-x-9  items-center text-[14px]">
          <li className="cursor-pointer hover:text-[#7E43FF]">Overview</li>
          <li className="cursor-pointer hover:text-[#7E43FF]">Features</li>
          <li className="cursor-pointer hover:text-[#7E43FF]">How it Works</li>
          <li className="cursor-pointer hover:text-[#7E43FF]">Pricing</li>
          <li className="flex items-center gap-5">
            <div className="flex items-center justify-center gap-5">
              <button className="border px-4 py-1.5 border-[#32126D] font-medium hover:bg-linear-to-b hover:from-[#7E43FF] hover:to-[#4C2899] hover:text-white text-[#32126D] rounded-lg">
                Login
              </button>
              <div className="bg-white rounded-full p-1 shadow-xl">
                <img src="/assets/moon.png" className="w-4 h-4 cursor-pointer" />
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-100 flex justify-end"
          onClick={() => setOpen(false)} // clicking background closes menu
        >
          <ul
            className="bg-white w-3/4 h-full p-6 flex flex-col gap-6 shadow-xl transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close button */}
            <button className="self-end mb-2" onClick={() => setOpen(false)}>
              <X />
            </button>

            <li className="hover:text-[#7E43FF]">Overview</li>
            <li className="hover:text-[#7E43FF]">Features</li>
            <li className="hover:text-[#7E43FF]">How it Works</li>
            <li className="hover:text-[#7E43FF]">Pricing</li>
            <div className="flex flex-col gap-5">
              <li className="cursor-pointer ">
                <button className="border px-4 py-1 hover:bg-linear-to-b hover:from-[#7E43FF] hover:to-[#4C2899] hover:text-white rounded-lg">
                  Login
                </button>
              </li>

              <li className="rounded-full w-fit bg-white shadow-xl p-1 z-50">
                <img
                  src="/assets/moon.png"
                  className="w-5 h-5 cursor-pointe"
                />
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
