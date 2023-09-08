import { TJobs } from "@/types/jobsMetaData";
import fs from "fs";
import matter from "gray-matter";

const getJobsMetadata = (): TJobs[] => {
  const folder = "jobs/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get file creation date for each file
  const jobs: TJobs[] = markdownPosts
    .map((fileName) => {
      const fileStats = fs.statSync(`jobs/${fileName}`);
      const fileCreationDate = new Date(fileStats.birthtime); // Convert birthtime to Date object

      const fileContents = fs.readFileSync(`jobs/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);

      const issueDate = matterResult.data.issueDate;
      const expireDate = matterResult.data.expireDate;

      // Check if the job has expired
      const currentDate = new Date();
      const expirationDate = new Date(expireDate);
      if (currentDate > expirationDate) {
        return null; // Skip the job entry
      }

      return {
        slug: fileName.replace(".md", ""),
        name: matterResult.data.name,
        issueDate,
        expireDate,
        type: matterResult.data.type,
        location: matterResult.data.location,
        category: matterResult.data.category,
        creationDate: fileCreationDate, // Store creation date as Date object
      };
    })
    .filter(Boolean) as TJobs[];

  return jobs;
};

export default getJobsMetadata;