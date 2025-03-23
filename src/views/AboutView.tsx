"use client";

import { MotionFadeIn } from "@/components/MotionFadeIn";
import Image from "next/image";

interface CoreValue {
  title: string;
  desc: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Estetik Yanaşma",
    desc: "Sadə və incə görünüşə sahib dizaynlar təqdim edirik.",
  },
  {
    title: "Funksionallıq",
    desc: "Hər dizayn rahat istifadəni nəzərə alaraq planlanır.",
  },
  {
    title: "Şəffaflıq",
    desc: "Müştəri ilə açıq və dürüst ünsiyyət prioritetimizdir.",
  },
  {
    title: "Detallara Diqqət",
    desc: "Ən xırda elementlər belə ümumi estetikanın parçasıdır.",
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Nihad Abbasov",
    role: "Qrafik dizayner",
    image: "/about/m1.jpg",
  },
  {
    name: "Ənvər Nağıyev",
    role: "3D dizayner",
    image: "/about/m2.jpg",
  },
  {
    name: "Alış Həziyev",
    role: "İnteryer dizayner",
    image: "/about/m3.png",
  },
];

export const AboutView = () => {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <article className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center bg-[url('/about/hero.jpg')] bg-cover bg-center text-white text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <MotionFadeIn>
          <h1 className="text-4xl md:text-6xl font-light backdrop-blur-sm bg-white/30 px-4 py-2 rounded-md">
            Haqqımızda
          </h1>
        </MotionFadeIn>
      </article>

      {/* Who We Are */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <MotionFadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Biz Kimik?
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Mirror Studio müasir interyer dizaynı sahəsində estetik və
                funksionallığı bir araya gətirən yaradıcı komandadır. Məqsədimiz
                insanlara unikal və rahat məkanlar təqdim etməkdir.
              </p>
              <p className="text-gray-600 text-lg">
                Yaxşı dizayn yalnız görünüş deyil — hisslər yaratmaqdır.
                Məkanlarınızda dəyərlər və zövqlə harmoniyanı təmin edirik.
              </p>
            </div>
          </MotionFadeIn>
          <MotionFadeIn delay={0.2}>
            <div>
              <Image
                src="/about/team.jpg"
                alt="Mirror Studio komanda"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </MotionFadeIn>
        </div>
      </article>

      {/* Vision Section */}
      <article className="w-full py-20 bg-gray-50 text-center">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            Baxışımız
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Biz inanırıq ki, hər məkan bir hekayə daşıyır. Həmin hekayəni sizin
            zövqünüzlə uyğunlaşdıraraq, yaşayış və iş sahələrini funksional
            sənət əsərinə çeviririk.
          </p>
        </MotionFadeIn>
      </article>

      {/* Core Values Section */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">
              Əsas Dəyərlərimiz
            </h2>
          </MotionFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <MotionFadeIn key={idx} delay={idx * 0.1}>
                <div className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </article>

      {/* Meet the Team */}
      <article className="w-full py-20 bg-gray-50">
        <div className="myContainer">
          <MotionFadeIn>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">
              Komanda ilə Tanış Olun
            </h2>
          </MotionFadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <MotionFadeIn key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    sizes="100vw"
                    className="w-full h-auto object-contain aspect-square"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </MotionFadeIn>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
