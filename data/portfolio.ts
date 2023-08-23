import { TProjects } from "@/types/projects";

import projec1 from "@/public/assets/project1.png";
import projec2 from "@/public/assets/project2.png";
import projec3 from "@/public/assets/project3.png";
import projec4 from "@/public/assets/project4.png";

// Projects
export const projects: TProjects[] = [
  {
    id: 1,
    image: projec1,
    category: "Mobile App",
    title: "Dhaweeye",
  },
  {
    id: 2,
    image: projec2,
    category: "Mobile App",
    title: "Taakul",
  },
  {
    id: 3,
    image: projec3,
    category: "Mobile App",
    title: "Beeciye",
  },
  {
    id: 4,
    image: projec4,
    category: "Mobile App",
    title: "Rikaab",
  },
];

// Tabs
export const tabs: string[] = [
  "All",
  "Mobile Apps",
  "Web Apps",
  "Desktop Apps",
];
