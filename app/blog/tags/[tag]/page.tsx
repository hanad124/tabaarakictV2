import getPostMetadata from "@/components/getPostMetadata";
import React from "react";
import { getPostsByTag } from "../../(components)/GetPostsByTag";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
    params: { slug: post.slug },
  }));
};

const page = (props: any) => {
  const postTag = getPostsByTag(props.params.tag);
  console.log(postTag);
  return (
    <div className=" text-center mt-44">
      <h1 className="text-3xl font-bold">
        Posts tagged with{" "}
        <span className="text-custom_primary">{props.params.tag}</span>
      </h1>
      <div className="flex flex-col">
        {postTag.map((post: any) => (
          <div className="flex flex-col">
            <Link href={`/blog/posts/${post.slug}`}>
              <h2 className="text-xl font-bold">{post.title}</h2>
            </Link>
            <p className="text-sm">{post.date}</p>
            <p className="text-sm">{post.excerpt}</p>
            <Image src={post.image} alt={post.title} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
