"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

export function GithubContributions() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[160px] rounded-xl bg-muted animate-pulse" />
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 pt-2 pb-4">
      <h2 className="py-2 text-3xl font-bold text-center">
        Codolio Activity
      </h2>
      <motion.div
        className="w-full max-w-6xl mx-auto overflow-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 p-2 md:p-6 border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-6 hover:scale-[1.01] transition-transform duration-300">
          
          <div className="relative w-full max-w-[950px] h-[300px] sm:h-[350px] overflow-hidden rounded-xl bg-background border border-border shadow-inner">
            <div className="absolute top-[-480px] sm:top-[-580px] md:top-[-630px] left-[50%] translate-x-[-50%] w-[1000px] h-[1200px] pointer-events-none">
              <iframe
                src="https://codolio.com/profile/Tejash"
                width="100%"
                height="100%"
                className="border-0 bg-transparent"
                title="Codolio Profile Calendar"
                scrolling="no"
              />
            </div>
          </div>

          <Link
            href="https://codolio.com/profile/Tejash"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 bg-[#EC1380] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <FaCode size={20} />
            View Full Codolio Stats
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

