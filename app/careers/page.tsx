import BreadCrumb from "@/components/BreadCrumb";
import GetLatestJobs from "./(components)/getLatestJobs";

// add meta data about the page here
export const metadata = {
  title: "Careers - Tabaarak ICT Solutions",
  description:
    "Tabaarak ICT Solutions is a privately owned organization that was established in 2011 in horn of Africa, The Company provides advanced Technology to its customers. Since its establishment, the company has achieved a leading role in the ICT Industry in east Africa, having the potential clients.",
};

const Careers = () => {
  const breadcrumbItems = [{ label: "Home", link: "/" }];

  return (
    <div className="bg-background min-h-screen">
      <BreadCrumb items={breadcrumbItems} title="Careers" />
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          <h1 className="text-3xl font-bold text-custom_secondary mb-4">
            <span className="text-custom_primary">Tabaarak ICT</span> Empowering
            Careers in the Digital Age
          </h1>
          <p className="text-custom_textColor text-lg my-3 leading-relaxed lg:w-2/4">
            Join us in creating solutions that make a real impact. Whether
            you're a seasoned professional or{" "}
            <span className="text-primary">a fresh graduate</span>.
          </p>
        </div>
        {/* careers jobs */}
        <GetLatestJobs />
      </div>
    </div>
  );
};

export default Careers;
