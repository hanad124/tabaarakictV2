import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Careers = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Careers" />
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="text-3xl font-bold text-custom_secondary mb-4">
            <span className="text-custom_primary">Tabaarak ICT</span> Empowering
            Careers in the Digital Age
          </h1>
          <p className="text-custom_textColor text-lg my-3 leading-relaxed lg:w-2/4">
            Join us in creating solutions that make a real impact. Whether
            you're a seasoned professional or{" "}
            <span className="text-primary">a fresh graduate</span>.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectLabel>Seeds</SelectLabel>
                <SelectItem value="pumpkin">Pumpkin</SelectItem>
                <SelectItem value="sunflower">Sunflower</SelectItem>
                <SelectItem value="sesame">Sesame</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Careers;
