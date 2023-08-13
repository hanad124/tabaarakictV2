"use client";

import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState, useEffect } from "react";

const Hero = () => {
  const [announcement, setAnnouncement] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const announcementsText = [
    "We are Hiring 🕹️ - Apply now",
    "New workshop 🖥️ - Register now",
    "Check out 👁️ - new blog post",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * announcementsText.length);
    setAnnouncement(announcementsText[randomIndex]);

    // Simulating delay for loading skeleton
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="pt-20 md:pt-28 relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('https://drive.google.com/uc?export=download&id=1y_PRMsW7qQhS2rBuPShSV-MTGwmLGc8M')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://drive.google.com/uc?export=download&id=1y_PRMsW7qQhS2rBuPShSV-MTGwmLGc8M)]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          {/* <!-- Announcement Banner --> */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200"
              href="#"
            >
              {isLoading ? (
                <Skeleton height={20} width={200} />
              ) : (
                <div>{announcement}</div>
              )}
              <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div className="mt-12 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-custom_secondary text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
              Let's Build
              <span className=" text-custom_primary"> Together</span>
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At Tabaarak ICT Solutions, we are dedicated to transforming
              businesses with our advanced ICT solutions. Our focus is on
              delivering state-of-the-art technologies that ignite growth,
              optimize efficiency, and elevate customer experiences to
              unprecedented levels.
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <Button
              size={"lg"}
              className="inline-flex justify-center items-center gap-x-3 text-center bg-custom_primary border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800"
              // href="#"
            >
              Contact us now
              <svg
                className="w-3 h-3"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}

      {/*Domain Search section  */}
      <div className="domain-search-section mt-16">
        <div className="flex justify-between px-4 ring-2 mx-auto focus-within:ring-4 focus-within:ring-[#0b62e5b3] rounded-full w-5/6  ring-[#0b62e5] bg-white py-2">
          <div className="flex w-full items-center">
            <p className="border-r-2 border-[#DDD] text-[#323F7C] pr-2 hidden md:block">
              www.
            </p>
            <input
              type="text"
              className="w-full focus:outline-none pl-2"
              placeholder="find your perfect domain"
            />
          </div>
          <div className="flex bg-[#0b62e5] text-white items-center gap-2 rounded-full text-sm px-2 py-2 cursor-pointer">
            <BiSearch className="text-lg font-bold" />
            <p className="hidden">Search</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap px-4 justify-center mt-10">
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.so</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.com</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.net</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.org</span> $15/Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
