import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Cards from "./(components)/Cards";
import Products from "@/pages/Home/Products";
import Services from "@/pages/Home/Services";
import FunFact from "@/pages/Home/FunFact";
import Brands from "@/pages/Home/Brands";
import Banner from "@/pages/Home/Banner";

// add meta data about the page here
export const metadata = {
  title: "About Us - Tabaarak ICT Solutions",
  description:
    "Tabaarak ICT Solutions is a privately owned organization that was established in 2011 in horn of Africa, The Company provides advanced Technology to its customers. Since its establishment, the company has achieved a leading role in the ICT Industry in east Africa, having the potential clients.",
};

const About = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="About" />
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
            About Tabaarak ICT Solutions
          </h2>
          <p className="text-custom_textColor my-3 leading-relaxed mx-auto md:mx-60  text-lg mt-10">
            <span className="font-bold">Tabaarak ICT Solutions</span> is a
            privately owned organization that was established in 2011 in the
            Horn of Africa. The company specializes in advanced technology and
            provides a wide range of products and services to its customers.
            Since its establishment, Tabaarak ICT Solutions has achieved a
            leading role in the ICT industry in East Africa and has built a
            strong reputation for delivering high-quality solutions.
          </p>
          {/* Misson & Vission */}
          <Cards />
          {/* products & services */}
        </div>
      </div>
      <Services />
      <FunFact />
      <Banner />
    </div>
  );
};

export default About;
