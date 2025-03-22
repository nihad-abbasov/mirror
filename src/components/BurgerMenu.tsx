"use client";

import { useAtom } from "jotai";
import { isBurgerMenuOpenAtom } from "@/lib/atoms";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

interface MenuItem {
  name: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { name: "Layihələr", href: "/projects" },
  { name: "Qalareya", href: "/gallery" },
  { name: "Haqqımızda", href: "/about" },
  { name: "Əlaqə", href: "/contact" },
];

const navVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useAtom(isBurgerMenuOpenAtom);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.aside
            className="fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white z-50 shadow-lg p-6 flex flex-col gap-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            <button
              className="self-end text-2xl"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* ✅ Search bar */}
            <input
              type="text"
              placeholder="Axtar..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              autoFocus
            />

            {/* Navigation */}
            <motion.nav
              className="flex flex-col gap-4 mt-6"
              variants={navVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {menuItems.map((item) => (
                <motion.div key={item.href} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-800 hover:text-black"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="mt-auto pt-6 border-t border-gray-200">
              {/* Social Icons */}
              <div className="flex items-center gap-4 mb-4">
                <a
                  href="https://www.instagram.com/mirror.cgi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-black"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-black"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-700 hover:text-black"
                  aria-label="Pinterest"
                >
                  <FaPinterestP />
                </a>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-gray-600 space-y-1">
                <p>Email: info@mirrorstudio.az</p>
                <p>Telefon: +994 50 123 45 67</p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
