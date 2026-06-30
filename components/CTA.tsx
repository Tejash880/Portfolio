"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Heading from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { RocketLaunch } from "phosphor-react";

const CTA = () => {
  return (
    <section className="py-5 md:py-8 lg:py-12">
      <MaxWidthWrapper>
        <div className="text-center space-y-4 border border-white/10 py-20 px-8 rounded-2xl bg-card">
          <Heading
            title="IndieLaunch"
            description="Validate Your Idea Today with IndieLaunch: Launch and Validate Effortlessly."
          />
          <Link
            href="https://weblancerdev.lemonsqueezy.com/buy/71feba44-b3fc-46b9-9ad2-d40da7e15f0a"
            target="_blank"
            className={cn(
              buttonVariants({
                size: "lg",
                className: "button px-12 py-8 font-bold text-xl",
              })
            )}
          >
            Get it now{" "}
            <RocketLaunch
              size={40}
              weight="fill"
              className="text-white dark:text-black"
            />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CTA;
