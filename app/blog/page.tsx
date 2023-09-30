import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Posts from "./(components)/Posts";
import ScrollIndicator from "@/components/ScrollIndicator";

const Blogs = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <>
      <ScrollIndicator />
      <div className="bg-background min-h-screen">
        <BreadCrumb items={breadcrumbItems} title="Blog" />
        <Posts />
      </div>
    </>
  );
};

export default Blogs;
