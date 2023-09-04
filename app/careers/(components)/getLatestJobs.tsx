import getJobsMetaData from "@/components/getJobsMetaData";
import SingleJob from "./SingleJob";
// import SinglePost from "./SinglePost";

const GetLatestPosts = () => {
  const jobMetadata = getJobsMetaData();

  // Sort the postMetadata array by creation date (birthdate)
  const sortedJobs = jobMetadata
    .reverse()
    .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime())
    .slice(0);

  return (
    <>
      <SingleJob careers={sortedJobs} />
    </>
  );
};

export default GetLatestPosts;
