import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

const About = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="About" />
    </div>
  );
};

export default About;
