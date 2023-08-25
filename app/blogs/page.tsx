import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import IntroPost from "./(components)/IntroPosts";
import LatestPosts from "./(components)/LatestPosts";
import Posts from "./(components)/Posts";

const Blogs = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Blogs" />
      <Posts />
    </div>
  );
};

export default Blogs;
