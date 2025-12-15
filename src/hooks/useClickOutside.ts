import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Custom hook to detect clicks outside of a referenced element
 * Useful for closing menus, modals, dropdowns
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  isActive: boolean,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, isActive, onClickOutside]);
};
