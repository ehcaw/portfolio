"use client";
import Image from "next/image";
import React from "react";
import { MacbookScroll } from "./components/MacbookScroll";
import { FloatingNav, navItems } from "./components/Navbar";
import { ProjectCards } from "./components/HoverCard";
import { PhotoSlide } from "./components/PhotoSlide";

const words = [
  {
    text: "Hi",
  },
  {
    text: "I'm",
  },
  {
    text: "Ryan!",
  },
  {
    text: "Come",
  },
  {
    text: "look",
  },
  {
    text: "at",
  },
  {
    text: "what",
  },
  {
    text: "I'm",
  },
  {
    text: "working",
  },
  {
    text: "on",
  },
];

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <MacbookScroll></MacbookScroll>
      <ProjectCards />
      <PhotoSlide />
    </>
  );
}
