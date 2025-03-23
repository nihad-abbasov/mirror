import Link from "next/link";
import { MotionFadeIn } from "@/components/MotionFadeIn";

export const NotFoundView = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <MotionFadeIn>
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-800">
          Səhifə tapılmadı
        </h2>
      </MotionFadeIn>

      <MotionFadeIn delay={0.1}>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Axtardığınız səhifə mövcud deyil və ya silinmişdir. Zəhmət olmasa
          menyudan və ya aşağıdakı düymə ilə naviqasiya edin.
        </p>
      </MotionFadeIn>

      <MotionFadeIn delay={0.2}>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-colors"
        >
          Əsas səhifəyə qayıt
        </Link>
      </MotionFadeIn>
    </section>
  );
};
