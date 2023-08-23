"use client";

// Importing necessary dependencies and data
import { hostingPackages } from "@/data/hostingPackages";
import { Button } from "@/components/ui/button";
import React from "react";

// HostingPackages component
const HostingPackages = () => {
  return (
    <div className="bg-custom_border/20">
      <div className="py-14 max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 mt-10">
        {/* Title */}
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Explore our Hosting Packages{" "}
        </h2>
        {/* Description */}
        <p className="text-custom_textColor my-3 leading-relaxed text-center mx-3 lg:mx-80 md:mx-36">
          we offer a range of hosting packages designed to meet the needs of
          businesses of all sizes 👌.
        </p>
        {/* Hosting packages */}

        <div className="flex flex-col justify-center gap-y-20 gap-x-6 md:flex-row md:flex-wrap mt-16 md:mt-24">
          {hostingPackages.map((packages, index) => {
            return (
              <div
                key={index}
                className={`bg-background relative md:w-[390px] rounded-lg border-t-4 ${
                  packages.type === "standard"
                    ? "border-[#F249C8]"
                    : packages.type === "premium"
                    ? "border-[#0B63E5]"
                    : packages.type === "business"
                    ? "border-[#E54545]"
                    : "border-background"
                } shadow-lg ${packages.isRecommended && "md:scale-105"}`}
              >
                {/* Recommended label */}
                {packages.isRecommended && (
                  <div className="flex justify-center">
                    <div className="absolute -top-8 rounded-t-lg px-5 py-1 bg-custom_primary text-background font-normal ">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                <div className="p-5 flex flex-col  border-b border-custom_border">
                  {/* Package type and price */}
                  <div className="flex justify-between items-center flex-1 ">
                    {/* Package type icon */}
                    <div
                      className={`${
                        packages.type === "standard"
                          ? "bg-[#FEEDFA]"
                          : packages.type === "premium"
                          ? "bg-[#F0F5FF]"
                          : packages.type === "business"
                          ? "bg-[#FCECEC]"
                          : "bg-red-600"
                      }  px-3 py-2 rounded-md`}
                    >
                      {/* SVG icons for different package types */}
                      {packages.type === "standard" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          {/* SVG code for the standard package */}
                          <path
                            opacity="0.2"
                            d="M5.1731 11.6589C5.05973 11.8512 4.99996 12.0704 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6356 19.7853 36.6909 20 36.6908L20.0016 36.6909L20.1483 20L5.17313 11.659L5.1731 11.6589Z"
                            fill="#F249C8"
                          />
                          <path
                            d="M35 27.7065V12.2936C35 12.0718 34.941 11.854 34.829 11.6625C34.717 11.4711 34.5561 11.3128 34.3628 11.2041L20.6128 3.46973C20.4257 3.36449 20.2147 3.3092 20 3.3092C19.7853 3.3092 19.5743 3.36449 19.3872 3.46973L5.63717 11.2041C5.44386 11.3128 5.28296 11.4711 5.17099 11.6625C5.05902 11.854 5 12.0718 5 12.2936V27.7065C5 27.9283 5.05902 28.1461 5.17099 28.3375C5.28296 28.529 5.44386 28.6872 5.63717 28.7959L19.3872 36.5303C19.5743 36.6355 19.7853 36.6908 20 36.6908C20.2147 36.6908 20.4257 36.6355 20.6128 36.5303L34.3628 28.7959C34.5561 28.6872 34.717 28.529 34.829 28.3375C34.941 28.1461 35 27.9283 35 27.7065Z"
                            stroke="#F249C8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M27.6597 23.8298V15.7048L12.5 7.34375"
                            stroke="#F249C8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M34.8276 11.6605L20.1483 20L5.1731 11.6589"
                            stroke="#F249C8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20.1481 20L20.0015 36.6908"
                            stroke="#F249C8"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : packages.type === "premium" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          {/* SVG code for the premium package */}
                          <path
                            opacity="0.2"
                            d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z"
                            fill="#0B63E5"
                          />
                          <path
                            d="M5 27.5L20 36.25L35 27.5"
                            stroke="#0B63E5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 20L20 28.75L35 20"
                            stroke="#0B63E5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M5 12.5L20 21.25L35 12.5L20 3.75L5 12.5Z"
                            stroke="#0B63E5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          {/* SVG code for the business package */}
                          <path
                            opacity="0.2"
                            d="M14.6967 28.8389C12.929 34.1422 5.85791 34.1422 5.85791 34.1422C5.85791 34.1422 5.85791 27.0711 11.1612 25.3033L14.6967 28.8389Z"
                            fill="#E64545"
                          />
                          <path
                            opacity="0.2"
                            d="M21.3569 27.4819L27.5888 21.2499V28.321L22.5354 33.3744L21.3569 27.4819Z"
                            fill="#E64545"
                            stroke="#E64545"
                            strokeWidth="2.5"
                          />
                          <path
                            opacity="0.2"
                            d="M11.6789 12.4111H18.75L12.518 18.643L6.62549 17.4645L11.6789 12.4111Z"
                            fill="#E64545"
                            stroke="#E64545"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M14.6967 28.8389C12.929 34.1422 5.85791 34.1422 5.85791 34.1422C5.85791 34.1422 5.85791 27.0711 11.1612 25.3033"
                            stroke="#E64545"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M30.6064 16.4645L19.9998 27.0711L12.9287 20L23.5353 9.39345C27.5516 5.37718 31.5679 5.41635 33.2807 5.67191C33.5444 5.71122 33.7885 5.83421 33.9771 6.02275C34.1656 6.21129 34.2886 6.45541 34.3279 6.71914C34.5835 8.43197 34.6226 12.4482 30.6064 16.4645Z"
                            stroke="#E64545"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M28.8388 18.2322V28.321C28.8388 28.4852 28.8065 28.6477 28.7437 28.7994C28.6809 28.951 28.5888 29.0888 28.4727 29.2049L23.4193 34.2583C23.2593 34.4183 23.0589 34.5318 22.8395 34.5869C22.62 34.6419 22.3897 34.6363 22.1732 34.5708C21.9567 34.5052 21.762 34.3821 21.6099 34.2146C21.4578 34.0471 21.3541 33.8414 21.3097 33.6196L20 27.071"
                            stroke="#E64545"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21.7677 11.1611H11.6789C11.5147 11.1611 11.3522 11.1935 11.2005 11.2563C11.0489 11.3191 10.9111 11.4112 10.795 11.5272L5.74161 16.5806C5.58162 16.7406 5.46806 16.941 5.41303 17.1605C5.358 17.3799 5.36356 17.6102 5.42912 17.8268C5.49469 18.0433 5.61779 18.238 5.78531 18.3901C5.95283 18.5421 6.15849 18.6459 6.38034 18.6903L12.9289 20"
                            stroke="#E64545"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    {/* Package price */}
                    <p className="text-[#F249C8] text-4xl font-extrabold ">
                      {packages.money}
                      <span className="text-custom_secondary text-lg font-normal">
                        /per Year
                      </span>
                    </p>
                  </div>
                  <div className=" flex-1">
                    {/* Package type */}
                    <p className="text-custom_secondary mt-7 text-2xl font-semibold">
                      {packages.type.charAt(0).toUpperCase() +
                        packages.type.slice(1)}
                    </p>
                    {/* Package description */}
                    <p className="text-custom_secondary mt-2">
                      {packages.description}
                    </p>
                  </div>
                  <div className="mt-5 ">
                    {/* "Get Started" button */}
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      className="group hover:bg-custom_primary hover:text-background flex items-center gap-3 text-custom_primary"
                    >
                      <p className="font-medium text-lg">Get Started</p>
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
                <div className="flex flex-col gap-y-5 p-5">
                  <div className="flex gap-4 flex-col">
                    {packages.features.map((feature, index) => {
                      return (
                        <React.Fragment key={index}>
                          <div className="flex gap-4">
                            <div className="bg-[#E7F5E8] w-7 h-7 rounded-full flex justify-center items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                              >
                                <path
                                  d="M11.8125 3.93774L5.6875 10.0625L2.625 7.00024"
                                  stroke="#0F9918"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <p className="text-custom_secondary text-md ">
                              {feature}
                            </p>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HostingPackages;
