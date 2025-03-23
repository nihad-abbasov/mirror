export interface Project {
  id: number;
  title: string;
  slug: string;
  image: string;
  category: string;
  description: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Mətbəx",
    slug: "modern-metbex",
    image: "/projects/p1.jpg",
    category: "Evin iç dizaynı",
    description:
      "Bu layihə mütəriyin zövqü və praktik ehtiyaclarına uyğun olaraq planlanmışdır. Açıq rəng palitrası və funksional detallar ışıqlıq və estetik harmoniyanı vurğulayır.",
    gallery: ["/gallery/g1.jpg", "/gallery/g2.webp", "/gallery/g3.jpg"],
  },
  {
    id: 2,
    title: "Minimalist Qonaq Otağı",
    slug: "minimalist-qonaq-otagi",
    image: "/projects/p2.webp",
    category: "Evin iç dizaynı",
    description:
      "Minimalizmin zərifliyi və funksionallığı bu qonaq otağı dizaynında ön plandadır. Yumşaq tonlar və təbii ķışıq istifadə olunmuşdur.",
    gallery: ["/gallery/g2.webp", "/gallery/g3.jpg", "/gallery/g1.jpg"],
  },
  {
    id: 3,
    title: "Skandinaviya Ofisi",
    slug: "skandinaviya-ofisi",
    image: "/projects/p3.jpg",
    category: "Ofis dizaynı",
    description:
      "Bu layihə skandinaviya türü interyerin sadə və istifadəyə yararlı elementlərinə fokuslanmışdır. Təbii materiallar və neytral rənglər istifadə olunmuşdur.",
    gallery: ["/gallery/g3.jpg", "/gallery/g1.jpg", "/gallery/g2.webp"],
  },
];
