// Nav.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface NavItem {
  id: number;
  name: string;
  url: string;
}

interface NavProps {
  isScrolled?: boolean;
}

const navItems: NavItem[] = [
  { id: 1, name: "Layihələr", url: "/projects" },
  { id: 2, name: "Qalareya", url: "/gallery" },
  { id: 3, name: "Haqqımızda", url: "/about" },
  { id: 4, name: "Əlaqə", url: "/contact" },
  // { id: 5, name: "Xidmətlərimiz", url: "/services" },
  // { id: 6, name: "FAQ", url: "/faq" },
];

export const Nav = ({ isScrolled = false }: NavProps) => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="flex flex-row items-center gap-4">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            animate={{
              scale: isScrolled ? 0.95 : 1,
              opacity: isScrolled ? 0.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative py-2 px-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200"
          >
            <Link
              href={item.url}
              className="hover:text-gray-600 transition-colors"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
