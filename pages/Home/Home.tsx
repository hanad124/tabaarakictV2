"use client";

import Hero from "@/pages/Home/Hero";
import About from "@/pages/Home/About";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import Services from "@/pages/Home/Services";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollIndicator />
      <Hero />
      <About />
      <Services />
    </>
  );
}
