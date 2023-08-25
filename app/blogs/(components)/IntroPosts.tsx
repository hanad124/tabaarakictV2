import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";

const IntroPosts = () => {
  return (
    <>
      <div className="flex-none">
        <div className="flex flex-col gap-y-5 md:w-[34rem] ">
          {/* intro post 1 */}
          <div className="intro-post-1 bg-cover bg-center h-full md:h-[19rem] rounded-xl flex flex-col pt-16 md:pt-0 justify-center md:justify-end px-4 md:px-6 lg:px-8">
            <div className="mb-10">
              <Badge
                variant="default"
                className="text-background bg-custom_primary cursor-pointer py-2 px-4 rounded-lg "
              >
                Full-stack Development
              </Badge>
              <p className="text-background text-xl md:text-2xl font-semibold md:w-5/6 leading-relaxed mt-5 cursor-pointer hover:opacity-75">
                Building Dynamic Websites: The Essentials of Web Development
              </p>
              <div className="flex items-center mt-5 text-background">
                <div className="flex gap-2 cursor-pointer hover:opacity-80 hover:scale-105 transition">
                  <AvatarIcon className="w-6 h-6" />
                  <p>Hanad Mohamed</p>
                </div>
                <div className="w-1 h-1 rounded-full bg-custom_border mx-3"></div>
                <p>August 20, 2022</p>
              </div>
            </div>
          </div>
          {/* intro post 2 */}
          <div className="intro-post-2 bg-cover bg-center h-full md:h-[19rem] rounded-xl flex flex-col pt-16 md:pt-0 justify-center md:justify-end px-4 md:px-6 lg:px-8 ">
            <div className="mb-10">
              <Badge
                variant="default"
                className="text-background bg-custom_primary cursor-pointer py-2 px-4 rounded-lg "
              >
                Cryptography
              </Badge>
              <p className="text-background text-xl md:text-2xl font-semibold md:w-5/6 leading-relaxed mt-5 cursor-pointer hover:opacity-75">
                Securing the Digital World: Cybersecurity Essentials
              </p>
              <div className="flex items-center mt-5 text-background">
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
      </div>
    </>
  );
};

export default IntroPosts;
