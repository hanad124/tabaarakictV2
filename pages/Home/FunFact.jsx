const FunFact = () => {
  return (
    <div>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col  gap-3">
            <p className="text-custom_primary text-center  text-3xl font-medium">
              17+
            </p>
            <p className="text-custom_secondary md:text-md md:font-md font-sm uppercase">
              AWARDS REWARDED
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-3">
            <p className="text-custom_primary text-3xl font-medium">23+</p>
            <p className="text-custom_secondary md:text-md md:font-bold font-sm ">
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-3">
            <p className="text-custom_primary text-3xl font-medium ">183+</p>
            <p className="md:text-md md:font-md font-sm uppercase  text-custom_secondary ">
              HAPPY CLIENTS
            </p>
          </div>
          <div className="flex flex-col justify-center text-center gap-3">
            <p className="text-custom_primary text-3xl font-medium ">315+</p>
            <p className="md:text-md md:font-md font-sm uppercase text-custom_secondary  ">
              COMPLETED PROJECTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
