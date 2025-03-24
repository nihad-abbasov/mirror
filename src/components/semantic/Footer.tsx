import { FaInstagram, FaFacebookF, FaPinterest } from "react-icons/fa";
import { FooterNewsletter } from "../FooterNewsletter";
import Link from "next/link";

const year: number = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-4 bg-gray-800 text-gray-100">
      <div className="footer_inner myContainer grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Social Media */}
        <nav aria-label="Sosial media">
          <h3 className="font-semibold mb-4">Bizi izlə</h3>
          <ul className="flex gap-4">
            {[
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
            ].map(({ name, url, icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-400 transition-colors duration-200"
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
          <h3 className="font-semibold mb-6">Qısa yollar</h3>
          <ul className="space-y-2">
            {[
              { label: "Əsas səhifə", href: "/" },
              { label: "Haqqımızda", href: "/about" },
              { label: "Layihələr", href: "/projects" },
              { label: "Əlaqə", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-gray-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter subscription */}
        <FooterNewsletter />
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        <p className="!mb-2">
          &copy; {year} Mirror Studio. Bütün hüquqlar qorunur.
        </p>
        <p className="!mb-0">
          Created by{" "}
          <Link
            href="https://instagram.com/creadive.az"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300 transition-colors duration-200"
          >
            Creadive
          </Link>
        </p>
      </div>
    </footer>
  );
};
