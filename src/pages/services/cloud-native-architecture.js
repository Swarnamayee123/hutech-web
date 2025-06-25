/** @format */

import {
  ArrowRight,
  Cloud,
  Code,
  Database,
  Shield,
  Zap,
  Settings,
  CheckCircle2,
  Box,
  GitBranch,
  RefreshCw,
  Monitor,
} from "lucide-react";
import SEO from "../../components/SEO";
import Image from "next/image";
export default function CloudNativeArchitecture() {
  return (
    <>
      <SEO
        title="Cloud Native Architecture | Build Scalable Cloud Systems with Hutech Solutions"
        description="Unlock the power of CloudNativeArchitecture with Hutech Solutions. Design scalable, resilient, and high-performance cloud-native systems tailored to your business needs."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section
          className="text-white pb-20 pt-4 "
          style={{
            backgroundImage:
              'url("https://hutechsolutions.com/wp-content/uploads/2025/05/banner-10.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            //  height: "100vh",
            marginTop: "4rem",
            paddingLeft: "7.5vw",
            // paddingRight: "5.5vw",
            width: "100vw",
          }}>
          <div className="mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                  What is Cloud Native Architecture?
                </h1>
                <p className="text-lg mb-6">
                  Discover the principles, patterns, and practices of
                  cloud-native architecture that enable organizations to build
                  and run scalable applications in modern, dynamic environments.
                </p>
                <a
                  href="https://hutechsolutions.com/contact-us/"
                  className="inline-block text-white text-lg font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
                    border: "none",
                  }}>
                  Schedule a Consultation
                </a>
              </div>
              <div className="w-full lg:w-1/2"></div>
            </div>
          </div>
        </section>

        {/* What is Cloud Native Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold tracking-tighter mb-6 md:text-4xl">
                  Understanding Cloud Native Architecture
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-600">
                    {`Cloud native architecture is an approach to building and
                    running applications that exploits the advantages of the
                    cloud computing delivery model. It's about how applications
                    are created and deployed, not where.`}
                  </p>

                  <p className="text-gray-600">
                    This architectural approach enables organizations to build
                    and run scalable applications in modern, dynamic
                    environments such as public, private, and hybrid clouds.
                    Containers, service meshes, microservices, immutable
                    infrastructure, and declarative APIs exemplify this
                    approach.
                  </p>

                  <p className="text-gray-600">
                    These techniques enable loosely coupled systems that are
                    resilient, manageable, and observable. Combined with robust
                    automation, they allow engineers to make high-impact changes
                    frequently and predictably with minimal toil.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2 mb-8 md:mb-0 flex justify-center items-center h-[60vh]">
                <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-transparent h-full">
                  <Image
                    alt="Cloud Native Concepts"
                    className="w-full h-full object-cover"
                    src="https://hutechsolutions.com/wp-content/uploads/2025/05/image-9-1.png"
                    width={800}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Principles Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Key Principles of Cloud Native Architecture
              </h2>
              <p className="text-gray-600 md:text-xl max-w-[800px]">
                These fundamental principles guide the design and implementation
                of cloud native systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: Box,
                  title: "Containerization",
                  description:
                    "Applications are packaged in containers that provide consistency across environments and enable efficient resource utilization.",
                },
                {
                  icon: GitBranch,
                  title: "Microservices",
                  description:
                    "Applications are decomposed into small, independent services that can be developed, deployed, and scaled independently.",
                },
                {
                  icon: RefreshCw,
                  title: "Continuous Integration/Deployment",
                  description:
                    "Automated pipelines enable frequent, reliable releases with rapid feedback and reduced risk.",
                },
                {
                  icon: Settings,
                  title: "Infrastructure as Code",
                  description:
                    "Infrastructure is defined and managed through code, enabling version control and automated provisioning.",
                },
                {
                  icon: Monitor,
                  title: "Observability",
                  description:
                    "Comprehensive monitoring, logging, and tracing provide visibility into system behavior and performance.",
                },
                {
                  icon: Shield,
                  title: "Security by Design",
                  description:
                    "Security is built into every layer of the architecture from the ground up, not added as an afterthought.",
                },
              ].map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="flex items-start gap-4">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Benefits of Cloud Native Architecture
              </h2>
              <p className="text-gray-600 md:text-xl max-w-[800px]">
                Organizations adopting cloud native architecture experience
                significant advantages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Faster Time to Market",
                  description:
                    "Accelerate development cycles with automated deployment pipelines and independent service development.",
                },
                {
                  title: "Improved Scalability",
                  description:
                    "Scale individual components based on demand, optimizing resource usage and performance.",
                },
                {
                  title: "Enhanced Resilience",
                  description:
                    "Build fault-tolerant systems that can recover from failures automatically and maintain high availability.",
                },
                {
                  title: "Cost Optimization",
                  description:
                    "Pay only for resources used and optimize costs through efficient resource allocation and auto-scaling.",
                },
                {
                  title: "Developer Productivity",
                  description:
                    "Enable teams to work independently on different services, reducing coordination overhead.",
                },
                {
                  title: "Technology Flexibility",
                  description:
                    "Use the best technology for each service without being locked into a single technology stack.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-[#DDD]">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Cloud Native Technologies
              </h2>
              <p className="text-gray-600 md:text-xl max-w-[800px]">
                Essential technologies that enable cloud native architecture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Kubernetes",
                  description:
                    "Container orchestration platform for managing containerized applications at scale.",
                },
                {
                  icon: Code,
                  title: "Docker",
                  description:
                    "Containerization platform that packages applications with their dependencies.",
                },
                {
                  icon: Database,
                  title: "Service Mesh",
                  description:
                    "Infrastructure layer that handles service-to-service communication.",
                },
                {
                  icon: Zap,
                  title: "Serverless",
                  description:
                    "Event-driven computing model that automatically manages infrastructure.",
                },
              ].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm h-full text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 text-white"
          style={{
            background: "linear-gradient(90deg, #592AB5, #4F8FF3)",
            border: "none",
          }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl drop-shadow-lg">
                Ready to embrace Cloud Native?
              </h2>
              <p className="md:text-xl max-w-[800px] drop-shadow">
                Transform your organization with cloud native architecture
                principles and practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://hutechsolutions.com/contact-us/"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 font-semibold rounded-md hover:opacity-90 transition-opacity"
                  style={{
                    background: "#fff", // or any dark color
                    color: "#000", // ensures text is white
                    border: "none",
                  }}>
                  Get Started Today <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
