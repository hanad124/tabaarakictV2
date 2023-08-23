import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Projects from "./(components)/Projects";

const Portfolio = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Portfolio" />
      <Projects />
    </div>
  );
};

export default Portfolio;
