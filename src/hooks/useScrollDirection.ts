// hooks/useScrollDirection.ts
import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 250);

      if (currentScrollY > lastScrollY && currentScrollY > 250) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return { scrollDirection, isScrolled };
};
