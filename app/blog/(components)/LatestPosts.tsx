import { BiSearch } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import getPostMetadata from "@/components/getPostMetadata";
import SinglePost from "./SinglePost";

const LatestPosts = () => {
  const postMetadata = getPostMetadata();

  const blogPosts = postMetadata.map((post) => (
    <SinglePost key={post.slug} {...post} />
  ));

  return (
    <div>
      <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  justify-between items-center border-b border-custom_border pb-2 relative">
          <p className="text-custom_secondary text-lg font-medium md:font-bold  md:text-2xl">
            Latest Posts
          </p>
          <div className="absolute left-0 bottom-0 bg-custom_border w-11 md:w-16 h-[5px]"></div>
          <div className="flex items-center gap-2 border border-custom_border rounded-md w-44 md:w-[20rem] px-2 py-1 md:py-2 focus-within:ring-2 focus-within:ring-custom_primary">
            <BiSearch className="text-custom_textColor md:text-xl" />
            <input
              type="text"
              className="w-full text-custom_secondary focus:outline-none"
              placeholder="search posts"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-10 md:flex-row md:flex-wrap mt-16">
          {blogPosts}
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="border-custom_border text-custom_textColor"
            variant={"outline"}
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
