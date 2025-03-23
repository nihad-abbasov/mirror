"use client";

import { MotionFadeIn } from "@/components/MotionFadeIn";

export const ContactView = () => {
  return (
    <section className="w-full">
      {/* Page Heading */}
      <article className="w-full h-[40vh] md:h-[50vh] flex items-center justify-center bg-[url('/contact/hero.jpg')] bg-cover bg-top relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <MotionFadeIn>
          <h1 className="text-4xl md:text-6xl font-light text-white relative z-10 px-4 py-2 backdrop-blur-sm bg-white/30 rounded-md">
            Əlaqə
          </h1>
        </MotionFadeIn>
      </article>

      {/* Info + Form Section */}
      <article className="w-full py-20 bg-white">
        <div className="myContainer grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <MotionFadeIn>
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-4">
                Bizimlə əlaqə saxlayın
              </h2>
              <p className="text-gray-600 mb-6">
                Layihəniz barədə danışmaq, təklif almaq və ya hər hansı bir sual
                vermək istəyirsinizsə, bizimlə əlaqə saxlamaqdan çəkinməyin.
              </p>
              <div className="space-y-4 text-gray-700 text-sm">
                <p>
                  <strong>📍 Ünvan:</strong> Bakı, Azərbaycan
                </p>
                <p>
                  <strong>📞 Telefon:</strong> +994 50 123 45 67
                </p>
                <p>
                  <strong>✉️ Email:</strong> info@mirrorstudio.az
                </p>
              </div>
            </div>
          </MotionFadeIn>

          {/* Contact Form */}
          <MotionFadeIn delay={0.2}>
            <form className="space-y-6">
              <div>
                <label
                  className="block mb-1 text-sm text-gray-700"
                  htmlFor="name"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-black focus:border-black"
                  placeholder="Ad Soyad"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-black focus:border-black"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label
                  className="block mb-1 text-sm text-gray-700"
                  htmlFor="message"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-1 focus:ring-black focus:border-black resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
              <button
                type="button"
                className="inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Göndər
              </button>
            </form>
          </MotionFadeIn>
        </div>
      </article>
    </section>
  );
};
