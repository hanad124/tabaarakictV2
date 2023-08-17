"use client";

import { Button } from "@/components/ui/button";
import { blogsData } from "@/data";
import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import autherImage from "@/public/assets/avator.png";

const Blogs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Latest blog & news
        </h2>
        <p className="text-custom_textColor my-3 leading-relaxed text-center mx-2 lg:mx-86 md:mx-44">
          Stay updated with the latest trends, insights and news in the world of
          ICT.
        </p>{" "}
        <div className="flex flex-col justify-center  gap-10 md:flex-row md:flex-wrap mt-16">
          {blogsData.map((blog) => {
            return (
              <div
                className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
                key={blog.title}
              >
                <Image
                  className="w-full  flex-1"
                  src={blog.img}
                  alt={blog.title + " image"}
                  width={500}
                  height={300}
                />
                <p className="text-custom_primary text-sm font-medium mt-2 inline-block flex-1 cursor-pointer">
                  #{blog.category}
                </p>
                <p className="mt-3 text-custom_secondary font-medium cursor-pointer hover:text-custom_primary/70 flex-1 ">
                  {blog.title}
                </p>

                <div className="flex gap-3 items-center mt-4">
                  <Image
                    className={`w-11 h-11 cursor-pointer `}
                    src={autherImage}
                    alt={"post image"}
                    width={100}
                    height={100}
                    onLoad={handleImageLoad}
                  />

                  <div className="text-custom_textColor">
                    <p>Hanad Mohamed</p>
                    <p>July 20, 2023</p>
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

export default Blogs;
