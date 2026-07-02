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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 rounded-3xl p-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        <motion.div
          className="relative w-48 h-48 mx-auto mb-10 rounded-full p-[3px] overflow-visible"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-primary/50 to-transparent animate-spin-slow opacity-60 blur-md"></div>
          <motion.div 
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-card z-10 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/images/avatar.png"
              alt="Profile picture"
              fill
              className="object-cover object-center scale-[1.25] pt-4"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-balance font-extrabold text-4xl lg:text-7xl mb-6 text-center tracking-tight text-foreground drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          Hazari <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">Tejash</span>
        </motion.h1>

        <motion.p
          className="text-balance text-muted-foreground text-lg md:text-xl mb-10 text-center max-w-2xl leading-relaxed"
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
                className="px-6 py-2.5 bg-card/60 backdrop-blur-sm border border-primary/20 shadow-sm text-foreground rounded-full text-sm font-semibold hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                  {skill}
                </span>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
