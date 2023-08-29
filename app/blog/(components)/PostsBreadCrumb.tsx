import Link from "next/link";
import React from "react";
import { AvatarIcon } from "@radix-ui/react-icons";

type BreadCrumbProps = {
  author: string;
  title: string;
  date: string;
  catogory: string;
};

const PostsBreadCrumb = ({
  author,
  title,
  date,
  catogory,
}: BreadCrumbProps) => {
  return (
    <nav className="breadcrumb bg-cover bg-center h-[17rem] overflow-hidden mt-16">
      <div className="container mx-auto px-4 py-8 h-full  ">
        <div className="flex justify-center h-full items-center flex-col">
          <p className="text-2xl md:text-5xl leading-10 text-background font-bold mb-4 text-center md:w-4/6">
            {title}
          </p>
          <div className="flex justify-center items-center gap-6 mt-6">
            <AvatarIcon className="w-5 h-5 text-background" />
            <p className="text-background text-lg">{author}</p>
            <p className="text-background text-lg">{date}</p>
            <p className="text-background text-lg">{catogory}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PostsBreadCrumb;
