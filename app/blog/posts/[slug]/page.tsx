import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import PostsBreadCrumb from "../../(components)/PostsBreadCrumb";
import Link from "next/link";
import SideBar from "../../(components)/SideBar";
import ScrollIndicator from "@/components/ScrollIndicator";

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
  const image = post.data.image;

  return (
    <>
      <ScrollIndicator />
      <div>
        <PostsBreadCrumb
          author={post.data.author}
          title={post.data.title}
          date={post.data.date}
          category={post.data.category}
        />
      </div>
      <div className="mx-auto px-4  md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 ">
        <div className="max-[398px]:w-[22rem] m-auto break-words sm:mx-4 border-b pb-5 md:pd-0 md:border-b-0">
          <Image
            src={image}
            alt={slug}
            width={400}
            height={300}
            className="w-full md:max-h-96"
          />
          <article className="mt-16 prose md:prose-lg dark:prose-invert prose-img:w-full md:prose-img:w-4/5 prose-img:rounded prose-headings:text-custom_secondary prose-img:mx-auto md:prose-img:h-[22rem] prose-a:text-blue-400 prose-code:text-[#23ba9e] prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-md">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
        {/* side bar */}
        <SideBar />
      </div>
    </>
  );
};

export default BlogPost;
