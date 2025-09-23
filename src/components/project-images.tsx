"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./image-modal";

interface ProjectImagesProps {
  images: string[];
  projectName?: string;
}

export function ProjectImages({ images, projectName }: ProjectImagesProps) {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  if (!images || images.length === 0) {
    return null;
  }

  const getGridClass = (imageCount: number) => {
    switch (imageCount) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <>
      <div className="my-6 md:my-8 w-full">
        <div
          className={`grid gap-2 md:gap-4 ${getGridClass(images.length)} w-full`}
        >
          {images.map((imageSrc, index) => {
            const altText = `${projectName || "Project"} screenshot ${index + 1}`;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer w-full"
                onClick={() => setModalImage({ src: imageSrc, alt: altText })}
              >
                <Image
                  src={imageSrc}
                  alt={altText}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200 max-w-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        isOpen={modalImage !== null}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </>
  );
}
