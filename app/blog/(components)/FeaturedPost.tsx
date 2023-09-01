import { Badge } from "@/components/ui/badge";
import { AvatarIcon } from "@radix-ui/react-icons";
import intropostImage from "../../../public/assets/intropost-img.png";
import { PostMetadata } from "@/types/PostMetadata";
import getPostMetadata from "@/components/getPostMetadata";
import Link from "next/link";

const FeaturedPost = () => {
  const postMetadata = getPostMetadata();
  const sortedPosts = postMetadata.slice().sort((a, b) => {
    return (
      new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
    );
  });

  const featuredPost = sortedPosts.length > 0 ? sortedPosts[0] : null;

  if (!featuredPost) {
    return null; // Handle the case when no featured post is available
  }

  return (
    <div className="flex justify-center">
      <div
        className="bg-center h-full w-full md:w-3/4 md:h-[26rem] rounded-xl flex flex-col pt-16 md:pt-0 justify-center md:justify-end px-4 md:px-6 lg:px-8 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(13, 21, 34, 0.75) 0%, rgba(0, 39, 98, 0.47) 40%), linear-gradient(to top, rgba(13, 21, 34, 0.9) 0%, rgba(0, 39, 98, 0.3) 30.98%),url(${featuredPost.image})`,
        }}
      >
        <div className="mb-10">
          <Badge
            variant="default" // default | outline | ghost
            className="text-background bg-custom_primary cursor-pointer py-2 px-4 rounded-lg "
          >
            {featuredPost.category}
          </Badge>
          <Link href={`/blog/posts/${featuredPost.slug}`}>
            <p className="text-background text-xl md:text-4xl font-semibold md:w-5/6 leading-relaxed mt-5 cursor-pointer hover:opacity-75">
              {featuredPost.title}
            </p>
          </Link>

          <div className="flex items-center mt-5 text-background text-sm md:text-base ">
            <div className="flex gap-2 cursor-pointer hover:opacity-80 hover:scale-105 transition">
              <AvatarIcon className="w-6 h-6" />
              <p>{featuredPost.author}</p>
            </div>
            <div className="w-1 h-1 rounded-full bg-custom_border mx-3"></div>
            <p>{featuredPost.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
