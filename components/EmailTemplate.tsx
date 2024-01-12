// "use client";

// import * as React from "react";
// import logo from "../public/assets/tabaarak-logo.svg";
// import Image from "next/image";
// import Markdown from "markdown-to-jsx";

// import { Html } from "@react-email/html";
// import { Body } from "@react-email/body";
// import { Tailwind } from "@react-email/tailwind";
// import { Heading } from "@react-email/heading";
// import { Head } from "@react-email/head";
// import { Text } from "@react-email/text";
// import { Button } from "@react-email/button";
// import { Img } from "@react-email/img";

// interface EmailTemplateProps {
//   name: string;
//   email: string;
//   subject: string;
//   company: string;
//   message: string;
// }

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   name,
//   email,
//   subject,
//   company,
//   message,
// }) => (
//   <Html>
//     <Head />
//     <Tailwind>
//       <Body>
//         <div className=" p-8 m-4 rounded-md">
//           <article className="mt-16 prose md:prose-lg dark:prose-invert prose-img:w-full  prose-img:rounded prose-headings:text-custom_secondary prose-img:mx-auto md:prose-img:h-[22rem] prose-a:text-blue-400 ">
//             <Heading className="">{name}!</Heading>
//             <Text className="mr-4">{email}</Text>
//             <Text className="mr-4">{subject}</Text>
//             <Text>{company}</Text>
//             <div className="leading-relaxed text-xl mt-10 text-custom_secondary">
//               <Markdown>{message}</Markdown>
//             </div>
//           </article>
//         </div>
//       </Body>
//     </Tailwind>
//   </Html>
// );

// ======================================

import * as React from "react";
import logo from "../public/assets/tabaarak-logo.svg";
import Image from "next/image";
import Markdown from "markdown-to-jsx";

import {
  Html,
  Body,
  Tailwind,
  Heading,
  Head,
  Text,
  Button,
  Img,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  company: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  company,
  message,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body>
        <div className=" p-8 m-4 rounded-md">
          <article className="mt-16 prose md:prose-lg dark:prose-invert prose-img:w-full  prose-img:rounded prose-headings:text-custom_secondary prose-img:mx-auto md:prose-img:h-[22rem] prose-a:text-blue-400 ">
            <Heading className="">{name}!</Heading>
            <Text className="mr-4">{email}</Text>
            <Text className="mr-4">{subject}</Text>
            <Text>{company}</Text>
            <div className="leading-relaxed text-xl mt-10 text-custom_secondary">
              <Markdown>{message}</Markdown>
            </div>
          </article>
        </div>
      </Body>
    </Tailwind>
  </Html>
);
