"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import Hero from "@/pages/Home/Hero";
import About from "@/pages/Home/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}
