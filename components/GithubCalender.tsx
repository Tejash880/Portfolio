"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function GithubContributions() {
  const { resolvedTheme } = useTheme();
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
      <h2 className="py-2 text-3xl font-bold text-center text-black dark:text-white">
        Github Contributions
      </h2>
      <motion.div
        className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center p-4 hover:scale-[1.02] transition-transform duration-300">
          <GitHubCalendar
            username="Tejash880"
            colorScheme={resolvedTheme as "light" | "dark"}
            fontSize={12}
            blockSize={12}
            blockMargin={4}
          />
        </div>
      </motion.div>
    </div>
  );
}
