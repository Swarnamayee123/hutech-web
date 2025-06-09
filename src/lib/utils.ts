/** @format */

// hooks/useOutsideClick.js

import { useEffect } from "react";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const useOutsideClick = (ref:any, callback:any) => {
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

export default useOutsideClick;
