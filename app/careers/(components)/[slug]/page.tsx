import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getJobsMetaData from "@/components/getJobsMetaData";
import Image from "next/image";
import JobstsBreadCrumb from "../JobBreadCrumb";
import Link from "next/link";
import SideBar from "@/app/careers/(components)/SideBar";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";

const getPostContent = (slug: string) => {
  const folder = "jobs/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const jobs = getJobsMetaData();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
};

const BlogPost = (props: any) => {
  const slug = props.params.slug;
  const job = getPostContent(slug);

  return (
    <>
      <ScrollIndicator />
      <div>
        <JobstsBreadCrumb
          name={job.data.name}
          issueDate={job.data.issueDate}
          expireDate={job.data.expireDate}
          category={job.data.category}
          location={job.data.location}
        />
      </div>
      <div className="mx-auto px-4 md:px-10 py-16  flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 ">
        <div className="max-[450px]:w-[24rem] m-auto break-words sm:mx-4 border-b pb-5 md:pd-0  border rounded-lg px-10">
          <article className="mt-16 prose md:prose-lg dark:prose-invert prose-img:w-full  prose-img:rounded prose-headings:text-custom_secondary prose-img:mx-auto md:prose-img:h-[22rem] prose-a:text-blue-400 prose-code:text-[#23ba9e] prose-code:bg-slate-800 prose-code:p-1 prose-code:rounded-md">
            <Markdown>{job.content}</Markdown>
          </article>
          <Button size={"lg"} className="px-10 flex items-center gap-2">
            <span>Apply Here</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.125 10H16.875"
                stroke="#fff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.25 4.375L16.875 10L11.25 15.625"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        {/* side bar */}
        <SideBar />
      </div>
    </>
  );
};

export default BlogPost;
