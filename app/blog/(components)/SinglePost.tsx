"use client";

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { PostMetadata } from "@/types/PostMetadata";
import Link from "next/link";


const SinglePost = (props: PostMetadata) => {
  const [isLoading, setIsLoading] = useState(true);


  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className="flex flex-col border border-custom_border md:w-[370px] rounded-lg px-5 py-5"
        key={props.title}
      >
        {isLoading ? (
          <Skeleton height={200} />
        ) : (
          <Image
            className="w-full flex-1"
            src={props.image}
            alt={props.title + " image"}
            width={500}
            height={300}
          />
        )}
        {isLoading ? (
          <Skeleton height={20} width={100} style={{ marginTop: "8px" }} />
        ) : (
          <div className=" text-sm font-medium mt-2 inline-block flex-1 cursor-pointer">
            <Badge
              variant="outline"
              className="text-custom_primary bg-custom_primary/5 ring-none hover:ring-[1px] hover:ring-custom_primary"
            >
              #{props.category}
            </Badge>
          </div>
        )}
        {isLoading ? (
          <Skeleton
            height={20}
            width={260}
            count={2}
            style={{ marginTop: "8px" }}
          />
        ) : (
          <Link href={`/blog/posts/${props.slug}`}>
            <p className="mt-3 text-custom_secondary font-semibold cursor-pointer hover:text-custom_primary/80 flex-1 ">
              {props.title}
            </p>
          </Link>
        )}
        <div className="flex gap-3 items-center mt-4">
          {isLoading ? (
            <Skeleton circle height={44} width={44} />
          ) : (
            <Image
              className="w-11 h-11 cursor-pointer"
              src={props.avator}
              alt={"post image"}
              width={100}
              height={100}
            />
          )}
          <div className="text-custom_textColor text-sm">
            {isLoading ? (
              <Skeleton
                height={16}
                width={100}
                style={{ marginBottom: "4px" }}
              />
            ) : (
              <p>Hanad Mohamed</p>
            )}
            {isLoading ? (
              <Skeleton height={16} width={80} />
            ) : (
              <p>{props.date}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
