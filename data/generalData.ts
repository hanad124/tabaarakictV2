import {
  Ttesttimonials,
  TBlogs,
  TProducts,
  TPortfolio,
  TmenuItems,
} from "../types/GeneralTypes";
import { Tprocesses } from "../types/process";

import product_1_img from "@/public/assets/product1.png";
import product_2_img from "@/public/assets/product2.png";
import product_3_img from "@/public/assets/product3.png";
import product_4_img from "@/public/assets/product4.png";

import porject_1_img from "@/public/assets/project1.png";
import porject_2_img from "@/public/assets/project2.png";
import porject_3_img from "@/public/assets/project3.png";

import testtimonial_1_img from "@/public/assets/testimonial-1.jpg";
import testtimonial_2_img from "@/public/assets/testimonial-2.jpg";
import testtimonial_3_img from "@/public/assets/testimonial-3.jpg";

import postImage_1 from "@/public/assets/postImage-1.png";
import postImage_2 from "@/public/assets/postImage-2.png";
import postImage_3 from "@/public/assets/postImage-3.png";

import process_1_img from "@/public/assets/requirement-icon.png";
import process_2_img from "@/public/assets/ui_ux_design-icon.png";
import process_3_img from "@/public/assets/prototyping-icon.png";
import process_4_img from "@/public/assets/developement-icon.png";

import bran_2_img from "@/public/assets/client5.png";
import bran_3_img from "@/public/assets/client6.png";
import bran_4_img from "@/public/assets/client7.png";
import bran_5_img from "@/public/assets/client8.png";
import bran_6_img from "@/public/assets/client9.jpeg";
import bran_7_img from "@/public/assets/client10.png";

// CLients
export const testtimonialsData: Ttesttimonials[] = [
  {
    text: "Shirkada Tabaarak waxay noo fududeesay system aan ku maamulno dhamaan howlaha xarunta sida u adeegida bukaanada, maamulida shaqaalaha, la shaqeynta qalabyada sheybaarka iyo dhamaan xisaabaadka xarunta.",
    name: "HASSAN DIRIE ",
    title: "Deputy director and academic at Nova Diagnostic",
    img: testtimonial_1_img,
  },
  {
    text: "Waxan tabaarak ICT ku amaanaya sida quruxda badan ay u ilaaliyen sumada Bangiga, waxaan rajayneynaa ina sidaas iyo ka quruxbadan uwada shaqeeno mustabalka dhow iyo kan fogba.",
    name: "ABDULKADIR HILOWLE  ",
    title: "Head of Business at MyBank",
    img: testtimonial_2_img,
  },
  {
    text: "Waxaan u mahadcelinayaa xarunta tabaarak ICT oo qeyb weyn ka qaadatay barashadeyda xirfadaha Graphic Design-ka iyo Video Editing-ka.",
    name: "ABDISHAKUR MOALLIAM ",
    title: "Digital Media Officer, Hormuud Telecom",
    img: testtimonial_3_img,
  },
];

// BLogs
export const blogsData: TBlogs[] = [
  {
    img: postImage_1,
    category: "Full-stack Development",
    title: "Building Dynamic Websites: The Essentials of Web Development",
    autherImg:
      "https://drive.google.com/uc?export=download&id=1-EBH4iBcQ2O5VNKqdRCUR0crn15NiamD",
    autherName: "Hanad Mohamed",
    blogDate: "July 20, 2023",
  },
  {
    img: postImage_2,
    category: "Cryptography",
    title: "Securing the Digital World: Cybersecurity Essentials",
    autherImg:
      "https://drive.google.com/uc?export=download&id=1-EBH4iBcQ2O5VNKqdRCUR0crn15NiamD",
    autherName: "Hanad Mohamed",
    blogDate: "July 20, 2023",
  },
  {
    img: postImage_3,
    category: "Machine Learning (ML)",
    title: "Exploring the Fascinating World of Artificial Intelligence",
    autherImg:
      "https://drive.google.com/uc?export=download&id=1-EBH4iBcQ2O5VNKqdRCUR0crn15NiamD",
    autherName: "Hanad Mohamed",
    blogDate: "July 20, 2023",
  },
];

// Menu Items
export const menuItems: TmenuItems[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "About", path: "/about" },
];

// Brands
export const brands = [
  bran_2_img,
  bran_3_img,
  bran_4_img,
  bran_5_img,
  bran_6_img,
  bran_7_img,
];

// Portfolio
export const portfolioData: TPortfolio[] = [
  {
    img: porject_1_img,
    title: "Dhaweeye",
    desc: "  Dhaweeye allows people to request a ride from a nearby driver using their smartphone. ",
  },
  {
    img: porject_2_img,
    title: "Taakul",
    desc: "  An app where you can buy and sell the goods you want to buy for free. ",
  },
  {
    img: porject_3_img,
    title: "Beeciye",
    desc: "In-store shopping · In-store pick-up Delivery.",
  },
];

// Products
export const productsData: TProducts[] = [
  {
    img: product_1_img,
    title: "Shaafi",
    desc: "  Shaafi hospitsystem software is a tailor-made application designed to cater to the complex business requirements of a hospital. ",
  },
  {
    img: product_2_img,
    title: "KIAS",
    desc: " Inventory and Accounting management software is a software system for tracking inventory levels, orders, sales and deliveries. ",
  },
  {
    img: product_3_img,
    title: "Dur-Dur",
    desc: " water Billing System is an automated system that was based on paying water bills Invoicing Customer Manage Staff and reports. ",
  },
  {
    img: product_4_img,
    title: "HRM",
    desc: "HRM is a software that combines a number of systems and processes to ensure the easy management of hr, business processes.",
  },
];

export const processesData: Tprocesses[] = [
  {
    id: 1,
    icon: process_1_img,
    backgroundColor: "#FC5732",
    title: "Requirement",
    description:
      "Identify goals, features & needs of client. Gather technical & design specs to inform development process.",
  },
  {
    id: 2,
    icon: process_2_img,
    backgroundColor: "#0070E2",
    title: "UI/UX Design",
    description:
      "Design an intuitive interface for users. Consider navigation, accessibility, branding & aesthetics",
  },
  {
    id: 3,
    icon: process_3_img,
    backgroundColor: "#7B3DD9",
    title: "Prototype",
    description:
      "Create a functional model of the website. Test for functionality, identify and resolve issues.",
  },
  {
    id: 4,
    icon: process_4_img,
    backgroundColor: "#00B59A",
    title: "Development",
    description:
      "Build & optimize the website, incorporating the design, functionality, and features identified in previous stages.",
  },
];
