import { PostMetadata } from "@/types/PostMetadata";
import Blogs from "./Blogs";

interface ComponentProps {
  posts: PostMetadata[];
}

const GetBlogs: React.FC<ComponentProps> = ({ posts }) => {
  return (
    <div>
      <Blogs posts={posts} />
    </div>
  );
};

export default GetBlogs;
