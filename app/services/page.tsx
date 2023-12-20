import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import ServicesCards from "./(components)/ServicesCards";
import HostingPackages from "./(components)/HostingPackages";
import Process from "./(components)/Process";
import ScrollIndicator from "@/components/ScrollIndicator";

// add meta data about the page here
export const metadata = {
  title: "Services - Tabaarak ICT Solutions",
  description:
    "Tabaarak ICT Solutions is a privately owned organization that was established in 2011 in horn of Africa, The Company provides advanced Technology to its customers. Since its establishment, the company has achieved a leading role in the ICT Industry in east Africa, having the potential clients.",
};

const Services = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <>
      <ScrollIndicator />
      <div className="bg-background min-h-screen">
        <BreadCrumb items={breadcrumbItems} title="Services" />
        <ServicesCards />
        <HostingPackages />
        <Process />
      </div>
    </>
  );
};

export default Services;
