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
      <div className="my-8">
        <div className={`grid gap-4 ${getGridClass(images.length)}`}>
          {images.map((imageSrc, index) => {
            const altText = `${projectName || "Project"} screenshot ${index + 1}`;
            return (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                onClick={() => setModalImage({ src: imageSrc, alt: altText })}
              >
                <Image
                  src={imageSrc}
                  alt={altText}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-200"
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
