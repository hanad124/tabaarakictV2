import { BiSearch } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import getPostMetadata from "@/components/getPostMetadata";
import SinglePost from "./SinglePost";

const GetLatestPosts = () => {
  const postMetadata = getPostMetadata();

  // Sort the postMetadata array by creation date (birthdate)
  const sortedPosts = postMetadata
    .reverse()
    .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
    .slice(1);

  return <SinglePost posts={sortedPosts} />;
};

export default GetLatestPosts;
