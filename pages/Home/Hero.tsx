import { Button } from "@/components/ui/button";
import { BiSearch } from "react-icons/bi";

import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="hero-section">
        <div
          className="bg-hero-image bg-cover bg-center h-[50rem] "
          style={{
            backgroundImage:
              "linear-gradient(126deg, rgba(13, 21, 34, 0.75) 0%, rgba(0, 39, 98, 0.47) 100%), linear-gradient(179deg, rgba(13, 21, 34, 0.90) 0%, rgba(0, 39, 98, 0.81) 98.98%), url('https://drive.google.com/uc?export=download&id=1O8BpNIrrF0aIA2onyIiBhT3dVYO4Sh5w')",
          }}
        >
          <div className="pt-32 lg:pt-48 md:pt-44 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="md:w-1/2">
                <h1
                  className="lg:text-5xl  lg:mt-0 md:mt-0 text-4xl md:text-4xl leading-relaxed text-white font-bold mb-4 mt-6"
                  style={{ lineHeight: "138.5%" }}
                >
                  Empower Your Business with Innovative ICT Solutions
                </h1>
                <p className="text-white mt-[2rem] md:mt-0 lg:mt-0 lg:text-lg md:text-lg text-md mb-8 leading-relaxed">
                  At{" "}
                  <span className="font-semibold">
                    `Tabaarak ICT Solutions`
                  </span>
                  , we are dedicated to transforming businesses with our
                  advanced ICT solutions. Our focus is on delivering
                  state-of-the-art technologies that ignite growth, optimize
                  efficiency, and elevate customer experiences to unprecedented
                  levels.
                </p>

                <Button
                  size={"lg"}
                  className="btn-primary  mt-[1rem] md:mt-0 lg:mt-0 text-white bg-[#0B63E5]  py-3 rounded-md hover:bg-[#0b62e5db] "
                >
                  Contact Us
                </Button>
              </div>
              <div className="md:w-1/2 mt-[3rem] lg:mt-0 md:mt-0  lg:ml-28 hidden md:block">
                <Image
                  className="w-full h-auto rounded-lg shadow-md"
                  src="https://drive.google.com/uc?export=download&id=1q4r72Jl-wkcXQ-OJ00n2CbuPrEBuRFXm"
                  alt="Hero Image"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </section>
      {/*Domain Search section  */}
      <div className="domain-search-section -mt-7">
        <div className="flex justify-between px-4 border-2 mx-auto    rounded-full w-5/6  border-[#0b62e5] bg-white py-2">
          <div className="flex w-full items-center">
            <p className="border-r-2 border-[#DDD] text-[#323F7C] pr-2 hidden md:block">
              www.
            </p>
            <input
              type="text"
              className="w-full focus:outline-none pl-2"
              placeholder="find your perfect domain"
            />
          </div>
          <div className="flex bg-[#0b62e5] text-white items-center gap-2 rounded-full text-sm px-2 py-2 cursor-pointer">
            <BiSearch className="text-lg font-bold" />
            <p className="hidden">Search</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap px-4 justify-center mt-4">
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.so</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.com</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.net</span> $15/Year
          </p>
          <p className="text-[#323F7C] font-semibold">
            <span className="text-[#0B63E5]">.org</span> $15/Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
