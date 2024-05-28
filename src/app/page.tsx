import Image from "next/image";
import React from "react";
import { MacbookScroll } from "./components/MacbookScroll";
import { FloatingNav, navItems } from "./components/Navbar";
import { WavyBackground } from "./components/Wave";
import { TypewriterEffect } from "./components/Typewriter";

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
    </>
  );
}
