"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

export function GithubContributions() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 pt-2 pb-4">
      <h2 className="py-2 text-3xl font-bold text-center text-black dark:text-white">
        Coding Contributions
      </h2>
      <motion.div
        className="w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 p-6 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 hover:scale-[1.02] transition-transform duration-300">
          
          {/* Codolio Heatmap Image */}
          <div className="relative w-full max-w-3xl h-[150px] sm:h-[200px] mb-4">
            <Image
              src="/images/codolio.png"
              alt="Codolio Contributions"
              fill
              className="object-contain rounded-md dark:brightness-90 dark:contrast-125"
            />
          </div>

          <Link
            href="https://codolio.com/profile/Tejash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 bg-[#EC1380] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <FaCode size={20} />
            View Full Codolio Profile
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
