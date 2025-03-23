"use client";

import { useState } from "react";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Step {
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    title: "İlkin Görüş",
    description:
      "Müştəri ilə ilk təmas zamanı ehtiyaclar, zövqlər və büdcə müzakirə olunur.",

    image: "/home/steps/step1.jpg",
  },
  {
    title: "Planlaşdırma",
    description:
      "Məkanın ölçüləri və istifadə məqsədi əsasında ilkin dizayn planı hazırlanır.",

    image: "/home/steps/step2.jpg",
  },
  {
    title: "Vizualizasiya",
    description:
      "3D modellər vasitəsilə məkanın son görüntüsü vizual olaraq təqdim olunur.",

    image: "/home/steps/step3.jpg",
  },
  {
    title: "İcra və Nəzarət",
    description:
      "Layihənin həyata keçirilməsi müddətində dizayna uyğunluq nəzarətdə saxlanılır.",

    image: "/home/steps/step4.jpg",
  },
  {
    title: "Təhvil",
    description:
      "Hazır məkan keyfiyyət yoxlamasından keçərək müştəriyə təhvil verilir.",

    image: "/home/steps/step5.jpg",
  },
];

export const WorkProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="myContainer">
        <MotionFadeIn>
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-16">
            İşin Gedişatı
          </h2>
        </MotionFadeIn>

        <div className="grid grid-cols-1 gap-6">
          {/* Steps Container */}
          <div className="relative flex flex-col md:flex-row gap-2 md:gap-6">
            {/* Vertical for md+ */}
            <div className="hidden md:flex flex-col gap-6 pl-6 relative w-[40%]">
              {/* Vertical Line */}
              <div className="absolute top-0 left-2 bottom-0 w-px bg-gray-300" />

              {steps.map((step, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative text-left pl-6 cursor-pointer"
                  >
                    {/* Dot */}
                    <span className="absolute -left-[18px] top-1 text-lg">
                      {isActive ? (
                        <FaCheckCircle className="text-black" />
                      ) : (
                        <FaCircle className="text-gray-400" />
                      )}
                    </span>

                    <span
                      className={`block text-sm mb-1 ${
                        isActive ? "text-black font-semibold" : "text-gray-400"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg ${
                        isActive ? "text-black font-semibold" : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Animated Centered Mobile Tabs */}
            <div className="flex md:hidden justify-center mb-6 relative h-[50px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ x: activeIndex > 0 ? 100 : -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: activeIndex > 0 ? -100 : 100, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 absolute"
                >
                  {steps.map((step, index) => {
                    const isVisible =
                      index === activeIndex - 1 ||
                      index === activeIndex ||
                      index === activeIndex + 1;

                    if (!isVisible) return null;

                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`px-4 py-2 rounded-full text-sm transition whitespace-nowrap ${
                          isActive
                            ? "bg-black text-white font-semibold"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        <span className="mr-2 text-gray-400">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-row md:flex-col justify-center items-center gap-3 md:mt-6">
              {/* Previous Button */}
              <motion.button
                whileTap={{ scale: 0.75 }}
                onClick={() => setActiveIndex((prev) => prev - 1)}
                disabled={activeIndex === 0}
                className={`p-4 rounded-full border transition-all duration-300
                    ${
                      activeIndex === 0
                        ? "border-gray-300 text-gray-300 cursor-not-allowed"
                        : "border-black text-black hover:bg-black hover:text-white cursor-pointer"
                    }`}
              >
                <HiChevronLeft size={28} />
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileTap={{ scale: 0.75 }}
                onClick={() => setActiveIndex((prev) => prev + 1)}
                disabled={activeIndex === steps.length - 1}
                className={`p-4 rounded-full border transition-all duration-300
                    ${
                      activeIndex === steps.length - 1
                        ? "bg-gray-300 text-white cursor-not-allowed"
                        : "border-black text-black hover:bg-black hover:text-white cursor-pointer"
                    }`}
              >
                <HiChevronRight size={28} />
              </motion.button>
            </div>

            {/* Content Area */}
            <div className="md:w-[60%] w-full md:pl-10 mt-6 md:mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <Image
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    width={800}
                    height={500}
                    className="w-full h-auto rounded-lg mb-6"
                  />

                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
