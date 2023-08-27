import { PostMetadata } from "@/types/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //get gra-matter data from each file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(".md", ""),
      title: matterResult.data.title,
      date: matterResult.data.date,
      image: matterResult.data.image,
      author: matterResult.data.author,
      avator: matterResult.data.avator,
      category: matterResult.data.category,
    };
  });

  return posts;
};

export default getPostMetadata;
