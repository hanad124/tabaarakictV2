"use client";

import { TJobs } from "@/types/jobsMetaData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LocatoinsContext from "@/contexts/Locations";
import { useEffect, useState } from "react";

import Link from "next/link";

interface ComponentProps {
  careers: TJobs[];
}

const SingleJob: React.FC<ComponentProps> = ({ careers }) => {
  const [locations, setLocations] = useState("");
  const [departments, setDepartments] = useState("");
  const [filteredCareers, setFilteredCareers] = useState(careers);

  // filter by locations
  useEffect(() => {
    if (locations.length === 0 || locations === "All Locations") {
      setFilteredCareers(careers);
    } else {
      const filtered = careers.filter((career) =>
        locations.includes(career.location)
      );
      setFilteredCareers(filtered);
    }
  }, [locations]);

  // filter by departments
  useEffect(() => {
    if (departments.length === 0 || departments === "All Departments") {
      setFilteredCareers(careers);
    } else {
      const filtered = careers.filter((career) =>
        departments.includes(career.category)
      );
      setFilteredCareers(filtered);
    }
  }, [departments]);

  return (
    <>
      <div className="flex items-center gap-5 justify-between mt-10">
        <div className="w-full">
          <Select
            onValueChange={(e) => {
              setLocations(e);
            }}
          >
            <SelectTrigger className="w-full py-5">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All Locations">All Locations</SelectItem>
                <SelectItem value="Mogadishu">Mogadishu</SelectItem>
                <SelectItem value="Jowhar">Jowhar</SelectItem>
                <SelectItem value="Afgoi">Afgoi</SelectItem>
                <SelectItem value="Bidao">Bidao</SelectItem>
                <SelectItem value="Kismaayo">Kismaayo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Select
            onValueChange={(e) => {
              setDepartments(e);
            }}
          >
            <SelectTrigger className="w-full py-5">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All Departments">
                  All Departmentsre
                </SelectItem>
                <SelectItem value="customer-care">Customer Care</SelectItem>
                <SelectItem value="marketting">Marketting</SelectItem>
                <SelectItem value="isp">ISP</SelectItem>
                <SelectItem value="Networking">Networking</SelectItem>
                <SelectItem value="regional">Regional</SelectItem>
                <SelectItem value="information-communication-technology(ict)">
                  Information Communication Technology(ICT)
                </SelectItem>
                <SelectItem value="sesame">Finance & Accounting</SelectItem>
                <SelectItem value="Development">Development</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-5 mt-16">
        {filteredCareers.map((career) => (
          <div
            key={career.slug}
            className="border w-full md:w-[400px] rounded-lg p-5"
          >
            <Badge className="bg-[#F1EBFF] hover:bg-[#7534FF] hover:text-background text-[#7534FF] rounded-full uppercase px-3 py-1 cursor-pointer">
              {career.category}
            </Badge>
            <Link href={`/careers/${career.slug}`} passHref>
              <p className="text-custom_secondary text-lg font-semibold mt-3">
                {career.name}
              </p>
            </Link>
            <div className="flex items-center gap-2 mt-3">
              <p className="text-sm text-custom_textColor">
                Type:{" "}
                <span className="text-custom_secondary text-base ">
                  {career.type}
                </span>
              </p>
              <div className="w-1 h-1 rounded-full bg-slate-300"></div>
              <p className="text-sm text-custom_textColor">
                Location:{" "}
                <span className="text-custom_secondary text-base">
                  {career.location}
                </span>
              </p>
            </div>
            {/* action buttons */}
            <div className="flex gap-5 mt-7">
              <Button className="group hover:bg-custom_primary text-background bg-custom_primary/10 text-custom_primary shadow-none flex items-center gap-2 py-5">
                <span className="group-hover:text-background">Apply Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.125 10H16.875"
                    stroke="#0B63E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className=" group-hover:stroke-background"
                  />
                  <path
                    d="M11.25 4.375L16.875 10L11.25 15.625"
                    stroke="#0B63E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="  group-hover:stroke-background"
                  />
                </svg>
              </Button>
              <Link href={`/careers/${career.slug}`} passHref>
                <Button className="bg-transparent hover:underline  hover:bg-transparent  text-custom_primary shadow-none">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleJob;
