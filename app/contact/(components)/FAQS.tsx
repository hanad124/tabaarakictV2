import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div className="max-auto w-full px-4 md:px-16 mt-24">
      <h2 className=" text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
        Frequently Asked Questions (FAQ)
      </h2>
      <p className="text-custom_textColor my-3 leading-relaxed text-center mx-3 lg:mx-70 md:mx-36">
        Discover How{" "}
        <span className="text-custom_primary">Tabaarak ICT Solutions</span>{" "}
        Transforms Your Organization 🚀
      </p>
      <Accordion
        type="single"
        collapsible
        className="mt-10 border rounded-lg p-2 md:px-10 pb-5"
      >
        <AccordionItem value="item-1" className=" ">
          <AccordionTrigger className="text-start text-custom_secondary md:text-lg font-medium">
            Which industries does Tabaarak ICT Solutions serve?
          </AccordionTrigger>
          <AccordionContent className="text-md leading-relaxed text-custom_textColor">
            Tabaarak ICT Solutions serves a diverse range of industries,
            leveraging its expertise in advanced technology solutions.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" ">
          <AccordionTrigger className="text-start text-custom_secondary md:text-lg font-medium">
            How can I request a quote for your products or services?
          </AccordionTrigger>
          <AccordionContent className="text-md leading-relaxed text-custom_textColor">
            Learn how to easily request a customized quote for our products and
            services. Our dedicated sales team is ready to assist you through
            email or phone, ensuring a quote that aligns with your
            organization's requirements and budget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="">
          <AccordionTrigger className="text-start text-custom_secondary md:text-lg font-medium">
            Do you provide technical support for your products?
          </AccordionTrigger>
          <AccordionContent className="text-md leading-relaxed text-custom_textColor">
            Yes, Tabaarak ICT Solutions is dedicated to providing excellent
            technical support for its products and services. Their team of
            experts is available to assist customers with any technical issues,
            troubleshooting, or inquiries they may have.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="">
          <AccordionTrigger className="text-start text-custom_secondary md:text-lg font-medium">
            Can Tabaarak ICT Solutions integrate with existing systems?
          </AccordionTrigger>
          <AccordionContent className="text-md leading-relaxed text-custom_textColor">
            Yes, Tabaarak ICT Solutions has expertise in integrating their
            advanced technology solutions with existing systems. Whether you
            have legacy systems or other software in place, Tabaarak ICT
            Solutions can work with you to seamlessly integrate their solutions
            into your existing infrastructure.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="">
          <AccordionTrigger className="text-start text-custom_secondary md:text-lg font-medium">
            How long does it typically take to implement your solutions?
          </AccordionTrigger>
          <AccordionContent className="text-md leading-relaxed text-custom_textColor">
            The implementation timeline for Tabaarak ICT Solutions' advanced
            technology solutions can vary depending on factors such as the
            complexity of the project, the specific requirements of the client,
            and the scope of the solution being implemented.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQS;
