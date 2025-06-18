/** @format */

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Remove "services" from the path
  const paths: string[] = location.pathname
    .split("/")
    .filter((segment) => segment && segment.toLowerCase() !== "services");

  const breadcrumbs = paths.map((segment: string, index: number) => {
    const path = "/" + paths.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ");
    const isLast = index === paths.length - 1;

    return (
      <span key={path}>
        <Link
          to={path}
          className={`capitalize ${
            isLast ? "text-blue-600 font-medium" : "text-black"
          }`}>
          {label}
        </Link>
        {index < paths.length - 1 && " / "}
      </span>
    );
  });

  return breadcrumbs.length > 0 ? (
    <div
      style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
      className={`
        transition-all duration-700 ease-in-out overflow-hidden bg-gray-100
        ${isVisible ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
      `}>
      <nav className="text-sm py-2 rounded">
        <Link to="/" className="text-black capitalize">
          Home
        </Link>
        {paths.length > 0 && " / "}
        {breadcrumbs}
      </nav>
    </div>
  ) : null;
};

export default Breadcrumbs;
