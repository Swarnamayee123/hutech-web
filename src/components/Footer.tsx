/** @format */

import React from "react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
// import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const linkClass =
    "text-sm text-slate-300 hover:text-cyan-400 transition-colors";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Four-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {/* <li><Link to ="/CloudArchitecture" className={linkClass}>What is Cloud Native Architecture?</Link></li> */}
              <li>
                <a
                  href="https://hutechsolutions.com/ai-ml-app-development-services/"
                  className={linkClass}>
                  AI/ML
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/blockchain-development-services/"
                  className={linkClass}>
                  Blockchain
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/courier-management-software/"
                  className={linkClass}>
                  Courier Management Software
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/digital-transformation-services/"
                  className={linkClass}>
                  Digital Transformation
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/ecommerce-development-services/"
                  className={linkClass}>
                  Ecommerce App Development
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/erp-implementation-development/"
                  className={linkClass}>
                  ERP Implementation
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/fintech-app-development/"
                  className={linkClass}>
                  Fintech App Development
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/mobile-app-development-company/"
                  className={linkClass}>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/iot-app-development-services/"
                  className={linkClass}>
                  IOT
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/port-logistics-software-solutions/"
                  className={linkClass}>
                  Port Logistics
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/salesforce/"
                  className={linkClass}>
                  Salesforce Services
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/ui-ux-design-services/"
                  className={linkClass}>
                  UI/UX
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hutechsolutions.com/integrated-logistic-solutions/"
                  className={linkClass}>
                  Integrated Logistic Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/logistics-supply-chain-software-development/"
                  className={linkClass}>
                  Logistics & Supply Chain
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/healthcare-app-development-services/"
                  className={linkClass}>
                  Healthcare
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/utilities-and-energy-industries/"
                  className={linkClass}>
                  Utilities and Energy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Case Studies</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://hutechsolutions.com/transportation-and-logistics/"
                  className={linkClass}>
                  Transport Management Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/hutrac/"
                  className={linkClass}>
                 Vehicle Tracking Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/iot-fleet-management/"
                  className={linkClass}>
                 IOT based Track & Trace Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/logistics-and-courier/"
                  className={linkClass}>
                 Logistics & Courier Software Solutions
                </a>
              </li>
              <li>
                <a
                  href="https://hutechsolutions.com/rewards-and-recognition/"
                  className={linkClass}>
                  Reward and Recognition
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
            <p className="text-sm font-semibold text-slate-200">
  Bengaluru (Corporate Office)
</p>
<p className="text-sm text-slate-300 ">
Humantech Solutions India Pvt. Ltd
</p>
<p className="text-sm text-slate-300 ">
  163, 1st Floor, 9th Main Rd, Sector 6, HSR Layout, Bengaluru,
  Karnataka 560102
</p>
            <ul className="space-y-2">
  <li>
    Tel:&nbsp;
    <a href="tel:+918867487771" className={`${linkClass} font-semibold`}>
      (+91) 8867487771
    </a>
  </li>
  <li>
    <a
      href="mailto:sales@hutechsolutions.com"
      className={`${linkClass} font-semibold`}>
      sales@hutechsolutions.com
    </a>
  </li>
</ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Hutech Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/hutechsolutions/"
              target="_blank"
              rel="noopener noreferrer">
              <Instagram className="h-5 w-5 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.linkedin.com/company/hutechsolutions"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-cyan-400" />
            </a>
            <a
              href="https://www.facebook.com/HutechSolutions"
              target="_blank"
              rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
