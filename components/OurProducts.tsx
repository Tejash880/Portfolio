import { builtWithIndieLaunch } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const OurProducts = () => {
  return (
    <section id="products" className="mt-8 pt-8 px-4 lg:px-20">
      <div className="text-center space-y-4 my-4">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-4xl">
          Products Built By <span className="text-[#EC1380]">Hazari Tejash</span>
        </h2>
        <p className="text-muted-foreground">
          Checkout these awesome Products built by Hazari Tejash
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {builtWithIndieLaunch.map((product, index) => (
          <section
            key={index}
            className="card bg-base-200 rounded-lg border transition-colors duration-200 ease-in-out overflow-hidden 
      border-black dark:border-white w-full max-w-sm mx-auto"
          >
            {product?.image && (
              <figure className="flex justify-center items-center w-full">
                <Image
                  src={product.image}
                  alt={"product image"}
                  width={400} // Uniform width
                  height={225} // Uniform height
                  className="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
                />
              </figure>
            )}
            <div className="card-body">
              {/* TITLE */}
              <h2 className="text-center mb-1 text-xl md:text-2xl font-bold">
                {product.title}
              </h2>

              <div className="text-center text-base-content/80 space-y-4">
                {/* DESCRIPTION */}
                <p>{product.description}</p>

                {/* BUTTON */}
                <div className="mt-4 pb-4">
                  <Link
                    target="_blank"
                    href={product.url}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 ease-in-out bg-[#EC1380] text-white hover:bg-[#d11272]"
                    title={`Explore ${product.title}`}
                  >
                    <ExternalLink size={16} />
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
