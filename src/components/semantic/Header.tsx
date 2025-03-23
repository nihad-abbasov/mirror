"use client";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { isBurgerMenuOpenAtom } from "@/lib/atoms";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "./Nav";
import clsx from "clsx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Header = () => {
  const { scrollDirection, isScrolled } = useScrollDirection();

  const [, setIsOpen] = useAtom(isBurgerMenuOpenAtom);

  return (
    <header
      className={clsx(
        "w-full bg-gray-100 py-0 sticky top-0 z-50 transition-transform duration-300",
        {
          "translate-y-0": scrollDirection === "up",
          "-translate-y-full": scrollDirection === "down",
        }
      )}
    >
      <div className="header_inner myContainer flex items-center justify-between">
        <Link href="/" className="logo_container block">
          <motion.div
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Image
              src="/logo.png"
              alt="Mirror Studio Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-1/2 h-auto max-w-[160px]"
              priority
            />
          </motion.div>
        </Link>
        {/* Burger Icon for mobile */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <HiOutlineMenuAlt3 />
        </button>
        <div className="hidden md:block">
          <Nav isScrolled={isScrolled} />
        </div>
      </div>
    </header>
  );
};
