import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import IntroPost from "./(components)/IntroPost";
import LatestPosts from "./(components)/LatestPosts";

const Blogs = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Blogs" />
      <IntroPost />
      <LatestPosts />
    </div>
  );
};

export default Blogs;
