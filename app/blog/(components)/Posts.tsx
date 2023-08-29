import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";
import FeaturedPost from "./FeaturedPost";
import IntroPosts from "./IntroPosts";
import LatestPosts from "./LatestPosts";
import getPostMetadata from "@/components/getPostMetadata";

const Posts = () => {
 
  return (
    <div className=" mt-10 container mx-auto px-4 md:px-6 lg:px-8 mb-10">
      <FeaturedPost />
      <LatestPosts />
    </div>
  );
};

export default Posts;
