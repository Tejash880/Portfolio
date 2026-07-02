import { projects } from "@/configs/config";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const OurProducts = () => {
  return (
    <section id="products" className="w-full">
      <div className="text-center space-y-4 mb-12">
        <h2 className="tracking-tight font-extrabold !leading-tight text-foreground text-3xl md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A selection of things I&apos;ve built, exploring new technologies and solving real-world problems.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((product, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between bg-card hover:bg-accent/40 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30"
          >
            {product?.image && (
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
              <p className="text-muted-foreground flex-grow mb-6 line-clamp-3">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <Link
                  target="_blank"
                  href={product.url}
                  className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
                  title={`Explore ${product.title}`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Link>
                {/* If you add github links to config later, this would be a nice secondary button */}
                <Link
                  target="_blank"
                  href={product.url}
                  className="inline-flex justify-center items-center p-2.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                  title={`Source code for ${product.title}`}
                >
                  <Github size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
