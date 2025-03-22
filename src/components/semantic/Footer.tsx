// Footer.tsx
import { FaInstagram, FaFacebookF, FaPinterest } from "react-icons/fa";
import Link from "next/link";
import { JSX } from "react";

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

interface QuickLink {
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mirror.cgi",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <FaFacebookF />,
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
    icon: <FaPinterest />,
  },
];

const quickLinks: QuickLink[] = [
  { label: "Əsas səhifə", href: "/" },
  { label: "Haqqımızda", href: "/about" },
  { label: "Layihələr", href: "/projects" },
  { label: "Əlaqə", href: "/contact" },
];

const year: number = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-100 text-gray-800">
      <div className="footer_inner myContainer grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media */}
        <nav aria-label="Sosial media">
          <h3 className="font-semibold mb-4">Bizi izlə</h3>
          <ul className="flex gap-4">
            {socialLinks.map(({ name, url, icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-600 transition-colors duration-200"
                  aria-label={name}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Links */}
        <nav aria-label="Footer navigation">
          <h3 className="font-semibold mb-4">Qısa yollar</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-600 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <div className="flex flex-col justify-between md:items-end text-sm text-gray-600">
          <p className="text-sm">
            &copy; {year} Mirror Studio. Bütün hüquqlar qorunur.
          </p>
          <p className="text-sm">
            Created by{" "}
            <a
              href="https://creadive.az"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-gray-600 transition-colors duration-200"
            >
              Creadive
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
