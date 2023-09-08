import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BlogBreadcrumbProps {
  items: BreadcrumbItem[];
  postTag: string;
  postTagLength: number;
}

const TagsBreadCrumb: React.FC<BlogBreadcrumbProps> = ({
  items,
  postTag,
  postTagLength,
}) => {
  return (
    <nav className="breadcrumb bg-cover bg-center h-[17rem] overflow-hidden mt-16">
      <div className="container mx-auto px-4 py-8 h-full  ">
        <div className="flex justify-center items-center h-full">
          <div className="">
            <h3 className="text-center text-background text-5xl md:text-6xl font-bold mb-8">
              {postTag}
            </h3>
            <ol className="flex items-center justify-center space-x-3">
              {items.map((item, index) => (
                <React.Fragment key={item.href}>
                  <li className="text-background font-medium">
                    {index !== items.length - 1 ? (
                      <Link href={item.href}>{item.label}</Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                  {index !== items.length - 1 && (
                    <span className="breadcrumb-separator mx-4">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          className="fill-background stroke-10"
                        ></path>
                      </svg>
                    </span>
                  )}
                  {index === items.length - 1 && (
                    <Badge className="relative -top-2 -left-4 rounded-full px-2 py-1 bg-background text-custom_primary hover:bg-background hover:text-custom_primary">
                      {postTagLength}
                    </Badge>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TagsBreadCrumb;
