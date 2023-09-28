"use client";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Button } from "@/components/ui/button";
import { tabs } from "@/data/portfolio";
import { projects } from "@/data/portfolio";
import Image from "next/image";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Render the Projects component
  return (
    <>
      <div className="bg-custom_border/10">
        <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-custom_primary font-bold text-lg">
            OUR WORK
          </p>
          <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
            Our Recent Projects
          </h2>
          <p className="text-custom_textColor my-3 leading-relaxed text-lg text-center mx-3 md:mx-36 lg:mx-96">
            Welcome to our portfolio, where we showcase some of our best
            projects and works we have done. ✅
          </p>
          <div className="mt-16 flex gap-5 items-center justify-center flex-wrap">
            {/* Render tabs */}
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-custom_secondary font-semibold ${
                  activeTab === tab ? "bg-custom_primary text-white" : ""
                } rounded-md px-6 py-2 cursor-pointer`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-y-0 gap-x-16 md:flex-row md:flex-wrap mt-16 md:mt-20">
            {/* Render projects */}
            {projects.map((project) => {
              return (
                <React.Fragment key={project.id}>
                  {activeTab === "All" || activeTab === project.category ? (
                    <div
                      className="w-[350px] mx-h-[23rem] rounded-md"
                      key={project.id}
                    >
                      <Image
                        src={project.image}
                        height={300}
                        width={400}
                        alt={project.title}
                        className="h-64 rounded-lg border"
                      />
                      <div className="flex flex-col gap-3 text-center bg-background shadow-lg justify-center items-center rounded-lg border border-custom_border py-7 w-5/6 mx-auto relative -top-24">
                        <p className="text-custom_primary font-semibold">
                          {project.category}
                        </p>
                        <p className="text-custom_secondary text-2xl font-medium">
                          {project.title}
                        </p>
                        <Button
                          className="w-1/2 border-custom_border text-custom_textColor py-5 hover:bg-custom_primary hover:text-background mt-2"
                          variant={"outline"}
                          size={"default"}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <></>
                    // not implemented yet
                    // <div className="w-[3250px] mx-h-[23rem] rounded-md">
                    //   <Skeleton height={200} width={300} />
                    //   <div className="flex flex-col gap-3 text-center bg-background shadow-lg justify-center items-center rounded-lg border border-custom_border py-7 w-5/6 mx-auto relative -top-24">
                    //     <Skeleton height={20} width={100} />
                    //     <Skeleton height={40} width={100} />
                    //     <Skeleton height={40} width={200} />
                    //   </div>
                    // </div>
                    // <Skeleton height={300} width={300} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
