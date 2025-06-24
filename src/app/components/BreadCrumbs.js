/** @format */

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const paths = pathname.split("/").filter(Boolean);

  console.log("aths", paths, "--", pathname);

  const dynamicBreadcrumb =
    paths.length > 0 ? (
      <>
        {/* {" / "}
        <Link href={`/`} className="text-black capitalize">
          Cloud Transformation
        </Link> */}
        {paths[1] && (
          <>
            {" / "}
            <span className="capitalize text-blue-600 font-medium">
              {paths[1].replace(/-/g, " ")}
            </span>
          </>
        )}
      </>
    ) : null;

  return (
    <div
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
      className={`transition-all duration-700 ease-in-out overflow-hidden bg-gray-100 ${
        isVisible ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
      }`}>
      <nav className="text-sm py-2 rounded">
        <a href="https://hutechsolutions.com" className="text-black capitalize">
          Home {" / "}
        </a>
        <Link
          href="/"
          className={
            pathname === "/" ? "text-blue-600 font-medium" : "text-black"
          }>
          Cloud Transformation
        </Link>
        {dynamicBreadcrumb}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
