"use client";

import { Lightbox } from "@/components/Lightbox";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

type Props = {
  project: {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    gallery: string[];
  };
};

export const ProjectDetailsView = ({ project }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const galleryImages = project.gallery.map((img) => ({
    src: img,
    alt: `${project.title} şəkil`,
  }));

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  useEffect(() => {
    if (!project) return;

    const existing = JSON.parse(
      localStorage.getItem("recently_viewed") || "[]"
    );

    const updated = [
      project.slug,
      ...existing.filter((s: string) => s !== project.slug),
    ];

    localStorage.setItem(
      "recently_viewed",
      JSON.stringify(updated.slice(0, 10))
    );
  }, [project]);

  return (
    <section className="w-full">
      {/* Cover */}
      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-light px-4 text-center">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="myContainer py-20 max-w-3xl mx-auto">
        <p className="text-gray-500 text-sm mb-4">{project.category}</p>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
      </div>

      {/* Gallery */}
      <div className="myContainer pb-20">
        {project.gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedIndex(idx)}
              >
                <Image
                  src={img}
                  alt={`${project.title} şəkil ${idx + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-sm">
            Bu layihəyə aid şəkillər hələ əlavə olunmayıb.
          </p>
        )}
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="myContainer pb-40">
          <h2 className="text-2xl font-light text-gray-800 mb-8 text-center">
            Oxşar layihələr
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProjects.map((rp) => (
              <Link
                key={rp.id}
                href={`/projects/${rp.slug}`}
                className="block group overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
              >
                <Image
                  src={rp.image}
                  alt={rp.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    {rp.title}
                  </h3>
                  <p className="text-sm text-gray-500">{rp.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Lightbox
        images={galleryImages}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        setIndex={setSelectedIndex}
      />
    </section>
  );
};
