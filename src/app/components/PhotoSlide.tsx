import React from "react";
import { MediumTypewriter } from "./Typewriter";

const words = [
  {
    text: "~",
  },
  {
    text: "Apart",
  },
  {
    text: "from",
  },
  {
    text: "coding,",
  },
  {
    text: "I",
  },
  {
    text: "love",
  },
  {
    text: "exploring",
  },
  {
    text: "nature",
  },
  {
    text: "and",
  },
  {
    text: "taking",
  },
  {
    text: "pictures.",
  },
  {
    text: "Here's",
  },
  {
    text: "some",
  },
  {
    text: "of",
  },
  {
    text: "my",
  },
  {
    text: "work",
  },
];

export const PhotoSlide = () => {
  return (
    <div className="mockup-code p-3 h-32">
      <pre>
        <code>
          <MediumTypewriter words={words} className="text-med" />
        </code>
      </pre>
    </div>
  );
};
