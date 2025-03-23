"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  setIndex: (newIndex: number | null) => void;
}

export const Lightbox = ({
  images,
  index,
  onClose,
  setIndex,
}: LightboxProps) => {
  const currentImage = index !== null ? images[index] : null;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {currentImage && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x > 100 && index! > 0) {
                setIndex(index! - 1);
              } else if (info.offset.x < -100 && index! < images.length - 1) {
                setIndex(index! + 1);
              }
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white text-3xl hover:text-gray-300"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Prev */}
            {index! > 0 && (
              <button
                onClick={() => setIndex(index! - 1)}
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                aria-label="Previous"
              >
                &#10094;
              </button>
            )}

            {/* Next */}
            {index! < images.length - 1 && (
              <button
                onClick={() => setIndex(index! + 1)}
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white text-3xl hover:text-gray-300"
                aria-label="Next"
              >
                &#10095;
              </button>
            )}

            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="text-white text-center mt-4">{currentImage.alt}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
