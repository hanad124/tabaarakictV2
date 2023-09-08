import Link from "next/link";
import React from "react";
import { AvatarIcon } from "@radix-ui/react-icons";
import { BiCalendarEvent } from "react-icons/bi";
import { BiTag } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

type BreadCrumbProps = {
  name: string;
  issueDate: string;
  expireDate: string;
  category: string;
  location: string;
};

const JobstsBreadCrumb = ({
  name,
  location,
  category,
  issueDate,
  expireDate,
}: BreadCrumbProps) => {
  const calculateDaysLeft = () => {
    const currentDate = new Date();
    const issueDateTime = new Date(issueDate);
    const expireDateTime = new Date(expireDate);

    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    // Calculate the difference in days
    const daysLeft = Math.ceil(
      (expireDateTime.getTime() - currentDate.getTime()) / millisecondsPerDay
    );

    return `${daysLeft} days left`;
  };

  return (
    <nav className="breadcrumb bg-cover bg-center h-[17rem] overflow-hidden mt-16">
      <div className="container mx-auto px-4 py-8 h-full ">
        <div className="flex justify-center h-full items-center flex-col">
          <p className="text-2xl md:text-5xl leading-10 md:leading-[4rem] text-background font-bold mb-4 text-center md:w-4/6">
            {name}
          </p>
          <div className="flex flex-wrap justify-center items-center md:flex-row gap-x-6 gap-y-3 mt-2 text-background">
            <div className="flex gap-2 items-center">
              <HiOutlineLocationMarker className="w-4 h-4 text-white" />
              <p className=" text-sm font-medium">{location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiTag className="w-4 h-4 " />
              <p className=" text-sm font-medium">{category}</p>
            </div>
            <div className="flex items-center gap-2">
              <BiCalendarEvent className="w-4 h-4 " />
              <p className=" text-sm font-medium">{calculateDaysLeft()}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default JobstsBreadCrumb;
