"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export function GithubContributions() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 pt-2 pb-4">
      <h2 className="py-2 text-3xl font-bold text-center text-black dark:text-white">
        Coding Contributions
      </h2>
      <motion.div
        className="w-full max-w-3xl mx-auto overflow-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 p-6 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 p-8 hover:scale-[1.02] transition-transform duration-300">
          <FaCode size={48} className="text-[#EC1380]" />
          <h3 className="text-xl font-semibold text-center text-black dark:text-white">
            Track my progress on Codolio
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
            I actively solve problems and track my coding journey across various platforms.
          </p>
          <Link
            href="https://codolio.com/profile/Tejash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 bg-[#EC1380] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            View Codolio Profile
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
