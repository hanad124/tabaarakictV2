import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Posts from "./(components)/Posts";
import ScrollIndicator from "@/components/ScrollIndicator";

// add meta data about the page here
export const metadata = {
  title: "Blog - Tabaarak ICT Solutions",
  description:
    "Tabaarak ICT Solutions is a privately owned organization that was established in 2011 in horn of Africa, The Company provides advanced Technology to its customers. Since its establishment, the company has achieved a leading role in the ICT Industry in east Africa, having the potential clients.",
};

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
