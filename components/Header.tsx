"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import logo from "@/public/assets/header-logo.png";
import { menuItems } from "@/data/generalData";

function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  const handleSheetClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`fixed top-0 left-0  z-20 py-2" w-full backdrop-blur-3xl border-b-2 border-custom_border bg-background ${
          isVisible ? "bg-background/90" : "bg-background"
        } "
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-4  }`}>
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image
                  className="h-10 w-10"
                  src={logo}
                  alt="logo image"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => {
                  return (
                    <React.Fragment key={item.path}>
                      <Link
                        href={item.path}
                        className={` px-3 py-2 text-md font-medium  ${
                          pathname === item.path
                            ? "text-custom_primary"
                            : " text-custom_secondary hover:text-custom_primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <Button
              size={"default"}
              className="hidden md:block text-white bg-[#0B63E5] px-4 py-2 rounded-md hover:bg-[#0b62e5db]"
            >
              Contact us
            </Button>

            <div className="absolute top-5 right-8">
              <Sheet>
                <SheetTrigger onClick={handleSheetClose}>
                  {" "}
                  <span className=" -mr-2 md:hidden bg-[#0B63E5] inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#0b62e5db] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>
                      <Image
                        className="h-10 w-10 flex-shrink-0 text-center -mt-3"
                        src={logo}
                        alt="logo image"
                        width={30}
                        height={30}
                      />
                    </SheetTitle>
                    <SheetDescription>
                      <span className=" flex flex-col gap-1 justify-start text-left  mt-7">
                        <Link
                          href="/"
                          className=" text-custom_secondary hover:text-custom_primary px-3 py-3 rounded-md text-sm font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          href="/services"
                          className=" text-custom_secondary hover:text-custom_primary px-3 py-3 rounded-md text-sm font-medium"
                        >
                          Services
                        </Link>

                        <a
                          href="#"
                          className=" text-custom_secondary hover:text-custom_primary px-3 py-3 rounded-md text-sm font-medium"
                        >
                          Portfolio
                        </a>

                        <a
                          href="#"
                          className=" text-custom_secondary hover:text-custom_primary px-3 py-3 rounded-md text-sm font-medium"
                        >
                          Blog
                        </a>

                        <a
                          href="#"
                          className=" text-[#323F7C] hover:text-blue-500 px-3 py-3 rounded-md text-sm font-medium"
                        >
                          Careers
                        </a>

                        <a
                          href="#"
                          className=" text-[#323F7C] hover:text-blue-500 px-3 py-3 rounded-md text-sm font-medium"
                        >
                          About
                        </a>
                        <Button variant={"default"} className="mt-5">
                          Contact us
                        </Button>
                      </span>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
