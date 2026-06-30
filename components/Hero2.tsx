"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1];

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto relative py-8">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 top-0 h-[650px] md:h-[550px] z-0"
        )}
      />
      <motion.div
        className="relative z-10 rounded-3xl p-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.div
          className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="relative w-full h-full">
            {/* Add your image here */}
            <Image
              src="/images/avatar.png"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-balance font-bold text-3xl lg:text-5xl mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          Hazari Tejash
        </motion.h1>

        <motion.p
          className="text-balance text-foreground/80 text-lg mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease }}
        >
          AI and Machine Learning enthusiast with expertise in Python, Java, and Full Stack Development. Passionate about building intelligent systems and scalable applications, with a strong foundation in Data Structures and Algorithms.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease }}
        >
          {["AI & ML Enthusiast", "Full Stack Developer", "Problem Solver"].map(
            (skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
