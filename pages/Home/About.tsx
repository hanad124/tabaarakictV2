"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import aboutImage from "@/public/assets/about-img.png";

const About = () => {
  return (
    <div>
      {/* who we're */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-32 mb-24 px-10 md:flex gap-10 lg:gap-20 items-center justify-center md:w-full md:justify-center"
      >
        <div className="flex-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              className="shrink w-auto border rounded-[18px] md:h-[30.9rem]"
              src={aboutImage}
              alt="girl image"
              width={570}
              height={710}
            />
          </motion.div>
        </div>
        <div className="mt-10 flex-1 md:mt-0 lg:max-w-[34rem]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#3056D3] font-bold text-xl mb-7"
          >
            Who we&apos;re
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-[#323F7C] text-2xl font-bold leading-normal  lg:text-4xl"
          >
            We provide perfect IT <br />
            <span className="text-[#3056D3]">solutions & technology</span> for
            any startups.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[#637381] my-5 leading-relaxed"
          >
            Tabaarak ICT Solutions is a privately owned organization that was
            established in 2011 in horn of Africa, The Company provides advanced
            Technology to its customers. Since its establishment, the company
            has achieved a leading role in the ICT Industry in east Africa,
            having the potential clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="my-3"
          >
            <Button size={"lg"}>Learn More</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
