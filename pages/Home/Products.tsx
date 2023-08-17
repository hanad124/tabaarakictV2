import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productsData } from "@/data";
import textImg from "@/public/assets/product1.png";

const Products = () => {
  return (
    <div>
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 ">
        <h2 className="text-custom_secondary text-2xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0 ">
          we offer a range of powerful and innovative products
        </h2>
        <div className="flex flex-col justify-center md:justify-start gap-10 md:flex-row md:flex-wrap mt-16">
          {/* Single card */}
          {productsData.map((product) => {
            return (
              <div
                className="flex flex-col border border-custom_border  md:w-[370px]  rounded-lg px-5 py-5"
                key={product.title}
              >
                <Image
                  className="w-full  flex-1"
                  src={product.img}
                  alt="HRM image"
                  width={500}
                  height={300}
                />
                <p className="text-custom_secondary font-bold text-2xl mt-10 flex-1">
                  {product.title}
                </p>
                <p className="mt-2 text-custom_textColor flex-1">
                  {product.desc}
                </p>
                <div className="w-full flex justify-center text-center mt-4">
                  <Button
                    className="group hover:bg-custom_primary hover:text-white mt-4 w-4/6 flex gap-3 text-custom_primary font-semibold"
                    variant={"outline"}
                    size={"lg"}
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="#0B63E5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-background"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="#0B63E5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:stroke-background"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
