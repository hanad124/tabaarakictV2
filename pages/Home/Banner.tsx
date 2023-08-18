import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <div className="mx-3 md:mx-0 py-16overflow-x-hidden">
      <div className="my-24 py-12 rounded-md container md:mx-auto px-6  md:px-16 bg-custom_primary lg:w-4/6 relative">
        <div className="flex flex-col gap-28 mg:gap-0 md:flex-row items-center justify-between ">
          <div
            className="absolute -top-36 -left-56 hidden md:block"
            style={{
              width: "346px",
              height: "357px",
              flexShrink: 0,
              borderRadius: "357px",
              background:
                "linear-gradient(-90deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
          <div
            className="absolute -right-36 -bottom-56  hidden md:block"
            style={{
              width: "346px",
              height: "357px",
              flexShrink: 0,
              borderRadius: "357px",
              background:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
          <div className="flex flex-col gap-5 text-background">
            <p className="font-medium">Start your business with us</p>
            <p className="  text-3xl font-semibold leading-normal  md:w-96 md:text-4xl">
              Request for a Quote and get started
            </p>
          </div>
          <Button
            className="px-14 py-3 bg-background/10 rounded-sm hover:bg-background/20 shadow-none text-md"
            size={"lg"}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
