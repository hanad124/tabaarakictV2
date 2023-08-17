"use client";

import { useState, useEffect } from "react";
import { testtimonialsData } from "@/data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import Image from "next/image";
import QuoteImg from "@/public/assets/quote-img.png";

const Testtimonials = () => {
  const [client, setClient] = useState(testtimonialsData[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating image loading delay
    const timer = setTimeout(() => {
      setClient(testtimonialsData[activeIndex]);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleClick = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="bg-custom_border/10">
        <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-custom_primary font-bold text-lg">
            Testimonials
          </p>
          <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
            What our Clients Say
          </h2>
          <p className="text-custom_textColor my-3 leading-relaxed text-center mx-3 lg:mx-80 md:mx-36">
            See what our satisfied customers have to say about Tabaarak ICT
            solutions
          </p>

          <div className="md:mt-16 mt-32 flex flex-col gap-0 md:gap-20 items-center lg:flex-row ">
            <div className="lg:w-2/5">
              <div className="flex justify-center lg:justify-start w-full">
                <Image
                  src={QuoteImg}
                  width={200}
                  height={100}
                  alt="quote icon"
                  className="w-24 md:w-36 -mb-16 md:-mb-20 md:-ml-10"
                />
              </div>
              <p className="text-custom_tertiary leading-[34px] md:leading-[46px]   text-lg md:text-2xl  ">
                {client.text}
              </p>
              <p className="text-custom_textColor font-sm mt-6">
                <span className="text-custom_primary font-medium text-lg">
                  {client.name}
                </span>{" "}
                {client.title}{" "}
              </p>
            </div>

            <div className="flex gap-5 justify-center md:justify-start md:flex-row md:flex-nowrap flex-wrap  mt-10">
              {testtimonialsData.map((client, index) => (
                <div
                  className={
                    index === activeIndex
                      ? "active ring-[2px] ring-custom_primary rounded-md scale-105 transition-transform ease-in-out delay-150  duration-300 "
                      : "opacity-50"
                  }
                  key={index}
                  onClick={() => {
                    handleClick(index);
                    setClient(client);
                  }}
                >
                  {!client.img ? (
                    <Skeleton height={120} width={180} />
                  ) : (
                    <Image
                      src={client.img}
                      alt={client.name}
                      width={500}
                      height={300}
                      className="w-32 h-32 md:w-36 md:h-36 max-h-36 rounded-md cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testtimonials;
