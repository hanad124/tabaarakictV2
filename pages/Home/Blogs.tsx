import { Button } from "@/components/ui/button";
import { blogsData } from "@/data";
import { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import autherImage from "@/public/assets/avator.png";

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Latest blog & news
        </h2>
        <p className="text-custom_textColor my-3 leading-relaxed text-center mx-2 lg:mx-86 md:mx-44">
          Stay updated with the latest trends, insights and news in the world of ICT.
        </p>
        <div className="flex flex-col justify-center gap-10 md:flex-row md:flex-wrap mt-16">
          {blogsData.map((blog) => {
            return (
              <div
                className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
                key={blog.title}
              >
                {isLoading ? (
                  <Skeleton height={200} />
                ) : (
                  <Image
                    className="w-full flex-1"
                    src={blog.img}
                    alt={blog.title + " image"}
                    width={500}
                    height={300}
                  />
                )}
                {isLoading ? (
                  <Skeleton height={20} width={100} style={{ marginTop: "8px" }} />
                ) : (
                  <p className="text-custom_primary text-sm font-medium mt-2 inline-block flex-1 cursor-pointer">
                    #{blog.category}
                  </p>
                )}
                {isLoading ? (
                  <Skeleton height={30} width={260} style={{ marginTop: "8px" }} />
                ) : (
                  <p className="mt-3 text-custom_secondary font-medium cursor-pointer hover:text-custom_primary/70 flex-1 ">
                    {blog.title}
                  </p>
                )}
                <div className="flex gap-3 items-center mt-4">
                  {isLoading ? (
                    <Skeleton circle height={44} width={44} />
                  ) : (
                    <Image
                      className="w-11 h-11 cursor-pointer"
                      src={autherImage}
                      alt={"post image"}
                      width={100}
                      height={100}
                    />
                  )}
                  <div className="text-custom_textColor">
                    {isLoading ? (
                      <Skeleton height={16} width={100} style={{ marginBottom: "4px" }} />
                    ) : (
                      <p>Hanad Mohamed</p>
                    )}
                    {isLoading ? (
                      <Skeleton height={16} width={80} />
                    ) : (
                      <p>July 20, 2023</p>
                    )}
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