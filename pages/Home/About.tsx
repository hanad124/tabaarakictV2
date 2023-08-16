import { Button } from "@/components/ui/button";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* who we're */}
      <div className="mt-32 mb-24 px-10 md:flex gap-10 lg:gap-20 items-center justify-center md:w-full md:justify-center">
        <div className="flex-2">
          <Image
            className="shrink w-auto border rounded-[18px] md:h-[36.9rem]"
            src="https://drive.google.com/uc?export=download&id=1opIGfiwwltzVj1rr-fgixBSWJu80vBJi"
            alt="girl image"
            width={500}
            height={300}
          />
        </div>
        <div className="mt-10 flex-1 md:mt-0 lg:max-w-[34rem]">
          <p className="text-[#3056D3] font-bold text-xl mb-7">
            Who we&apos;re{" "}
          </p>
          <h2 className="text-[#323F7C] text-2xl font-bold leading-normal lg:leading-relaxed lg:text-4xl">
            We provide perfect IT <br />
            <span className="text-[#3056D3]">solutions & technology</span> for
            any startups.
          </h2>
          <p className="text-[#637381] my-5  leading-relaxed">
            Tabaarak ICT Solutions is a privately owned organization that was
            established in 2011 in horn of Africa, The Company provides advanced
            Technology to its customers. Since its establishment, the company
            has achieved a leading role in the ICT Industry in east Africa,
            having the potential clients.
          </p>
          <Button size={"lg"} className="my-3">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
