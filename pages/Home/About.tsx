"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

import aboutImage from "@/public/assets/about-img.jpg";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* who we're */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-36 mb-24 px-10 md:flex gap-10 lg:gap-20 items-center justify-center md:w-full md:justify-center"
      >
        <div className="flex-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="shrink w-auto md:w-[26rem] border rounded-xl md:h-[30.9rem] overflow-hidden relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-primary/80 absolute top-0 left-0 w-full h-full"></div>
              <Image
                className="w-full h-full object-cover object-center"
                src={aboutImage}
                alt="girl image"
                width={570}
                height={710}
              />{" "}
            </div>
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
            <Link href="/about">
              <Button
                size={"lg"}
                className="px-10 flex items-center justify-center gap-3 hover:gap-5 transition-all	 mt-8"
              >
                <span>Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-background"
                  />
                  <path
                    d="M13.5 5.25L20.25 12L13.5 18.75"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-background"
                  />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
