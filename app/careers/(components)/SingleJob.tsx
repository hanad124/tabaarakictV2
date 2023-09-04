import { TJobs } from "@/types/jobsMetaData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ComponentProps {
  careers: TJobs[];
}

const SingleJob: React.FC<ComponentProps> = ({ careers }) => {
  return (
    <div className="flex items-center gap-5 mt-16">
      {careers.map((career) => (
        <div key={career.slug} className="border rounded-lg p-5">
          <Badge className="bg-[#F1EBFF] text-[#7534FF] rounded-full uppercase px-3 py-1 cursor-pointer">
            {career.category}
          </Badge>
          <p className="text-custom_secondary text-lg font-semibold mt-3">
            {career.name}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <p className="text-sm text-custom_textColor">
              Type:{" "}
              <span className="text-custom_secondary text-base ">
                {career.type}
              </span>
            </p>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <p className="text-sm text-custom_textColor">
              Location:{" "}
              <span className="text-custom_secondary text-base">
                {career.location}
              </span>
            </p>
          </div>
          {/* action buttons */}
          <div className="flex gap-5 mt-7">
            <Button className="group hover:bg-custom_primary text-background bg-custom_primary/10 text-custom_primary shadow-none flex items-center gap-2">
              <span className="group-hover:text-background">Apply Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M3.125 10H16.875"
                  stroke="#0B63E5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className=" group-hover:stroke-background"
                />
                <path
                  d="M11.25 4.375L16.875 10L11.25 15.625"
                  stroke="#0B63E5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="  group-hover:stroke-background"
                />
              </svg>
            </Button>
            <Button className="bg-transparent hover:decoration-solid hover:bg-transparent  text-custom_primary shadow-none">
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleJob;
