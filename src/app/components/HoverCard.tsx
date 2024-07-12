import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-400/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const projects = [
  {
    title: "BouncyHouseFunBay",
    description:
      "built a full-stack web application for renting out bounce houses for a client,built with Typescript, Next.js, and React",
    link: "https://github.com/ehcaw/bouncyhousefun",
  },

  {
    title: "F1 Project",
    description: "data analysis and machine learning on Kaggle F1 dataset",
    link: "https://github.com/ehcaw/f1-project",
  },
  {
    title: "colorme",
    description:
      "a firefox web extension that allows you to customize your browser's color theme, built using Typescript and React",
    link: "https://github.com/ehcaw/colorme",
  },
  {
    title: "sign language recognition",
    description: "a sign language recognition system using OpenCV and Python",
    link: "https://github.com/ehcaw/gesturerecognition",
  },
  {
    title: "NatureDex",
    description:
      "a Pokedex for real-life, built with Typescript, Next.js, and React",
    link: "https://github.com/dannymang/lahacks24",
  },
  {
    title: "Elitecode",
    description:
      "interactive interview prep using Whisper, GPT, and elevenlabs, built with Typescript, Next.js, and React",
    link: "https://github.com/ehcaw/sfhacks",
  },
  {
    title: "Purrfect Match",
    description:
      "tinder like app aimed at matching cats with potential owners, built with Flutter and Firebase",
    link: "https://github.com/DannyMang/PurrfectMatch",
  },
  {
    title: "CruzMaps",
    description:
      "revamped the UCSC campus map with a modern design, built with Typescript, Next.js, and React",
    link: "https://github.com/vznh/cruzmaps",
  },
  {
    title: "JTunes",
    description: "A fully offline music player app built with Java",
    link: "https://github.com/ehcaw/jtunes",
  },
];

export const ProjectCards = () => {
  return <HoverEffect items={projects} />;
};
