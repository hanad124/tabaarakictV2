"use client";

import { CalendarIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";

type SummeryProps = {
  name: string;
  issueDate: string;
  expireDate: string;
  category: string;
  location: string;
  type: string;
  positions: string;
};

const JobSummery = ({
  name,
  location,
  category,
  positions,
  issueDate,
  expireDate,
  type,
}: SummeryProps) => {
  const [postedDate, setPostedDate] = useState("");
  const [expiration, setExpiration] = useState("");

  console.log("type", type);

  useEffect(() => {
    const currentDate = new Date();
    const expirationDate = new Date(expireDate);
    const diffInDays = Math.ceil(
      (expirationDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)
    );

    if (diffInDays === 0) {
      setExpiration("today");
    } else if (diffInDays === 1) {
      setExpiration("tomorrow");
    } else {
      setExpiration(`${expireDate}`);
    }
  }, [expireDate]);

  useEffect(() => {
    const currentDate = new Date();
    const postDate = new Date(issueDate);
    const diffInDays = Math.floor(
      (currentDate.getTime() - postDate.getTime()) / (1000 * 3600 * 24)
    );

    if (diffInDays === 0) {
      setPostedDate(" Today");
    } else if (diffInDays === 1) {
      setPostedDate(" Yesterday");
    } else {
      setPostedDate(`${issueDate}`);
    }
  }, [issueDate]);

  return (
    <div
      className="p-5 my-10 rounded"
      style={{ backgroundColor: "rgba(11, 99, 229, 0.03)" }}
    >
      <p className="text-custom_secondary text-2xl font-semibold">
        Job Summary
      </p>
      {/* date */}
      <div className="flex flex-col gap-y-5 mt-5">
        <div className="flex items-center gap-4">
          <CalendarIcon className="w-8 h-8 text-custom_primary" />
          <div className="flex flex-col gap-2 text-sm text-custom_secondary">
            <p className="font-semibold">posted Date</p>
            <p>{postedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CalendarIcon className="w-8 h-8 text-custom_primary" />
          <div className="flex flex-col gap-2 text-sm text-custom_secondary">
            <p className="font-semibold"> Expire Date</p>
            <p>{expiration}</p>
          </div>
        </div>
      </div>
      {/* category */}
      <div className="flex items-center gap-4 mt-5">
        <HiMiniSquare3Stack3D className="w-8 h-8 text-custom_primary" />
        <div className="flex flex-col gap-2 text-sm text-custom_secondary">
          <p className="font-semibold">Category</p>
          <p>{category}</p>
        </div>
      </div>
      {/* positions */}
      <div className="flex items-center gap-4 mt-5">
        <BiUserCircle className="w-8 h-8 text-custom_primary" />
        <div className="flex flex-col gap-2 text-sm text-custom_secondary">
          <p className="font-semibold">Positions</p>
          <p>{positions}</p>
        </div>
      </div>
      {/* location */}
      <div className="flex items-center gap-4 mt-5">
        <HiLocationMarker className="w-8 h-8 text-custom_primary" />
        <div className="flex flex-col gap-2 text-sm text-custom_secondary">
          <p className="font-semibold">Location</p>
          <p>{location}</p>
        </div>
      </div>
      {/* type */}
      <div className="flex items-center gap-4 mt-5">
        <HiOutlineBriefcase className="w-8 h-8 text-custom_primary" />
        <div className="flex flex-col gap-2 text-sm text-custom_secondary">
          <p className="font-semibold">Type</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default JobSummery;
