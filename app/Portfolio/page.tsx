import React from "react";
import BreadCrumb from "@/components/BreadCrumb";

const Portfolio = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-gray-100 min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Portfolio" />

      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h1 className="text-3xl font-bold mb-4">Portfolio</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
