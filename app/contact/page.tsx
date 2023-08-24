import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

const Contact = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Contact" />
    </div>
  );
};

export default Contact;
