import Link from "next/link";
import React from "react";
import { AvatarIcon } from "@radix-ui/react-icons";
import { BiCalendarEvent } from "react-icons/bi";
import { BiTag } from "react-icons/bi";

type BreadCrumbProps = {
  author: string;
  title: string;
  date: string;
  category: string;
};

const PostsBreadCrumb = ({
  author,
  title,
  date,
  category,
}: BreadCrumbProps) => {
  return (
    <nav className="breadcrumb bg-cover bg-center h-[17rem] overflow-hidden mt-16">
      <div className="container mx-auto px-4 py-8 h-full  ">
        <div className="flex justify-center h-full items-center flex-col">
          <p className="text-2xl md:text-5xl leading-10 md:leading-[4rem] text-background font-bold mb-4 text-center md:w-4/6">
            {title}
          </p>
          <div className="flex flex-wrap justify-center items-center md:flex-row gap-x-6 gap-y-3 mt-2 text-background">
            <div className="flex gap-2 items-center">
              <AvatarIcon className="w-4 h-4 " />
              <p className=" text-sm font-medium">{author}</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiCalendarEvent className="w-4 h-4 " />
              <p className=" text-sm font-medium">{date}</p>
            </div>
            <div className="flex items-center gap-2">
              <BiTag className="w-4 h-4 " />
              <p className=" text-sm font-medium">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PostsBreadCrumb;
