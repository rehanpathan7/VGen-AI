"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}  // both fade out at the end
      className="fixed inset-0 flex justify-center items-center bg-white z-50"
    >
      <div className="flex flex-col items-center gap-10">

        {/* logo first */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/assets/VGen Logo.gif"
            width={120}
            height={120}
            alt="VGen Logo"
          />
        </motion.div>

        {/* logo stays… now text enters */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg sm:text-xl font-medium text-black"
        >
          VGen AI – Intelligent Care, Redefined.
        </motion.p>

      </div>
    </motion.div>
  );
}
