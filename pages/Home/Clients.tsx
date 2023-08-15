"use client";

import { useState, useEffect } from "react";
import { clients } from "@/data";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const Clients = () => {
  const [client, setClient] = useState(clients[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating image loading delay
    const timer = setTimeout(() => {
      setClient(clients[activeIndex]);
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

          <div className="mt-16 flex flex-col justify-between items-center lg:flex-row">
            <div className="lg:w-2/5">
              <div className="flex justify-center lg:justify-start w-full">
                {isLoading ? (
                  <Skeleton circle={true} height={80} width={80} />
                ) : (
                  <img
                    src="https://drive.google.com/uc?export=download&id=1LV5pkMGtPPMOFdmB3V0BN2GTObnPWi-o"
                    alt="quote icon"
                    className="w-24 md:w-36"
                  />
                )}
              </div>
              <p className="text-custom_tertiary leading-[34px] md:leading-[46px]   text-lg md:text-2xl  -mt-16">
                {client.text}
              </p>
              <p className="text-custom_textColor font-sm mt-4">
                <span className="text-custom_primary font-medium text-lg">
                  {client.name}
                </span>{" "}
                {client.title}{" "}
              </p>
            </div>

            <div className="flex gap-5 justify-center md:justify-start md:flex-row md:flex-nowrap flex-wrap  mt-10">
              {clients.map((client, index) => (
                <div
                  className={
                    index === activeIndex
                      ? "active ring-[2px] ring-custom_primary rounded-md scale-110"
                      : "opacity-50"
                  }
                  key={client.name}
                  onClick={() => {
                    handleClick(index);
                    setClient(client);
                  }}
                >
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-40 h-40 max-h-36 rounded-md cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
