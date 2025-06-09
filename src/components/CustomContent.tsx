import React from 'react';
import { Globe, Shield, Clock, Award } from 'lucide-react';

const CustomContent: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-cyan-600" />,
      title: "Global Reach",
      description: "Serving businesses across US, India, UK, Australia, and UAE"
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      title: "100% Guarantee",
      description: "Money-back guarantee on all our services"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and support"
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-600" />,
      title: "Enterprise Grade",
      description: "Solutions meeting global standards"
    }
  ];

  return (
    <section className="pb-12 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-12 leading-tight text-center">
            Global Cloud Infrastructure Solutions at
            <span className="text-cyan-600"> Competitive Prices</span>
          </h2>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="space-y-8 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
            <p>
              Looking for affordable Cloud-Native Infrastructure solutions, SRE services, or Network and System Monitoring that don't compromise on quality? At Hutech Solutions, we provide cost-effective, enterprise-grade IT infrastructure and reliability engineering services tailored for businesses in the US, India, UK, Australia, and the UAE.
            </p>
            <p>
              Our expert team ensures seamless cloud-native deployments, proactive site reliability engineering, and 24/7 system monitoring to keep your operations running smoothly. With our budget-friendly pricing, transparent support, and a 100% money-back guarantee, you get peace of mind while scaling your digital operations.
            </p>
            <p>
              Whether you're a startup or an enterprise, our cloud infrastructure and monitoring solutions are designed to meet global standards—without the hefty price tag.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white text-lg font-semibold hover:bg-cyan-700 transition-colors rounded-lg"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomContent;