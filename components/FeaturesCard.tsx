import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { FeatureSection } from "@/types";

const FeaturesCard = ({
  reverse = false,
  data,
}: {
  reverse?: boolean;
  data: FeatureSection;
}) => {
  return (
    <section className="py-5 md:py-8 lg:py-12">
      <MaxWidthWrapper>
        <div
          className={cn(
            "flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20",
            reverse && "md:flex-row-reverse"
          )}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={data.src}
              alt="feature illustration"
              width={1000}
              height={440}
              className="rounded-lg"
              priority
              draggable="false"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="font-bold text-2xl text-foreground md:text-4xl lg:text-[40px]">
              {data.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              {data.description}
            </p>
            <dl className="mt-6 space-y-4 leading-7">
              {data.list.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="relative pl-8" key={index}>
                    <dt className="font-semibold">
                      <Icon className="absolute left-0 top-1 h-5 w-5 stroke-[#EC1380]" />
                      <span>{item.title}</span>
                    </dt>
                    <dd className="text-sm text-muted-foreground">
                      {item.description}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FeaturesCard;
