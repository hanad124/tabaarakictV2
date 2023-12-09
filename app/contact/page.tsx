"use client";

import React from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Form from "./(components)/Form";
import FAQ from "./(components)/FAQS";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { toast } = useToast();

  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Contact" />
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Contact Us
        </h2>
        <p className="text-custom_textColor my-3 leading-relaxed font-light mx-3 lg:mx-80 md:mx-36">
          Thank you for your interest in{" "}
          <span className="font-medium">Tabaarak ICT Solutions</span>. We
          appreciate your feedback and inquiries. Please don't hesitate to
          contact us using the information provided below. We look forward to
          hearing from you.
        </p>
        {/* contact Form */}
        <Form />
        <FAQ />
      </div>
    </div>
  );
};

export default Contact;
