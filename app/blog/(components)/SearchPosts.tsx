"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import getPostMetadata from "@/components/getPostMetadata";
import { PostMetadata } from "@/types/PostMetadata";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

interface ComponentProps {
  posts: PostMetadata[];
}

export const SearchDialog: React.FC<ComponentProps> = ({ posts }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // get recent posts by date
  //   const posts = getPostMetadata();
  //   const recentPosts = posts
  //     .slice(0, 4)
  //     .sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());

  return (
    <>
      {/* search */}
      <div className="bg-custom_primary/5 p-5 rounded">
        <div className="flex items-center border border-custom_border rounded-md  focus-within:ring focus-within:ring-custom_primary">
          <input
            type="text"
            placeholder="Search posts... / ⌘ J"
            className="bg-transparent w-full py-3 focus:outline-none px-3 text-sm"
            onClick={() => setOpen(true)}
          />
          <div className="bg-custom_primary flex justify-center items-center text-background h-12 rounded-r w-14 cursor-pointer">
            <BiSearch className="text-2xl" />
          </div>
        </div>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search post..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {posts.map((post) => {
              return (
                <Link href={`/blog/posts/${post.slug}`} key={post.title}>
                  <CommandItem className="cursor-pointer">
                    {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                    <span>{post.title}</span>
                    <CommandShortcut>⌘J</CommandShortcut>
                  </CommandItem>
                  <CommandSeparator />
                </Link>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};