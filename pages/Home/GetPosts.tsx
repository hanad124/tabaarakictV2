import getPostMetadata from "@/components/getPostMetadata";
import GetBlogs from "./GetBlogs";

const GetPosts = () => {
  const blogs = getPostMetadata();
  return (
    <div>
      <GetBlogs posts={blogs} />
    </div>
  );
};

export default GetPosts;
