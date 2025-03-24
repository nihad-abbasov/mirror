"use client";

import { MotionFadeIn } from "@/components/MotionFadeIn";
import {
  MdDesignServices,
  MdOutlineArchitecture,
  MdOutlineMeetingRoom,
  MdOutlineColorLens,
  MdOutlineBuild,
  MdOutlineBedroomChild,
  MdOutlineLiving,
  MdOutlineKitchen,
  MdOutlineSupportAgent,
} from "react-icons/md";

import Link from "next/link";
import { JSX } from "react";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <MdDesignServices className="text-4xl text-black" />,
    title: "İnteryer Dizayn",
    description: "Yaşayış və iş sahələri üçün funksional və estetik dizaynlar.",
  },
  {
    icon: <MdOutlineArchitecture className="text-4xl text-black" />,
    title: "Planlaşdırma",
    description: "Məkanın səmərəli istifadəsi üçün detallı plan tərtibatı.",
  },
  {
    icon: <MdOutlineColorLens className="text-4xl text-black" />,
    title: "Rəng Palitrası Seçimi",
    description: "Məkanın ruhunu əks etdirən rənglərin uyğunlaşdırılması.",
  },
  {
    icon: <MdOutlineLiving className="text-4xl text-black" />,
    title: "Qonaq Otağı Dizaynı",
    description: "Qonaqlarınızı qarşılayacaq isti və zərif məkanlar.",
  },
  {
    icon: <MdOutlineKitchen className="text-4xl text-black" />,
    title: "Mətbəx Dizaynı",
    description: "Praktik və müasir mətbəx interyerlərinin hazırlanması.",
  },
  {
    icon: <MdOutlineBedroomChild className="text-4xl text-black" />,
    title: "Yataq və Uşaq Otaqları",
    description: "Rahatlıq və estetikliyi birləşdirən şəxsi məkanlar.",
  },
  {
    icon: <MdOutlineBuild className="text-4xl text-black" />,
    title: "Layihə Nəzarəti",
    description: "İcra zamanı dizayna uyğunluğun tam şəkildə təmin edilməsi.",
  },
  {
    icon: <MdOutlineMeetingRoom className="text-4xl text-black" />,
    title: "Ofis və İş Sahələri",
    description: "Effektiv və ilhamverici iş mühitləri yaratmaq.",
  },
  {
    icon: <MdOutlineSupportAgent className="text-4xl text-black" />,
    title: "Məsləhət Xidməti",
    description: "Dizayn və material seçimi üzrə peşəkar rəy və istiqamət.",
  },
];

export const ServicesView = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <article className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-[url('/services/hero.jpg')] bg-cover bg-bottom">
        <div className="absolute inset-0 bg-black/60" />
        <MotionFadeIn>
          <h1 className="text-4xl md:text-6xl font-light text-white relative z-10 px-4 py-2 backdrop-blur-sm bg-white/20 rounded-md">
            Xidmətlərimiz
          </h1>
        </MotionFadeIn>
      </article>

      {/* Services Grid */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">
              Təklif etdiyimiz xidmətlər
            </h2>
          </MotionFadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <MotionFadeIn key={idx} delay={idx * 0.1}>
                <div className="p-6 rounded-xl shadow-md border hover:shadow-lg transition min-h-[250px] flex flex-col">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <article className="w-full bg-gray-100 py-20">
        <div className="myContainer text-center">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
              Bizimlə işləməyə hazırsınız?
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Layihənizi bizə etibar edin — funksional və zövqlü məkanlar
              yaradaq.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 rounded-full"
            >
              Əlaqə saxla
            </Link>
          </MotionFadeIn>
        </div>
      </article>
    </section>
  );
};
