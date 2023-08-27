import BreadCrumb from "@/components/BreadCrumb";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import PostsBreadCrumb from "../../(components)/PostsBreadCrumb";

const breadcrumbItems = [{ label: "Home", link: "/" }];

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPost = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <div>
        <PostsBreadCrumb
          author={post.data.author}
          title={post.data.title}
          date={post.data.date}
          catogory={post.data.catogory}
        />
        BlogPost
      </div>
      <div className="flex justify-center bg-background">
        <div className="max-[398px]:w-[22rem] m-auto break-words sm:mx-4">
          <article className="prose md:prose-lg dark:prose-invert prose-img:rounded-xl prose-img:w-[30rem] prose-img:h-[16rem] prose-a:text-blue-400 prose-code:text-[#23ba9e] prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-md">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
