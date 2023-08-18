import { StaticImageData } from "next/image";

export type Ttesttimonials = {
  text: string;
  name: string;
  title: string;
  img: StaticImageData;
};

export type TBlogs = {
  img: StaticImageData;
  category: string;
  title: string;
  autherImg: string;
  autherName: string;
  blogDate: string;
};

export type TProducts = {
  img: StaticImageData;
  title: string;
  desc: string;
};

export type TPortfolio = {
  img: StaticImageData;
  title: string;
  desc: string;
};

export type TmenuItems = {
  label: string;
  path: string;
};
