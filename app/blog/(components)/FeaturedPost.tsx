import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";

const FeaturedPost = () => {
  return (
    <div>
      <div className="featured-post bg-cover bg-center h-full md:h-[39rem] rounded-xl flex flex-col pt-16 md:pt-0 justify-center md:justify-end px-4 md:px-6 lg:px-8 flex-1 md:max-w-[50rem] shrink">
        <div className="mb-10">
          <Badge
            variant="default"
            className="text-background bg-custom_primary cursor-pointer py-2 px-4 rounded-lg "
          >
            Technology
          </Badge>
          <p className="text-background text-xl md:text-4xl font-semibold md:w-5/6 leading-relaxed mt-5 cursor-pointer hover:opacity-75">
            The Impact of Technology on the  Workplace
          </p>
          <div className="flex items-center mt-5 text-background text-sm md:text-base">
            <div className="flex gap-2 cursor-pointer hover:opacity-80 hover:scale-105 transition">
              <AvatarIcon className="w-6 h-6" />
              <p>Hanad Mohamed</p>
            </div>
            <div className="w-1 h-1 rounded-full bg-custom_border mx-3"></div>
            <p>August 20, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
