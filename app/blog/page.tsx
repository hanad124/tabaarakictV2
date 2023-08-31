import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Posts from "./(components)/Posts";

const Blogs = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Blog" />
      <Posts />
    </div>
  );
};

export default Blogs;
