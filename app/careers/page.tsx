import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

import SelectMenus from "./(components)/SelectMenus";
import GetLatestJobs from "./(components)/getLatestJobs";

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
        <SelectMenus />
        {/* careers jobs */}
        <GetLatestJobs />
      </div>
    </div>
  );
};

export default Careers;
