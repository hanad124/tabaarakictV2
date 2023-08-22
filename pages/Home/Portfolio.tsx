"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { portfolioData } from "@/data/generalData";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 max-w-7xl md:flex-row md:gap-0 md:justify-between  mx-auto px-4 sm:px-6 lg:px-4">
      {/* title */}
      <div className="flex flex-col">
        <div className="">
          <h2 className="text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0 ">
            Our portfolio
          </h2>
          <p className="text-custom_textColor my-6  leading-relaxed text-center mx-3 lg:mx-80 md:mx-36 ">
            Cras imperdiet est eget nulla fringilla, sit amet volutpatsem
            tristique. Pellentesque quis augue ac mauris posuere vehicula.
          </p>
        </div>
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            size={"lg"}
            className=" group text-custom_primary w-full hover:bg-custom_primary  md:w-80 mx-5hover:bg-custom_primary hover:text-background flex items-center gap-3"
          >
            View all portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#0B63E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-background"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="#0B63E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-background"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col justify-start md:justify-start gap-14 md:flex-row md:flex-wrap  mt-24 ">
        {/* signle project */}
        {portfolioData.map((project) => {
          return (
            <div
              className="flex flex-col border md:w-[370px] border-custom_border rounded-b-lg pb-4"
              key={project.title}
            >
              {isLoading ? (
                <Skeleton height={300} />
              ) : (
                <Image
                  className="w-full  flex-1"
                  src={project.img}
                  alt="Shaafi image"
                  width={500}
                  height={300}
                />
              )}

              {isLoading ? (
                <Skeleton
                  height={20}
                  width={100}
                  style={{ marginTop: "22px", marginLeft: "13px" }}
                />
              ) : (
                <p className="text-custom_secondary font-bold text-2xl mt-7 flex-1 ml-4">
                  {project.title}
                </p>
              )}

              {isLoading ? (
                <>
                  <Skeleton
                    height={15}
                    width={260}
                    style={{ marginTop: "8px", marginLeft: "13px" }}
                  />
                  <Skeleton
                    height={15}
                    width={240}
                    style={{ marginTop: "8px", marginLeft: "13px" }}
                  />
                </>
              ) : (
                <p className="mt-2  ml-4 text-custom_textColor flex-1">
                  {project.desc}
                </p>
              )}

              <div className="flex justify-start">
                {isLoading ? (
                  <Skeleton
                    height={28}
                    width={130}
                    style={{ marginTop: "13px", marginLeft: "13px" }}
                  />
                ) : (
                  <Button
                    className=" mt-4 flex gap-3 text-custom_primary font-semibold"
                    variant={"link"}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="#0B63E5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#0B63E5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
