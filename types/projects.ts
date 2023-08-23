import { StaticImageData } from "next/image"

export type TProjects = {
    id: number;
    image : StaticImageData;
    category: string;
    title: string;
}
