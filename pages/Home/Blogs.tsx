"use client";

import { Button } from "@/components/ui/button";
import { blogsData } from "@/data";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        {/* <p className="inline bg-red-600">Hanad mohamed</p> */}
        <div className="flex flex-col justify-center  gap-10 md:flex-row md:flex-wrap mt-16">
          {blogsData.map((blog) => {
            return (
              <div
                className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
                key={blog.title}
              >
                {!imageLoaded && (
                  <Skeleton className="w-full flex-1" height={200} />
                )}

                <img
                  className={`w-full flex-1 ${imageLoaded ? "" : "hidden"}`}
                  src={blog.img}
                  alt="post image"
                  onLoad={handleImageLoad}
                />

                <p className="text-custom_primary text-sm font-medium mt-2 inline-block">
                  #{blog.category}
                </p>
                <p className="mt-3 text-custom_secondary font-medium flex-1 ">
                  {blog.title}
                </p>

                <div className="flex gap-3 items-center mt-4">
                  {!imageLoaded && (
                    <Skeleton circle={true} width={44} height={44} />
                  )}

                  <img
                    className={`w-11 h-11 ${imageLoaded ? "" : "hidden"}`}
                    src={blog.autherImg}
                    alt="post image"
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
