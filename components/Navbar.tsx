"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button, buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";
import Logo from "@/components/Logo";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#work",
    label: "WorkExp",
  },
  {
    href: "#products",
    label: "Projects",
  },
  {
    href: "#socials",
    label: "Socials",
  },
  {
    href: "#education",
    label: "Education",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <div className="container h-16 px-4 w-screen flex items-center">
          {/* Logo section - left */}
          <div className="w-1/4 font-bold">
            <Link href="/" className="ml-2 font-bold text-xl flex">
              <Logo />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden ml-auto">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <Button
                onClick={() => setIsOpen(true)}
                variant="ghost"
                className="px-2"
              >
                <span className="sr-only">Open Menu</span>
                <Menu className="flex md:hidden h-5 w-5" />
              </Button>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-start">
                    Hazari Tejash
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col justify-center items-start space-y-3 mt-6">
                  <ul className="flex flex-col space-y-3">
                    {routeList.map(({ href, label }: RouteProps) => (
                      <li key={label}>
                        <Link
                          key={label}
                          href={href}
                          onClick={() => setIsOpen(false)}
                          className={buttonVariants({
                            variant: "ghost",
                          })}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation - center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-2">
              {routeList.map((route: RouteProps, i) => (
                <li key={i}>
                  <Link
                    href={route.href}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme toggle - right */}
          <div className="hidden md:flex w-1/4 justify-end">
            <ModeToggle />
          </div>
        </div>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
