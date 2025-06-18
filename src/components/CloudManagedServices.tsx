/** @format */

import React from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Cpu,
  Cog,
  DollarSign,
  TrendingUp,
  Users,
  Cloud,
  Database,
  BarChart3,
  HardDrive,
  Settings,
  Umbrella,
  ArrowRightLeft,
  AlertTriangle,
  TrendingDown,
  Target,
  Lightbulb,
} from "lucide-react";
import {
  Server,
  Command,
  FileText,
  Clock,
  Wrench,
  RefreshCw,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const CloudManagedServices = () => {
  const features = [
    {
      icon: Cpu,
      title: "Automation & Self-Service",
      description: "Deliver consistent value through automated capabilities",
    },
    {
      icon: DollarSign,
      title: "Quality Pricing Models",
      description: "Flexible pay-as-you-go pricing and delivery models",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Utmost security standards and compliance requirements",
    },
  ];
  const future = [
    "Rapid cloud deployments configured and tailored to your business needs",
    "Enhanced compliance and security features",
    "Scalability and agility with flexible pay-as-you-go models",
    "High productivity through effective resource utilization",
    "Continuous guidance from planning strategies to execution",
    "Business continuity with ease in handling heavy workloads",
  ];

  const benefits = [
    {
      icon: Server,
      title: "Robust Infrastructure",
      description:
        "Round-the-clock management with efficient network infrastructure, monitoring, scanning, and reporting.",
    },
    {
      icon: Command,
      title: "Centralized Services",
      description:
        "All applications managed from centralized data centers with remote access and increased productivity.",
    },
    {
      icon: FileText,
      title: "Service Level Agreements",
      description:
        "Effective SLAs ensure better control across service levels for business continuity.",
    },
    {
      icon: Shield,
      title: "Data Safety & Recovery",
      description:
        "Assured data safety through timely backups and faster recovery across all cloud services.",
    },
    {
      icon: Clock,
      title: "Quick Response Time",
      description:
        "Rapid issue resolution saving you valuable time and effort with 24/7 support.",
    },
    {
      icon: Users,
      title: "Effective Interfacing",
      description:
        "Primary liaison with cloud vendors for critical issues and cost control recommendations.",
    },
    {
      icon: DollarSign,
      title: "Planned Investment",
      description:
        "Tailored monthly service plans to optimize your IT investment and expenditure.",
    },
    {
      icon: Wrench,
      title: "Reduced Maintenance",
      description:
        "Outsourcing relieves your organization from costly network maintenance burdens.",
    },
    {
      icon: RefreshCw,
      title: "Timely Updates",
      description:
        "Stay up-to-date with latest technology and software upgrades automatically.",
    },
    {
      icon: Package,
      title: "Integrated Services",
      description:
        "Flexible solutions with pay-per-usage plans and converged security monitoring.",
    },
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Rapid deployment configured to your business needs",
    },
    {
      icon: Shield,
      title: "Cloud Security",
      description: "Enhanced compliance and security features",
    },
    {
      icon: Database,
      title: "Network and Storage Management",
      description: "Comprehensive infrastructure management",
    },
    {
      icon: BarChart3,
      title: "Cloud Monitoring and Reporting",
      description: "Real-time insights and analytics",
    },
    {
      icon: HardDrive,
      title: "Backup and Disaster Recovery",
      description: "Data safety and business continuity",
    },
    {
      icon: Settings,
      title: "Infrastructure Setup",
      description: "Scalable and agile solutions",
    },
    {
      icon: Umbrella,
      title: "Business Continuity Planning",
      description: "Seamless operations under any circumstance",
    },
    {
      icon: ArrowRightLeft,
      title: "Cloud Migration Services",
      description: "Smooth transition to cloud environments",
    },
  ];

  const consequences = [
    {
      icon: AlertTriangle,
      title: "Operational Consequences",
      description:
        "Hiring the wrong Cloud MSP can create significant operational disruptions affecting sales, supply chains, and distributions within your cloud infrastructure.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Shield,
      title: "Security Consequences",
      description:
        "Applications running on public cloud may expose your organization to security vulnerabilities, making strategic security implementation critical.",
      color: "text-orange-600 bg-orange-100",
    },
    {
      icon: TrendingDown,
      title: "Reduced Overall Value",
      description:
        "Poor service support or costly upgrades that don't add immediate value may require reviewing your managed service strategy.",
      color: "text-yellow-600 bg-yellow-100",
    },
  ];

  return (
    <>
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Managed-Services.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  height: "100vh",
          marginTop: "6rem",
          paddingLeft: "7.5vw",
          paddingRight: "5.5vw",
          width: "100vw",
        }}>
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                Cloud Managed Services
              </h1>
              <p className="text-lg mb-6">
                Simplify operations, improve security, and boost efficiency with
                our expert-driven cloud management solutions tailored to your
                business.
              </p>
              <Link
                to="https://hutechsolutions.com/contact-us/"
                className="inline-block text-white text-lg font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
                  border: "none",
                }}>
                Schedule a Consultation
              </Link>
            </div>
            <div className="w-full lg:w-1/2"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Should You Consider Cloud Managed Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While you can operate in the cloud without expert support, there
              can be significant repercussions that impact your business
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {consequences.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              An ideal Cloud Managed Service Provider can alleviate these
              concerns
            </h3>
            <p className="text-lg opacity-90">
              Let us help you manage and execute your cloud infrastructure
              strategy with confidence and expertise.
            </p>
          </div>
        </div>
      </section>
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Managed Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our services offer comprehensive solutions to meet all your cloud
              computing needs, aligning perfectly with your organizational
              requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                How We Help You Realize Your Cloud Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We help architect, build, and manage elaborate solutions that
                simplify your processes, streamline workflows, and significantly
                reduce costs. Hutech Solutions' Managed Cloud Services allow you
                to focus on your core business strategy.
              </p>

              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  How Hutech Solutions Can Help
                </h3>
                <div className="space-y-4">
                  {future.map((future, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-500 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{future}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Managed Cloud Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Often more cost-effective than in-house management, Cloud Managed
              Services provide a wide range of business benefits for your
              organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Hutech Solutions?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Beyond mere data migration, our cloud management platform helps
              you develop a fresh perspective and adapt an organizational
              mindset for critical business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customized Solutions
              </h3>
              <p className="opacity-80">
                Tailored strategies for your unique business needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost-Effective</h3>
              <p className="opacity-80">
                Sound business strategy that maximizes ROI
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
              <p className="opacity-80">
                Stay relevant in highly competitive markets
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Perspective</h3>
              <p className="opacity-80">
                Innovative approaches to cloud transformation
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/10 rounded-2xl p-8 text-center backdrop-blur-sm w-[57rem] mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Cloud Infrastructure?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let's discuss how Hutech Solutions can help you achieve your cloud
            objectives and establish critical business applications for success.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </>
  );
};

export default CloudManagedServices;
