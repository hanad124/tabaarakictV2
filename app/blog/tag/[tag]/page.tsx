import getPostMetadata from "@/components/getPostMetadata";
import React from "react";
import { getPostsByTag } from "../../(components)/GetPostsByTag";
import Image from "next/image";
import Link from "next/link";
import ScrollIndicator from "@/components/ScrollIndicator";
import TagsBreadCrumb from "../../(components)/TagsBreadCrumb";
import SideBar from "../../(components)/SideBar";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
    params: { slug: post.slug },
  }));
};

const page = (props: any) => {
  // Generate breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: props.params.tag, href: `/blog/category/${props.params.tag}` },
  ];

  console.log(props.params.tag);

  const postTag = getPostsByTag(props.params.tag);
  return (
    <>
      <ScrollIndicator />
      <div className="">
        <TagsBreadCrumb items={breadcrumbItems} postTag={props.params.tag} />
      </div>
      {/* ====== */}
      <div className="mx-auto px-4  md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 ">
        <div className="max-[450px]:w-[22rem] m-auto break-words sm:mx-4 border-b pb-5 md:pd-0 md:border-b-0">
          <div className=" text-center mt-44">
            <h1 className="text-3xl font-bold">
              Posts tagged with{" "}
              <span className="text-custom_primary">{props.params.tag}</span>
            </h1>
            <div className="mx-auto px-4  md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 ">
              {postTag.map((post: any) => (
                <div className="flex flex-col" key={post.slug}>
                  <Link href={`/blog/posts/${post.slug}`}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                  </Link>
                  <p className="text-sm">{post.date}</p>
                  <p className="text-sm">{post.excerpt}</p>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* side bar */}
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default page;
