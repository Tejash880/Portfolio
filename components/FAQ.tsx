import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Heading from "@/components/ui/heading";
import { FAQList } from "@/configs/config";
import { FAQProps } from "@/types";
const FAQ = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <section id="faq" className="container py-8 sm:py-8 pb-12">
          <div className="w-full lg:w-[70%] mx-auto text-center"> {/* Modified for better responsiveness */}
            <Heading
              title="Why RTR is the best?"
              description="Here are some common questions you might have."
            />
            <Accordion
              type="single"
              collapsible
              className="w-full AccordionRoot px-4 sm:px-6 md:px-8"
            >
              {FAQList.map(({ question, answer, value }: FAQProps) => (
                <AccordionItem key={value} value={value}>
                  <AccordionTrigger className="text-left text-xl">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;