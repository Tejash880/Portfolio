import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FAQList } from "@/configs/config";
import { FAQProps } from "@/types";

const FAQ = () => {
  return (
    <section id="faq" className="w-full py-12">
      <div className="text-center space-y-4 mb-10">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Here are some common questions you might have.
        </p>
      </div>
      <MaxWidthWrapper className="max-w-3xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full bg-card rounded-2xl border border-border px-6 py-2 shadow-sm"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem key={value} value={value} className="border-border">
              <AccordionTrigger className="text-left text-lg md:text-xl font-medium hover:no-underline hover:text-primary transition-colors">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </section>
  );
};

export default FAQ;