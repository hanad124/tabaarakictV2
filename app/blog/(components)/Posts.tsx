import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";
import FeaturedPost from "./FeaturedPost";
import IntroPosts from "./IntroPosts";
import LatestPosts from "./LatestPosts";

const Posts = () => {
  return (
    <div className=" mt-10 container mx-auto px-4 md:px-6 lg:px-8 mb-10">
        {/* featured post */}
        <FeaturedPost />
        {/* Intro posts */}
        {/* <IntroPosts /> */}
        {/* Latest Posts */}
      <LatestPosts />
    </div>
  );
};

export default Posts;
