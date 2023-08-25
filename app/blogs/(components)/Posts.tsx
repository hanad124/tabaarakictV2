import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";
import FeaturedPost from "./FeaturedPost";
import IntroPosts from "./IntroPosts";

const Posts = () => {
  return (
    <div className=" mt-16 container mx-auto px-4 md:px-6 lg:px-8 mb-10">
      <div className="flex gap-5">
        {/* featured post */}
        <FeaturedPost />
        {/* Intro posts */}
        <IntroPosts />
      </div>
    </div>
  );
};

export default Posts;
