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
    <section className="w-full py-12 flex flex-col items-center">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Codolio Activity
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          My coding activity and problem-solving progress on Codolio.
        </p>
      </div>
      <motion.div
        className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-500 p-2 md:p-6 border border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center gap-6 group">
          <div className="relative w-full max-w-[950px] h-[300px] sm:h-[350px] overflow-hidden rounded-xl bg-background border border-border shadow-inner">
            <div className="absolute top-[-480px] sm:top-[-580px] md:top-[-630px] left-[50%] translate-x-[-50%] w-[1000px] h-[1200px] pointer-events-none group-hover:scale-[1.02] transition-transform duration-700">
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
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <FaCode size={20} />
            View Full Codolio Stats
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

