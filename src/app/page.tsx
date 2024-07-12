"use client";
import React from "react";
import { MacbookScroll } from "./components/MacbookScroll";
import { FloatingNav, navItems } from "./components/Navbar";
import { ProjectCards } from "./components/HoverCard";
import { PhotoSlide } from "./components/PhotoSlide";
import { ScrollingImages } from "./components/ScrollingImages";
import { Footer } from "./components/Footer";
import { Document, Page, pdfjs } from "react-pdf";
import { Analytics } from "@vercel/analytics/react";

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

const imageUrls = [
  { link: "/photos/DSC02871.jpg" },
  { link: "/photos/DSC02969.JPG" },
  { link: "/photos/DSC03101 2.JPG" },
  { link: "/photos/DSC09814.JPG" },
  { link: "/photos/DSC09891.JPG" },
  { link: "/photos/DSC09899.JPG" },
  { link: "/photos/IMG_0706.JPG" },
  { link: "/photos/IMG_0891.JPG" },
  { link: "/photos/IMG_0892.JPG" },
  { link: "/photos/IMG_1036.jpg" },
  { link: "/photos/IMG_1635.jpg" },
];

export default function Home() {
  return (
    <>
      <Analytics></Analytics>
      <FloatingNav navItems={navItems} />
      <MacbookScroll></MacbookScroll>
      <div>
        <a
          href="https://drive.google.com/file/d/1fUSLkUzSFJzildtDxrQhPVCr0Q3DYOaP/view"
          rel="norefferer"
          target="_blank"
        >
          <Document
            file={{
              data: "https://drive.google.com/file/d/1fUSLkUzSFJzildtDxrQhPVCr0Q3DYOaP/view",
            }}
            onLoadError={console.error}
          >
            <Page pageNumber={0} />
          </Document>
        </a>
      </div>
      <ProjectCards />
      <PhotoSlide />
      <ScrollingImages items={imageUrls} direction="right" speed="slow" />
      <Footer />
    </>
  );
}
