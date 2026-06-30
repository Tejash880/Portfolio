"use client";
import { siteConfigs } from "@/configs/config";
import JoinWaitList from "@/components/ui/waitlist-button";

function Hero() {
  return (
    <div className="pt-20 md:pt-44 lg:pt-44 pb-20 text-center flex flex-col items-center">
      <div className="flex flex-col items-center space-y-4 lg:items-start">
        <h1 className="mx-auto max-w-3xl text-balance font-bold text-5xl lg:text-5xl">
          {siteConfigs.tagline}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-balance text-foreground/60 text-lg">
          {siteConfigs.description}
        </p>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row">
        <JoinWaitList
          text="Join the waitlist"
          toolTipText="Join the waitlist"
        />
      </div>

    </div>
  );
}
export default Hero;
