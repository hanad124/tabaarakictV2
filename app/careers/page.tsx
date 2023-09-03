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
        {/* carees select menu  */}
        <div className="flex items-center gap-5 justify-between mt-10">
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full py-5">
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="mogadishu">Mogadishu</SelectItem>
                  <SelectItem value="jowhar">Jowhar</SelectItem>
                  <SelectItem value="afgoi">Afgoi</SelectItem>
                  <SelectItem value="pumpkin">Bidao</SelectItem>
                  <SelectItem value="sunflower">Kismaayo</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Select>
              <SelectTrigger className="w-full py-5">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="customer-care">Customer Care</SelectItem>
                  <SelectItem value="marketting">Marketting</SelectItem>
                  <SelectItem value="isp">ISP</SelectItem>
                  <SelectItem value="regional">Regional</SelectItem>
                  <SelectItem value="information-communication-technology(ict)">
                    Information Communication Technology(ICT)
                  </SelectItem>
                  <SelectItem value="sesame">Finance & Accounting</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
