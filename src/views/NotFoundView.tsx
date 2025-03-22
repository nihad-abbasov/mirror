import Link from "next/link";

export const NotFoundView = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">
        Səhifə tapılmadı
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        axtarilan sehifeni tapmaq mumkun olmadi
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </section>
  );
};
