import { Instagram, Linkedin, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Four-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="https://hutechsolutions.com/ai-ml-app-development-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">AI/ML</a></li>
              <li><a href="https://hutechsolutions.com/blockchain-development-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Blockchain</a></li>
              <li><a href="https://hutechsolutions.com/courier-management-software/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Courier Management Software</a></li>
              <li><a href="https://hutechsolutions.com/digital-transformation-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Digital Transformation</a></li>
              <li><a href="https://hutechsolutions.com/ecommerce-development-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Ecommerce App Development</a></li>
              <li><a href="https://hutechsolutions.com/erp-implementation-development/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">ERP Implementation</a></li>
              <li><a href="https://hutechsolutions.com/fintech-app-development/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Fintech App Development</a></li>
              <li><a href="https://hutechsolutions.com/mobile-app-development-company/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Mobile App Development</a></li>
              <li><a href="https://hutechsolutions.com/iot-app-development-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">IOT</a></li>
              <li><a href="https://hutechsolutions.com/port-logistics-software-solutions/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Port Logistics</a></li>
              <li><a href="https://hutechsolutions.com/salesforce/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Salesforce Services</a></li>
              <li><a href="https://hutechsolutions.com/ui-ux-design-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">UI/UX</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              <li><a href="https://hutechsolutions.com/integrated-logistic-solutions/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Integrated Logistic Solutions</a></li>
              <li><a href="https://hutechsolutions.com/logistics-supply-chain-software-development/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Logistics & Supply Chain</a></li>
              <li><a href="https://hutechsolutions.com/healthcare-app-development-services/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Healthcare</a></li>
              <li><a href="https://hutechsolutions.com/utilities-and-energy-industries/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Utilities and Energy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Case Studies</h3>
            <ul className="space-y-2">
              <li><a href="https://hutechsolutions.com/transport-management-solutions/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Transport Management Solutions</a></li>
              <li><a href="https://hutechsolutions.com/indoor-positioning-system-tracking/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Vehicle Tracking Solutions</a></li>
              <li><a href="https://hutechsolutions.com/iot-based-track-trace-solutions/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">IOT based Track & Trace Solutions</a></li>
              <li><a href="https://hutechsolutions.com/logistics-and-courier/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Logistics & Courier Software Solutions</a></li>
              <li><a href="https://hutechsolutions.com/rewards-and-recognition/" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Reward and Recognition</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Locations</h3>
            <p className="text-sm font-semibold text-slate-200">Bengaluru (Corporate Office)</p>
            <p className="text-sm text-slate-300">Humantech Solutions India Pvt. Ltd</p>
            <p className="text-sm text-slate-300">163, 1st Floor, 9th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102</p>
            <ul className="space-y-2">
              <li>
                Tel:&nbsp;
                <a href="tel:+918867487771" className="text-sm font-semibold text-slate-200">
                  (+91) 8867487771
                </a>
              </li>
              <li>
                <a href="mailto:sales@hutechsolutions.com" className="text-sm font-semibold text-slate-200">
                  sales@hutechsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Hutech Solutions. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/hutechsolutions/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 hover:text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com/company/hutechsolutions" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-cyan-400" />
            </a>
            <a href="https://www.facebook.com/HutechSolutions" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
