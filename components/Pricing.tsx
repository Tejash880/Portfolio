import Link from "next/link";
import { pricingSectionFeatures } from "@/configs/config";
const Pricing = () => {
  return (
    <div className="p-2" id="pricing">
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div className="flex-1 px-6 py-8 lg:p-12 bg-white dark:bg-black border border-white/10">
            <h3 className="text-2xl font-extrabold text-black dark:text-white sm:text-3xl">
              Lifetime access
            </h3>
            <p className="mt-6 text-base text-black dark:text-gray-300 sm:text-lg">
              Take your Landing Page to the next level with IndieLaunch.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <div className="flex-1 border-t-2 border-black dark:border-gray-700"></div>
              </div>
              <ul
                role="list"
                className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
              >
                {pricingSectionFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start lg:col-span-1">
                    <p className="ml-3 text-black dark:text-gray-300">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 bg-black">
            <p className="text-lg leading-6 font-medium text-white">
              Pay once, own it forever
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
              <span>$29.99</span>
              <span className="ml-3 text-xl font-medium text-black-50">
                USD
              </span>
            </div>
            <div className="mt-6 flex justify-center">
              <div className="rounded-md shadow">
                <Link
                  href="https://weblancerdev.lemonsqueezy.com/buy/71feba44-b3fc-46b9-9ad2-d40da7e15f0a"
                  target="_blank"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#EC1380] hover:bg-indigo-600"
                >
                  Buy now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
