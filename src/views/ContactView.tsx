"use client";

import { InputTextareaField } from "@/components/form/InputTextareaField";
import { InputTextField } from "@/components/form/InputTextField";
import { CFormProvider } from "@/components/form/CFormProvider";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  fullname: yup.string().required("Bu xana vacibdir"),
  email: yup.string().required("Bu xana vacibdir"),
  message: yup.string().required("Bu xana vacibdir"),
});

type FormValues = yup.InferType<typeof schema>;

export const ContactView = () => {
  const methods = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const {
    formState: { isSubmitting },
  } = methods;

  // TODO: consider notifications for success and error states on submit
  const handleSubmit = async (formData: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    await methods.reset();
  };

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
            <CFormProvider
              methods={methods}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <InputTextField
                name="fullname"
                label="Ad Soyad"
                placeholder="Abbas Abbasov"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm outline-none "
              />

              <InputTextField
                name="email"
                label="Email"
                placeholder="mirror@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm outline-none "
              />

              <InputTextareaField
                name="message"
                label="Mesajınız"
                placeholder="İstəklərinizi burada qeyd edin"
              />
              <input
                type="submit"
                disabled={isSubmitting}
                value={isSubmitting ? "Göndərilir" : "Göndər"}
                className="inline-block px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </CFormProvider>
          </MotionFadeIn>
        </div>
      </article>
    </section>
  );
};
