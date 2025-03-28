"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { Lightbox } from "@/components/Lightbox";
import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const categories = ["Hamısı", "Mətbəx", "Otaq", "Ofis"];

const images: GalleryImage[] = [
  { id: 1, src: "/gallery/g1.jpg", alt: "Modern mətbəx", category: "Mətbəx" },
  { id: 2, src: "/gallery/g2.webp", alt: "Qonaq otağı", category: "Otaq" },
  { id: 3, src: "/gallery/g3.jpg", alt: "Ofis interyeri", category: "Ofis" },
  { id: 4, src: "/gallery/g2.webp", alt: "Minimal mətbəx", category: "Mətbəx" },
  { id: 5, src: "/gallery/g3.jpg", alt: "Yataq otağı", category: "Otaq" },
  { id: 6, src: "/gallery/g1.jpg", alt: "Studio ofis", category: "Ofis" },

  { id: 7, src: "/gallery/g1.jpg", alt: "Modern mətbəx", category: "Mətbəx" },
  { id: 8, src: "/gallery/g2.webp", alt: "Qonaq otağı", category: "Otaq" },
  { id: 9, src: "/gallery/g3.jpg", alt: "Ofis interyeri", category: "Ofis" },
  {
    id: 10,
    src: "/gallery/g2.webp",
    alt: "Minimal mətbəx",
    category: "Mətbəx",
  },
  { id: 11, src: "/gallery/g3.jpg", alt: "Yataq otağı", category: "Otaq" },
  { id: 12, src: "/gallery/g1.jpg", alt: "Studio ofis", category: "Ofis" },

  { id: 13, src: "/gallery/g1.jpg", alt: "Modern mətbəx", category: "Mətbəx" },
  { id: 14, src: "/gallery/g2.webp", alt: "Qonaq otağı", category: "Otaq" },
  { id: 15, src: "/gallery/g3.jpg", alt: "Ofis interyeri", category: "Ofis" },
  {
    id: 16,
    src: "/gallery/g2.webp",
    alt: "Minimal mətbəx",
    category: "Mətbəx",
  },
  { id: 17, src: "/gallery/g3.jpg", alt: "Yataq otağı", category: "Otaq" },
  { id: 18, src: "/gallery/g1.jpg", alt: "Studio ofis", category: "Ofis" },
];

export const GalleryView = () => {
  const [activeCategory, setActiveCategory] = useState("Hamısı");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Hamısı"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const { scrollDirection, isScrolled } = useScrollDirection();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section className="w-full">
      {/* Hero */}
      <article className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-[url('/gallery/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <MotionFadeIn>
          <h1 className="text-4xl md:text-6xl font-light text-white relative z-10 px-4 py-2 backdrop-blur-sm bg-white/30 rounded-md">
            Qalereya
          </h1>
        </MotionFadeIn>
      </article>

      {/* Filter & Grid */}
      <article className="w-full py-12 pb-40 bg-white">
        <div className="myContainer">
          {/* Filter Bar */}
          <div
            className={clsx(
              "sticky z-10 bg-white py-6 mb-10 border-b border-gray-200 flex flex-wrap gap-4 justify-center",
              "transition-[top] duration-300 ease-in-out", // ← this line is the animation
              isScrolled && scrollDirection === "up" ? "top-[4rem]" : "top-0"
            )}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 border rounded-full text-sm transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-black text-white border-black"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-[1px]">
            {filteredImages.map((img, idx) => (
              <MotionFadeIn key={img.id} delay={idx * 0.05}>
                <div
                  onClick={() => setSelectedIndex(idx)}
                  className="overflow-hidden rounded-md group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={500}
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </MotionFadeIn>
            ))}
          </div>

          <Lightbox
            images={filteredImages}
            index={selectedIndex}
            onClose={() => setSelectedIndex(null)}
            setIndex={setSelectedIndex}
          />
        </div>
      </article>
    </section>
  );
};
