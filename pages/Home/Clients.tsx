"use client";

import { useState, useEffect } from "react";
import { clients } from "@/data";

import React from "react";

const Clients = () => {
  const [client, setClient] = useState(clients[0]);
  const [activeIndex, setActiveIndex] = useState(0);

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

          <div className="mt-16 flex flex-col justify-between md:flex-row">
            <div className="lg:w-2/5">
              <div className="flex justify-center lg:justify-start w-full">
                <img
                  src="https://drive.google.com/uc?export=download&id=1LV5pkMGtPPMOFdmB3V0BN2GTObnPWi-o"
                  alt="quote icon"
                  className="w-24"
                />
              </div>
              <p className="text-custom_tertiary  text-lg lg:text-2xl  -mt-16" style={{lineClamp: "1.5rem"}}>
                {client.text}
              </p>
              <p className="text-custom_textColor font-sm mt-4">
                <span className="text-custom_primary font-medium text-sm">
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
                      ? "active ring ring-custom_primary rounded-md"
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
                    className="w-40 h-36 max-h-36 rounded-md cursor-pointer"
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
