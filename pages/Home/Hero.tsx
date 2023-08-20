"use client";

import { BiSearch } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Parallax,
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

const Hero = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
        modules={[Parallax, Autoplay, EffectFade, Navigation, Pagination]}
      >
        {/* first slide */}
        <SwiperSlide>
          <div className="bg-hero-image-1 bg-cover bg-center h-[53rem]">
            <div className="container mx-auto px-4 py-8 h-screen flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mt-28 md:mt-0">
                <div className="md:w-4/6">
                  <h1
                    className="text-4xl md:text-6xl text-white font-bold mb-4 text-center"
                    style={{ lineHeight: "138.5%" }}
                  >
                    Empower Your Business with Innovative ICT Solutions
                  </h1>
                </div>
                <p className="text-white text-lg mb-8 lg:w-[681px] leading-[30px] text-center font-light">
                  At Tabaarak ICT Solutions, we are dedicated to transforming
                  businesses with our advanced ICT solutions. Our focus is on
                  delivering state-of-the-art technologies that ignite growth,
                  optimize efficiency, and elevate customer experiences to
                  unprecedented levels.
                </p>
                <Button className="btn-primary px-14" size={"lg"}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2nd slide */}
        <SwiperSlide>
          <div className="bg-hero-image-2 bg-cover bg-center h-[53rem]">
            <div className="container mx-auto px-4 py-8 h-screen flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mt-28 md:mt-0">
                <div className="md:w-4/6">
                  <h1
                    className="text-4xl md:text-6xl text-white font-bold mb-4 text-center"
                    style={{ lineHeight: "138.5%" }}
                  >
                    Empower Your Business with Innovative ICT Solutions
                  </h1>
                </div>
                <p className="text-white text-lg mb-8 lg:w-[681px] leading-[30px] text-center font-light">
                  At Tabaarak ICT Solutions, we are dedicated to transforming
                  businesses with our advanced ICT solutions.
                </p>
                <Button className="btn-primary px-14" size={"lg"}>
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/*Domain Search section  */}
      <div className="domain-search-section -mt-[2rem] relative z-10">
        <div className="flex justify-between px-4 border-2 mx-auto md:w-4/6 lg:w-3/6 focus-within:ring-[3px] focus-within:ring-[#0b62e571] rounded-full w-5/6  border-custom_primary bg-white py-2">
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
