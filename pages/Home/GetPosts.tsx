import getPostMetadata from "@/components/getPostMetadata";
import Blogs from "./Blogs";

const GetPosts = () => {
  const blogs = getPostMetadata();
  return (
    <div>
      <Blogs posts={blogs} />
    </div>
  );
};

export default GetPosts;
