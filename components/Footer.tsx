"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { footerConfig } from "@/configs/config";

const Footer = () => {
  const { sections } = footerConfig;

  return (
    <footer className="bg-card border-t border-border mt-12" id="footer">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex gap-2 justify-center md:justify-start items-center text-primary"
            >
              <Logo />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Copyright &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left">
            {sections.map((section) => (
              <div key={section.title} className="lg:w-1/3 md:w-1/2 w-full px-4">
                <div className="font-semibold text-foreground tracking-widest text-sm md:text-left mb-4 uppercase">
                  {section.title}
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-3 mb-10 text-sm text-muted-foreground">
                  {section.links.map((link) => (
                    <Link
                      key={`${section.title}-${link.text}`}
                      className="hover:text-primary transition-colors hover:underline"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
