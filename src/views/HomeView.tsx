"use client";

import { WorkProcessSection } from "./homeSections/WorkProcessSection";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  title: string;
  img: string;
}

const featuredProjects: ProjectItem[] = [
  { title: "Modern Mətbəx", img: "/home/sec1.jpg" },
  { title: "Skandinaviya Otağı", img: "/home/sec2.webp" },
  { title: "Minimalist Qonaq", img: "/home/sec3.jpg" },
];

const galleryImages: string[] = [
  "/home/sec1.jpg",
  "/home/sec3.jpg",
  "/home/sec2.webp",
  "/home/sec3.jpg",
  "/home/sec2.webp",
  "/home/sec1.jpg",
];

export const HomeView = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <article className="relative w-full min-h-[50vh] md:min-h-[80vh] flex items-center justify-center bg-[url(/home/hero.jpg)] bg-cover text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
        <MotionFadeIn>
          <div className="myContainer text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              İnteryer dizayn <br className="hidden md:block" />
              ilə yeni nəfəs
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
              Estetik, funksional və zamansız məkanlar yaratmaq üçün buradayıq.
            </p>
            <Link
              href="/projects"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Layihələrə bax
            </Link>
          </div>
        </MotionFadeIn>
      </article>

      {/* About Preview Section */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionFadeIn delay={0.1}>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Mirror Studio haqqında
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Mirror Studio — funksionallıq və estetikliyi birləşdirərək
                müasir interyer dizaynları yaradan kreativ bir komandadır.
                Məkanlarınızda rahatlıq və zövq harmoniyasını təmin edirik.
              </p>
              <a
                href="/about"
                className="inline-block px-5 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Daha ətraflı
              </a>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.2}>
            <div>
              <Parallax speed={-10}>
                <Image
                  src="/home/about-preview.jpeg"
                  alt="Mirror Studio interyer dizayn nümunəsi"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </Parallax>
            </div>
          </MotionFadeIn>
        </div>
      </article>

      {/* Featured Projects Preview */}
      <article className="w-full py-20 bg-gray-50">
        <div className="myContainer">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">
              Seçilmiş Layihələr
            </h2>
          </MotionFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {featuredProjects.map((project, idx) => (
              <MotionFadeIn key={idx} delay={idx * 0.1}>
                <div className="rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-medium text-gray-800">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </MotionFadeIn>
            ))}
          </div>
          <MotionFadeIn delay={0.3}>
            <div className="text-center">
              <Link
                href="/projects"
                className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Bütün layihələr
              </Link>
            </div>
          </MotionFadeIn>
        </div>
      </article>

      {/* Work Process Section */}
      <WorkProcessSection />

      {/* Gallery Preview Section */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">
              İlham Qalereyası
            </h2>
          </MotionFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {galleryImages.map((img, index) => (
              <MotionFadeIn key={index} delay={index * 0.05}>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-48 md:h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </MotionFadeIn>
            ))}
          </div>
          <MotionFadeIn delay={0.3}>
            <div className="text-center">
              <a
                href="/gallery"
                className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                Qalereyaya keçid
              </a>
            </div>
          </MotionFadeIn>
        </div>
      </article>

      {/* Contact / Consultation CTA Section */}
      <article className="w-full py-20 bg-gray-100">
        <MotionFadeIn>
          <div className="myContainer text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Sizinlə işləməyə hazıraq
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Layihənizi bizimlə bölüşün və estetik, funksional məkanlar
              yaratmaq üçün ilk addımı atın.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300"
            >
              Əlaqə saxla
            </a>
          </div>
        </MotionFadeIn>
      </article>
    </section>
  );
};
