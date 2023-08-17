"use client";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";
import { brands } from "@/data";
import React from "react";

const Brands = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="bg-custom_primary/5">
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl  text-center lg:mx-60 md:mx-24  mb-0">
          Our Collaborations with Leading Brands
        </h2>

        <div className="flex flex-wrap gap-16 mt-14 justify-center">
          {brands.map((brand, index) => {
            return (
              <React.Fragment key={index}>
                <Image
                  className="cursor-pointer grayscale hover:grayscale-0 hover:scale-105 transition-transform w-24 h-16 md:h-20 md:w-28"
                  src={brand}
                  alt={"brand image"}
                  width={100}
                  height={50}
                  onLoad={handleImageLoad}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;
