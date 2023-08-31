import getPostMetadata from "@/components/getPostMetadata";
import { PostMetadata } from "@/types/PostMetadata";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { SearchDialog } from "./SearchPosts";
import { CalendarIcon } from "@radix-ui/react-icons";

// get recent posts by date
const posts = getPostMetadata();
const recentPosts = posts
  .slice(0, 4)
  .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());

// get popular tags
const tags = posts;

const SideBar = () => {
  return (
    <div className="md:w-[440px] sticky top-16 border border-custom_border rounded-lg h-full md:py-10 md:px-7">
      <SearchDialog posts={posts} />

      {/* recent posts */}
      <div className="p-5 bg-custom_primary/5 my-10 rounded">
        <p className="text-custom_secondary text-xl font-medium">
          Recent Posts
        </p>
        <div className="">
          {recentPosts.map((post) => {
            return (
              <Link href={`/blog/posts/${post.slug}`} key={post.title}>
                <div className="flex items-center gap-4 mt-3">
                  <Image
                    src={post.image}
                    alt={post.slug}
                    width={100}
                    height={100}
                    className="w-13 h-13 rounded cursor-pointer"
                  />
                  <div className="text-custom_textColor -mb-2 text-sm">
                    <p className="text-custom_secondary font-medium cursor-pointer hover:text-custom_primary/80 h-10 flex-1 ">
                      {post.title.slice(0, 50) +
                        (post.title.length > 50 ? " ..." : "")}
                    </p>
                    <div className="flex gap-2 items-center mt-1">
                      <CalendarIcon className="w-3 h-3" />
                      <p className="text-custom_textColor font-regular cursor-pointer hover:text-custom_primary/80 flex-1 text-xs">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* popular tags */}
      <div className="p-5 bg-custom_primary/5 my-10 rounded">
        <p className="text-custom_secondary text-xl font-medium">
          Popular Tags
        </p>
        <div className="flex items-center  flex-wrap gap-3 mt-3">
          {tags.slice(0, 5).map((tag) => (
            <Badge
              variant="outline"
              className="text-custom_primary bg-custom_primary/10 py-2 ring-none  cursor-pointer hover:bg-custom_primary hover:text-background"
              key={tag.category}
            >
              {tag.category}
            </Badge>
          ))}
        </div>
      </div>

      {/* follow us */}
      <div className="p-5 bg-custom_primary/5 my-10 rounded">
        <p className="text-custom_secondary text-xl font-medium">Follow Us</p>
        <div className="flex items-center  flex-wrap gap-3 mt-3">
          <div className="flex gap-8 mt-3">
            <div className="group hover ring-2 ring-custom_border hover:ring-custom_primary hover:bg-custom_primary w-8 px-1 pu-1 h-8 rounded-full flex justify-center items-center">
              <Link
                href="https://www.facebook.com/TabaarakICT/"
                target="_blank"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                >
                  <path
                    d="M9.00007 6.82105H7.50006H6.96434V6.27097V4.56571V4.01562H7.50006H8.62507C8.91971 4.01562 9.16078 3.79559 9.16078 3.46554V0.550085C9.16078 0.247538 8.9465 0 8.62507 0H6.66969C4.55361 0 3.08038 1.54024 3.08038 3.82309V6.21596V6.76605H2.54466H0.72322C0.348217 6.76605 0 7.06859 0 7.50866V9.48897C0 9.87402 0.294645 10.2316 0.72322 10.2316H2.49109H3.02681V10.7817V16.31C3.02681 16.6951 3.32145 17.0526 3.75003 17.0526H6.26791C6.42862 17.0526 6.56255 16.9701 6.66969 16.8601C6.77684 16.7501 6.8572 16.5576 6.8572 16.3925V10.8092V10.2591H7.4197H8.62507C8.97328 10.2591 9.24114 10.0391 9.29471 9.709V9.6815V9.65399L9.66972 7.7562C9.6965 7.56367 9.66972 7.34363 9.509 7.1236C9.45543 6.98608 9.21436 6.84856 9.00007 6.82105Z"
                    fill="#CDCED6"
                    className="group-hover:fill-background cursor-pointer fill-custom_primary"
                  />
                </svg>
              </Link>
            </div>
            <div className="group ring-custom_border ring-2 hover:ring-custom_primary hover:bg-custom_primary w-8 px-1 pu-1 h-8 rounded-full flex justify-center items-center">
              <Link
                href="https://www.linkedin.com/in/tabaarak-ict-solutions-77421080"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.7824 0.947266H1.84872C1.14297 0.947266 0.578369 1.49735 0.578369 2.18496V16.7622C0.578369 17.4223 1.14297 17.9999 1.84872 17.9999H16.7259C17.4316 17.9999 17.9962 17.4498 17.9962 16.7622V2.15745C18.0527 1.49735 17.4881 0.947266 16.7824 0.947266ZM5.74445 15.442H3.17552V7.32825H5.74445V15.442ZM4.44587 6.20058C3.59897 6.20058 2.94968 5.54047 2.94968 4.74285C2.94968 3.94523 3.6272 3.28513 4.44587 3.28513C5.26454 3.28513 5.94206 3.94523 5.94206 4.74285C5.94206 5.54047 5.321 6.20058 4.44587 6.20058ZM15.4838 15.442H12.9149V11.5089C12.9149 10.5738 12.8866 9.33606 11.5598 9.33606C10.2048 9.33606 10.0072 10.3812 10.0072 11.4264V15.442H7.43824V7.32825H9.95071V8.45592H9.97894C10.3459 7.79582 11.1646 7.13572 12.4349 7.13572C15.0603 7.13572 15.5402 8.78598 15.5402 11.0413V15.442H15.4838Z"
                    fill="#CDCED6"
                    className="group-hover:fill-background cursor-pointer fill-custom_primary"
                  />
                </svg>
              </Link>
            </div>
            <div className="group hover ring-custom_border ring-2 hover:ring-custom_primary hover:bg-custom_primary w-8 px-1 pu-1 h-8 rounded-full flex justify-center items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
              >
                <path
                  d="M16.2622 3.1786L17.33 1.93274C17.6391 1.59532 17.7234 1.33577 17.7515 1.20599C16.9085 1.67319 16.1217 1.82892 15.6159 1.82892H15.4192L15.3068 1.7251C14.6324 1.18004 13.7894 0.894531 12.8902 0.894531C10.9233 0.894531 9.37779 2.39994 9.37779 4.13894C9.37779 4.24276 9.37779 4.3985 9.40589 4.50232L9.49019 5.02142L8.90009 4.99547C5.30334 4.89165 2.35288 2.03656 1.87518 1.54341C1.08839 2.84118 1.53799 4.08703 2.01568 4.86569L2.97107 6.31919L1.45369 5.54053C1.48179 6.63065 1.93138 7.48718 2.80247 8.1101L3.56116 8.62921L2.80247 8.91472C3.28017 10.2384 4.34795 10.7835 5.13474 10.9911L6.17443 11.2507L5.19094 11.8736C3.61736 12.9118 1.65039 12.834 0.779297 12.7561C2.54957 13.8981 4.65705 14.1577 6.11823 14.1577C7.21412 14.1577 8.02901 14.0539 8.2257 13.976C16.0936 12.263 16.4589 5.77413 16.4589 4.47636V4.29468L16.6275 4.19085C17.5829 3.36028 17.9763 2.91904 18.2011 2.65949C18.1168 2.68545 18.0044 2.73736 17.892 2.76331L16.2622 3.1786Z"
                  fill="#CDCED6"
                  className="group-hover:fill-background cursor-pointer fill-custom_primary"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
