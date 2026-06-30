import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { reviews } from "@/configs/config";
import Image from "next/image";
import Heading from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
const Testimonials = () => {
  return (
    <section className="py-5 md:py-8 lg:py-12" id="testimonials">
      <MaxWidthWrapper className="px-4 sm:px-6 lg:px-8">
        {/* Reduced padding here */}
        <Heading
          title="Testimonials"
          description="A short description explaining the testimonials"
        />
        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reduced gap */}
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 rounded-lg border-border/60">
              {/* Reduced padding */}
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  draggable={false}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <div className="flex space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-3.5 2 1-4.5L3 8.5l4.5-.5L10 3l2.5 4.5L17 8.5l-4.5 3L13.5 17z"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Twitter Handle */}
                <Link href={review.twitterhandle || "/"} target="_blank" className="text-sm text-white ml-auto">
                  <FaXTwitter size={24}/>
                </Link>
              </div>
              <p className="text-muted-foreground">{review.review}</p>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default Testimonials;
