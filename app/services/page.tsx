import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import ServicesCards from "./(components)/ServicesCards";

const Services = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Services" />
      <ServicesCards />
    </div>
  );
};

export default Services;
