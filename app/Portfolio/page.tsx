import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Projects from "./(components)/Projects";
import Brands from "./(components)/Brands";
import Banner from "./(components)/Banner";
import ScrollIndicator from "@/components/ScrollIndicator";

const Portfolio = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <>
      <ScrollIndicator />

      <div className="bg-background min-h-screen">
        <BreadCrumb items={breadcrumbItems} title="Portfolio" />
        <Projects />
        <Brands />
        <Banner />
      </div>
    </>
  );
};

export default Portfolio;
