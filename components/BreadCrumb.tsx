import Link from "next/link";
import React from "react";

type BreadCrumbProps = {
  items: {
    label: string;
    link: string;
  }[];
  title: string;
};

const BreadCrumb = ({ items, title }: BreadCrumbProps) => {
  return (
    <nav className="breadcrumb bg-cover bg-center h-[20rem] overflow-hidden mt-16">
      <div className="container mx-auto px-4 py-8 h-full  ">
        <div className="flex justify-center h-full items-center flex-col">
          <p className="text-5xl md:text-6xl text-background font-bold mb-4 text-center">
            {title}
          </p>
          <div className="flex justify-center items-center gap-1">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {index === 0 && (
                  <Link
                    href={item.link}
                    className="breadcrumb-link text-background hover:text-custom_primary"
                  >
                    {item.label}
                  </Link>
                )}
                <>
                  <span className="breadcrumb-separator mx-2 ">
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
                  <p className="text-background">{title}</p>
                </>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BreadCrumb;
