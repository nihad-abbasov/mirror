import { useEffect, useState } from "react";

export const useRecentlyViewed = () => {
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("recently_viewed");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setRecentSlugs(parsed.slice(0, 3));
      } catch {
        setRecentSlugs([]);
      }
    }
  }, []);

  return recentSlugs;
};
