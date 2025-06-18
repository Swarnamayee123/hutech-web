/** @format */

import React, { useRef, useState } from "react";
import useOutsideClick from "../lib/utils.js";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./BreadCrumbs";
import { Menu, X } from "lucide-react";

// Mobile Services expandable component for mobile view
const MobileServices = ({ closeMenu }: { closeMenu?: () => void }) => {
  const [showMobileServices, setShowMobileServices] = useState(false);

  const servicesLinks = [
    ["cloud-migration", "Cloud Migration"],
    ["cloud-consulting", "Cloud Consulting"],
    ["cloud-cost-optimization", "Cloud Cost Optimization"],
    ["devops-consulting-services", "DevOps Consulting Services"],
    ["sre-service", "SRE as a Service"],
    ["cloud-native-architecture", "Cloud Native Architecture"],
    ["cloud-native-development", "Cloud Native Development"],
    ["cloud-infrastructure-services", "Cloud Infrastructure Services"],
    ["cloud-native-data-service", "Cloud Native Data Services"],
    ["cloud-managed-services", "Cloud Managed Services"],
    ["cloud-applications-modernization", "Cloud Application Modernization"],
    ["cloud-security-and-compliance", "Cloud Security & Compliance"],
    ["ci-cd-pipelines", "CI/CD & Dev Experience"],
  ];

  return (
    <div className="w-full">
      <button
        onClick={() => setShowMobileServices(!showMobileServices)}
        className="flex justify-between items-center w-full text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-semibold">
        <span>Services</span>
        <svg
          className={`w-4 h-4 mt-[2px] transform transition-transform ${
            showMobileServices ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {showMobileServices && (
        <ul className="mt-2 space-y-2 pl-4 border-l-2 border-cyan-600">
          {servicesLinks.map(([path, label]) => (
            <li key={path}>
              <NavLink
                to={`/services/${path}`}
                onClick={() => {
                  if (closeMenu) closeMenu();
                  setShowMobileServices(false);
                }}
                className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-slate-700 rounded">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [shownavbar, setShownavbar] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => setServicesOpen((prev) => !prev);
  const servicesRef = useRef(null);

  useOutsideClick(servicesRef, () => setShowServices(false));

  const isServicesPage =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/services");

  // Menu items except Services
  const menuItems = [
    { label: "Home", url: "https://hutechsolutions.com/home/" },
    { label: "About", url: "https://hutechsolutions.com/about/" },
    { label: "Blog", url: "https://hutechsolutions.com/blog/" },
    { label: "Careers", url: "https://hutechsolutions.com/careers/" },
    { label: "Case Studies", url: "https://hutechsolutions.com/case-studies/" },
    { label: "Contact", url: "https://hutechsolutions.com/contact/" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 shadow-md transition-colors duration-200">
      <div
        className="container "
        style={{
          paddingLeft: "8vw",
          paddingRight: "8vw",
          // margin: " 0 auto",
          width: "100vw",
        }}>
        <div className="flex justify-between items-center py-4 space-x-4">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.hutechsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity">
              <img
                src="https://hutechsolutions.com/wp-content/uploads/2024/08/hutech-logo-1.svg"
                alt="Hutech Solutions Logo"
                className="h-12 w-32"
              />
            </a>
            <a
              href="https://hutechsolutions.com/cmmi-maturity-level-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity">
              <img
                src="https://hutechsolutions.com/wp-content/uploads/2024/08/cmmi-level3-logo.svg"
                alt="CMMI Level 3 Logo"
                className="h-12"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setShownavbar(!shownavbar)}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition">
              {shownavbar ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {/* Menu items before Services */}
            {menuItems.slice(0, 2).map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {label}
              </a>
            ))}

            {/* Services dropdown trigger */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              ref={servicesRef}>
              <button
                onMouseEnter={toggleServices}
                className={`text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 ${
                  isServicesPage ? "font-semibold" : ""
                }`}>
                Services
                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* Menu items after Services */}
            {menuItems.slice(2).map(({ label, url }) => (
              <a
                key={label}
                href={url}
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {shownavbar && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 flex flex-col items-start px-6 py-4 space-y-4 z-40">
          {/* Menu items before Services */}
          {menuItems.slice(0, 2).map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors w-full">
              {label}
            </a>
          ))}

          {/* Mobile Services Accordion */}
          <MobileServices closeMenu={() => setShownavbar(false)} />

          {/* Menu items after Services */}
          {menuItems.slice(2).map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors w-full">
              {label}
            </a>
          ))}
        </nav>
      )}

      {/* Services Dropdown (desktop) */}
      {servicesOpen && (
        <div
          onMouseLeave={toggleServices}
          className="fixed inset-x-0 top-16 z-50 bg-white dark:bg-slate-800 shadow-lg mt-4">
          <div className="max-w-screen-2xl mx-auto pl-8 pr-[14rem] py-10 grid grid-cols-1 md:grid-cols-4 items-start">
            {/* Column 1 */}
            <ul className="space-y-2">
              {[
                ["cloud-migration", "Cloud Migration"],
                ["cloud-consulting", "Cloud Consulting"],
                ["cloud-cost-optimization", "Cloud Cost Optimization"],
                ["devops-consulting-services", "DevOps Consulting Services"],
                ["sre-service", "SRE as a Service"],
              ].map(([path, label]) => (
                <li key={path}>
                  <NavLink
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                    to={`/services/${path}`}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2">
              {[
                ["cloud-native-architecture", "Cloud Native Architecture"],
                ["cloud-native-development", "Cloud Native Development"],
                [
                  "cloud-infrastructure-services",
                  "Cloud Infrastructure Services",
                ],
                ["cloud-native-data-service", "Cloud Native Data Services"],
                ["cloud-managed-services", "Cloud Managed Services"],
              ].map(([path, label]) => (
                <li key={path}>
                  <NavLink
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                    to={`/services/${path}`}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-2">
              {[
                [
                  "cloud-applications-modernization",
                  "Cloud Application Modernization",
                ],
                [
                  "cloud-security-and-compliance",
                  "Cloud Security & Compliance",
                ],
                ["ci-cd-pipelines", "CI/CD & Dev Experience"],
              ].map(([path, label]) => (
                <li key={path}>
                  <NavLink
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded"
                    to={`/services/${path}`}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Column 4 */}
            <div
              className="hidden md:block col-span-1 ml-8 w-[70vh] border-l"
              style={{ borderColor: "#ddd", borderLeftWidth: "1px" }}>
              <div className="flex flex-col justify-center space-y-4 text-left pl-6">
                <h3 className="text-3xl font-bold text-[#0B2C4D]">
                  Your Trusted{" "}
                  <span className="text-[#FFA500]">Software Partner.</span>
                </h3>
                <p className="text-gray-600 text-lg max-w-md">
                  A top software supplier since 2019 with more than 100+ staff
                  members that offers cutting-edge solutions to optimize
                  corporate procedures.
                </p>
                <div className="flex flex-col space-y-2 max-w-[11rem]">
                  <a
                    href="https://hutechsolutions.com/contact/"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Breadcrumbs />
    </header>
  );
};

export default Header;
