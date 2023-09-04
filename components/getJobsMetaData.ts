import { TJobs } from "@/types/jobsMetaData";
import fs from "fs";
import matter from "gray-matter";

const getJobsMetadata = (): TJobs[] => {
  const folder = "jobs/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get file creation date for each file
  const jobs = markdownPosts.map((fileName) => {
    const fileStats = fs.statSync(`jobs/${fileName}`);
    const fileCreationDate = new Date(fileStats.birthtime); // Convert birthtime to Date object

    const fileContents = fs.readFileSync(`jobs/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      slug: fileName.replace(".md", ""),
      name: matterResult.data.name,
      issueDate: matterResult.data.issueDate,
      expireDate: matterResult.data.expireDate,
      type: matterResult.data.type,
      location: matterResult.data.location,
      category: matterResult.data.category,
      creationDate: fileCreationDate, // Store creation date as Date object
    };
  });

  return jobs;
};

export default getJobsMetadata;
