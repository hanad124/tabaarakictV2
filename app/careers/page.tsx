import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

const Careers = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Careers" />
    </div>
  );
};

export default Careers;
