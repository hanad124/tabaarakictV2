"use client";

import { BiSearch } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/assets/hero-image.png";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <div className="flex flex-col justify-center gap-7">
          <h1 className="text-4xl md:text-5xl font-bold text-custom_secondary leading-snug md:leading-[4rem]">
            Empower Your Business with{" "}
            <span className="text-custom_primary">Innovative</span> ICT
            Solutions
          </h1>
          <p className="text-lg md:mr-16  font-light text-custom_textColor">
            Tabaarak ICT Solutions: We transform businesses with advanced ICT
            solutions, igniting growth and optimizing efficiency.
          </p>
          <div className="flex gap-6 items-center">
            {/* button without icon */}
            <Link href="/contact">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#323f7c] before:duration-500 before:ease-out hover:shadow-slate-600/50 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Get Started</span>
              </button>
            </Link>
            {/* button with icon */}
            <button className="group relative flex h-[50px] w-44 items-center justify-center overflow-hidden rounded-full bg-[#F4F4F4] py-2 text-[#323f7c] shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#323f7c] before:duration-500 before:ease-out hover:text-white hover:shadow-slate-600/50 hover:before:h-56 hover:before:w-56">
              <div className="relative z-10 flex w-full items-center justify-center gap-3">
                <span className="mr-11 text-center text-sm font-medium">
                  Explore More
                </span>
                <div className="group absolute right-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 59 59"
                    fill="none"
                  >
                    <rect
                      x="-0.00158691"
                      y="0.000244141"
                      width="59"
                      height="59"
                      rx="29.5"
                      fill="#323f7c"
                      className="group-hover:fill-white"
                    />
                    <path
                      d="M25.6156 39.0002C25.347 38.9996 25.0831 38.9122 24.8499 38.7464C24.3248 38.3769 23.9984 37.6595 23.9984 36.8807V21.1199C23.9984 20.3389 24.3248 19.6237 24.8499 19.2541C25.0886 19.0837 25.3598 18.9961 25.6352 19.0004C25.9105 19.0047 26.1799 19.1008 26.4151 19.2786L37.26 27.3416C37.486 27.5176 37.6724 27.7621 37.8015 28.052C37.9307 28.3419 37.9984 28.6679 37.9984 28.9992C37.9984 29.3306 37.9307 29.6565 37.8015 29.9464C37.6724 30.2363 37.486 30.4808 37.26 30.6568L26.4133 38.722C26.1726 38.9027 25.8969 38.9989 25.6156 39.0002Z"
                      fill="white"
                      className="group-hover:fill-[#323f7c]"
                    />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <Image
            src={heroImage}
            alt="hero image"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
