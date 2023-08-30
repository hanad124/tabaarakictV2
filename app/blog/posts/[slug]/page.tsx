import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import PostsBreadCrumb from "../../(components)/PostsBreadCrumb";
import { BiSearch } from "react-icons/bi";

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
      <div>
        <PostsBreadCrumb
          author={post.data.author}
          title={post.data.title}
          date={post.data.date}
          catogory={post.data.catogory}
        />
      </div>
      <div className="mx-auto px-4  md:px-10 py-16  flex justify-center gap-x-10">
        <div className="max-[398px]:w-[22rem] m-auto break-words sm:mx-4 flex-1">
          <Image
            src={image}
            alt={slug}
            width={400}
            height={300}
            className="w-full md:max-h-96 rounded"
          />
          <article className="prose md:prose-lg dark:prose-invert prose-img:rounded-xl prose-img:w-[30rem] prose-img:h-[16rem] prose-a:text-blue-400 prose-code:text-[#23ba9e] prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-md">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
        {/* side bar */}
        <div className="md:w-[440px] sticky top-0 border border-custom_border rounded-lg h-full md:py-16 md:px-7">
          {/* search */}
          <div className="bg-custom_primary/5 mt-5">
            <div className="flex items-center border border-custom_border rounded-md  focus-within:ring focus-within:ring-custom_primary">
              <input
                type="text"
                className="bg-transparent w-full py-3 focus:outline-none px-3"
              />
              <div className="bg-custom_primary flex justify-center items-center text-background h-12 rounded-r w-14 cursor-pointer">
                <BiSearch className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
