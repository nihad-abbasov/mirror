"use client";

import Link from "next/link";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";
import { projects } from "@/lib/data/projects";
import { MotionFadeIn } from "@/components/MotionFadeIn";

export const NotFoundView = () => {
  const recentSlugs = useRecentlyViewed();

  const recentProjects = recentSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean); // remove undefined

  const staticLinks = [
    { label: "Layihələrimiz", href: "/projects" },
    { label: "Haqqımızda", href: "/about" },
    { label: "Əlaqə", href: "/contact" },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <MotionFadeIn>
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
          Səhifə tapılmadı
        </h2>
      </MotionFadeIn>

      <MotionFadeIn delay={0.1}>
        <p className="text-lg text-gray-600 mb-8 max-w-xl">
          Axtardığınız səhifə mövcud deyil və ya silinmişdir.
        </p>
      </MotionFadeIn>

      {/* Static Suggestions */}
      <MotionFadeIn delay={0.2}>
        <div className="mb-10">
          <h3 className="text-base font-medium text-gray-700 mb-4">
            Faydalı keçidlər:
          </h3>
          <ul className="flex flex-wrap justify-center gap-4">
            {staticLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 border border-black text-black text-sm hover:bg-black hover:text-white rounded-full transition-colors duration-150 block min-w-40"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MotionFadeIn>

      {/* Recently Viewed */}
      {recentProjects.length > 0 && (
        <MotionFadeIn delay={0.3}>
          <div>
            <h3 className="text-base font-medium text-gray-700 mb-4">
              Son baxdığınız layihələr:
            </h3>
            <ul className="flex flex-wrap justify-center gap-4">
              {recentProjects.map((project) => (
                <li key={project!.slug}>
                  <Link
                    href={`/projects/${project!.slug}`}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {project!.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </MotionFadeIn>
      )}
    </section>
  );
};
