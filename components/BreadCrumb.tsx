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
    <nav className="breadcrumb bg-cover bg-center h-[20rem] overflow-hidden">
      <div className="container mx-auto px-4 py-8 h-full mt-8 md:mt-32 ">
        <p className="text-center text-background">{title}</p>
        <div className="flex justify-center items-center">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index === 0 && (
                <Link
                  href={item.link}
                  className="breadcrumb-link text-blue-500 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              )}
              <>
                <span className="breadcrumb-separator mx-2">/</span>
                <p>{title}</p>
              </>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BreadCrumb;

{
  /* <li key={index} className="flex items-center">
{index > 0 && (
  <span className="breadcrumb-separator mx-2">/</span>
)}
<Link
  href={item.link}
  className="breadcrumb-link text-blue-500 hover:text-blue-700"
>
  {item.label}
</Link>
</li> */
}
