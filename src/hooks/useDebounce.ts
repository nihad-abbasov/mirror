import { useState, useEffect } from "react";

/**
 * Reusable debounce hook
 * @param value - the value to debounce
 * @param delay - debounce time in ms (default is 500)
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
