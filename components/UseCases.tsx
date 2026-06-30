import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useCases } from "@/configs/config";
import Heading from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

const UseCases = () => {
  return (
    <section className="py-5 md:py-8 lg:py-12" id="problems">
      <MaxWidthWrapper>
        <Heading
          title="Use cases"
          description="Our template is designed to help the following."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
          {useCases.map((useCase) => (
            <Card
              key={useCase.title}
              className="p-6 rounded-lg border-border/60 bg-black text-white dark:text-black dark:bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="dark:text-black text-muted-foreground">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default UseCases;
