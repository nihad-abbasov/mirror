"use client";

import { MotionFadeIn } from "@/components/MotionFadeIn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Mətbəx",
    slug: "modern-metbex",
    image: "/projects/p1.jpg",
    category: "Evin iç dizaynı",
  },
  {
    id: 2,
    title: "Minimalist Qonaq Otağı",
    slug: "minimalist-qonaq-otagi",
    image: "/projects/p2.webp",
    category: "Evin iç dizaynı",
  },
  {
    id: 3,
    title: "Skandinaviya Ofisi",
    slug: "skandinaviya-ofisi",
    image: "/projects/p3.jpg",
    category: "Ofis dizaynı",
  },
  {
    id: 4,
    title: "Klassik Yataq Otağı",
    slug: "klassik-yataq-otagi",
    image: "/projects/p2.webp",
    category: "Evin iç dizaynı",
  },
  {
    id: 5,
    title: "Studio Workspace",
    slug: "studio-workspace",
    image: "/projects/p3.jpg",
    category: "Ofis dizaynı",
  },
  {
    id: 6,
    title: "Rahat Uşaq Otağı",
    slug: "rahat-usaq-otagi",
    image: "/projects/p1.jpg",
    category: "Evin iç dizaynı",
  },
  {
    id: 7,
    title: "Klassik Yataq Otağı",
    slug: "klassik-yataq-otagi-2",
    image: "/projects/p3.jpg",
    category: "Evin iç dizaynı",
  },
  {
    id: 8,
    title: "Studio Workspace",
    slug: "studio-workspace-2",
    image: "/projects/p2.webp",
    category: "Ofis dizaynı",
  },
  {
    id: 9,
    title: "Rahat Uşaq Otağı",
    slug: "rahat-usaq-otagi-2",
    image: "/projects/p1.jpg",
    category: "Evin iç dizaynı",
  },
  {
    id: 10,
    title: "Klassik Yataq Otağı",
    slug: "klassik-yataq-otagi-3",
    image: "/projects/p1.jpg",
    category: "Evin iç dizaynı",
  },
  {
    id: 11,
    title: "Studio Workspace",
    slug: "studio-workspace-3",
    image: "/projects/p2.webp",
    category: "Ofis dizaynı",
  },
  {
    id: 12,
    title: "Rahat Uşaq Otağı",
    slug: "rahat-usaq-otagi-3",
    image: "/projects/p3.jpg",
    category: "Evin iç dizaynı",
  },
];

export const ProjectsView = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section className="w-full">
      {/* Hero Section */}
      <article className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-[url('/projects/hero.jpeg')] bg-cover bg-center text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <MotionFadeIn>
          <h1 className="text-4xl md:text-6xl font-light backdrop-blur-sm bg-white/30 px-4 py-2 rounded-md relative z-10">
            Layihələrimiz
          </h1>
        </MotionFadeIn>
      </article>

      {/* Projects Grid */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.slice(0, visibleCount).map((project, idx) => (
              <MotionFadeIn key={project.id} delay={idx * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <div className="rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </MotionFadeIn>
            ))}
          </div>
        </div>
        {visibleCount < projects.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleViewMore}
              className="px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
            >
              Daha çoxuna bax
            </button>
          </div>
        )}
      </article>
    </section>
  );
};
