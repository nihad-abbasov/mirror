"use client";

import { useEffect, useState } from "react";
import { Input, Collapse } from "antd";
import type { CollapseProps } from "antd";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { useDebounce } from "@/hooks/useDebounce";
import Link from "next/link";

const { Search } = Input;

const faqs = [
  {
    question: "Mirror Studio nə işlə məşğuldur?",
    answer:
      "Mirror Studio interyer dizayn xidmətləri göstərir – mənzillər, ofislər və digər məkanlar üçün dizayn həlləri yaradır.",
  },
  {
    question: "İlk görüşdə nə müzakirə olunur?",
    answer:
      "İlk görüş zamanı ehtiyaclar, zövqlər, büdcə və ümumi gözləntilər müzakirə olunur.",
  },
  {
    question: "Dizayn planlaması necə aparılır?",
    answer:
      "Məkanın ölçüləri, məqsədi və müştərinin istəkləri əsasında plan hazırlanır.",
  },
  {
    question: "3D vizualizasiya təqdim edirsiniz?",
    answer:
      "Bəli, layihəni təsəvvür etməkdə kömək edən 3D modellər təqdim olunur.",
  },
  {
    question: "Layihənin icrası nə qədər çəkir?",
    answer:
      "Layihənin ölçüsünə və mürəkkəbliyinə əsasən icra müddəti dəyişir. Ortalama 2-8 həftə davam edir.",
  },
  {
    question: "Qiymətləndirmə necə aparılır?",
    answer:
      "Qiymət layihənin həcminə, materiallara və xidmət növlərinə əsasən hesablanır.",
  },
  {
    question: "Dizayn dəyişiklikləri mümkündür?",
    answer: "Bəli, müştəri razı qalmadığı hallarda düzəlişlər edilə bilər.",
  },
  {
    question: "Layihə başa çatdıqdan sonra dəstək göstərirsiniz?",
    answer: "Bəli, layihə sonrası texniki və dizayn dəstəyi təklif olunur.",
  },
];

// Helper function to highlight search term
const highlightMatch = (text: string, term: string) => {
  if (!term.trim()) return text;

  const regex = new RegExp(`(${term})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="!bg-yellow-300 text-black px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

export const FaqView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 500);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(debouncedTerm.toLowerCase())
  );

  const items: CollapseProps["items"] = filteredFaqs.map((faq, idx) => ({
    key: String(idx),
    label: (
      <span className="font-medium text-gray-800">
        {highlightMatch(faq.question, searchTerm)}
      </span>
    ),
    children: (
      <p className="text-gray-600 leading-relaxed">
        {highlightMatch(faq.answer, searchTerm)}
      </p>
    ),
  }));

  return (
    <section className="w-full bg-white py-20">
      <div className="w-[95%] md:myContainer max-w-3xl mx-auto">
        <MotionFadeIn>
          <h1 className="text-3xl md:text-4xl font-light text-center mb-10 text-gray-800">
            Tez-tez verilən suallar
          </h1>
        </MotionFadeIn>

        <Search
          placeholder="Axtar..."
          allowClear
          size="large"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-8"
        />

        <MotionFadeIn>
          {filteredFaqs.length > 0 ? (
            <>
              <Collapse
                accordion
                items={items}
                bordered={false}
                className="bg-white"
              />
              <div className="text-center mt-12">
                <p className="text-gray-600 !mb-2 text-lg">
                  Sualınızı tapmadınız?
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded-full"
                >
                  Bizimlə əlaqə saxlayın
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg">Axtardığınız sual tapılmadı.</p>
            </div>
          )}
        </MotionFadeIn>
      </div>
    </section>
  );
};
