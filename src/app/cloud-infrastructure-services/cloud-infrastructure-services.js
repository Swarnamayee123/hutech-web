/** @format */

import {
  ArrowRight,
  Scale,
  Shield,
  Zap,
  DollarSign,
  Globe,
  BarChart,
  Database,
  Settings,
  CheckCircle2,
  Cloud,
} from "lucide-react";
import SEO from "../../components/SEO";
import Image from "next/image";
export default function CloudInfrastructureServices() {
  return (
    <>
       <SEO
        title="Cloud Infrastructure Services | Scalable & Secure Solutions by Hutech Solutions"
        description="Empower your business with robust and secure cloud infrastructure services by Hutech Solutions. Scale faster, reduce costs, and ensure high availability."
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Infrastructure-Design-1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  height: "100vh",
          marginTop: "4rem",
          paddingLeft: "7.5vw",
          paddingRight: "5.5vw",
          width: "100vw",
        }}>
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                Cloud Infrastructure Services
              </h1>
              <p className="text-lg mb-6">
                Build robust, scalable, and secure cloud infrastructure
                solutions that power your business growth. Our expert architects
                design and implement world-class cloud environments tailored to
                your needs.
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

      {/* Infrastructure Challenges Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What makes cloud infrastructure design challenging?
              </h2>

              <div className="flex flex-col lg:flex-row items-center mb-8 gap-6">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold mb-4">
                      Best Practices for Designing Cloud Infrastructure in 2025
                    </h3>
                    <p className="mb-4">
                      Modern cloud infrastructure offers unprecedented
                      flexibility, scalability, and performance capabilities.
                      However, designing an optimal architecture requires deep
                      understanding of cloud services, networking, security, and
                      cost optimization strategies.
                    </p>
                    {/* <Image
                        src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-arch1.png"
                        alt="Cloud Architecture"
                        className="w-full rounded-xl shadow-sm mb-4"
                      /> */}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">
                      Strategic Planning for High-Performance Cloud
                      Infrastructure
                    </h3>
                    <p className="mb-4">
                      Successful cloud infrastructure implementation requires
                      careful planning of network topology, security frameworks,
                      disaster recovery strategies, and performance
                      optimization. Each component must work harmoniously to
                      deliver reliable results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold mb-4">
                      Smart Scaling: Managing Workloads and Traffic in the Cloud
                    </h3>
                    <p className="mb-0">
                      Understanding workload patterns, traffic requirements, and
                      growth projections is crucial for designing infrastructure
                      that scales efficiently. Auto-scaling, load balancing, and
                      resource optimization require specialized expertise.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-bold mb-4">
                      The Hidden Complexity Behind Modern Cloud Infrastructure
                      Design
                    </h3>
                    <p className="mb-0">
                      With multiple layers of security, compliance requirements,
                      and the complexity of modern cloud services, many
                      organizations struggle to design optimal infrastructure
                      architectures on their own.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 lg:p-10 rounded-2xl border border-blue-200">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-1/3">
                    <Image
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/trust.png"
                      alt="Infrastructure Expertise"
                      className="w-full rounded-xl shadow-sm mb-4 lg:mb-0 h-48"
                  
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-xl font-semibold mb-3">
                      Trust our expertise in cloud infrastructure!
                    </h3>
                    <p className="mb-4">
                      Our certified cloud architects have designed and
                      implemented enterprise-grade infrastructures for
                      organizations of all sizes. Let us build a robust, secure,
                      and scalable foundation for your digital transformation.
                    </p>
                    <a
                      to="https://hutechsolutions.com/contact-us/"
                      className="inline-flex items-center px-5 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                      style={{
                        background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
                        border: "none",
                      }}>
                      Start Building Your Infrastructure{" "}
                      <ArrowRight className="ml-2" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of Cloud Infrastructure */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Advantages of Modern Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Why businesses choose cloud-native infrastructure solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale size={32} className="text-blue-600" />,
                title: "Auto-scaling capabilities",
                description:
                  "Automatically adjust resources based on demand with intelligent scaling policies and real-time monitoring.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Enterprise-grade security",
                description:
                  "Multi-layered security with encryption, identity management, and compliance frameworks.",
              },
              {
                icon: <Zap size={32} className="text-blue-600" />,
                title: "High-performance computing",
                description:
                  "Leverage cutting-edge hardware and optimized network infrastructure for maximum performance.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Cost optimization",
                description:
                  "Intelligent resource allocation and usage-based pricing to minimize infrastructure costs.",
              },
              {
                icon: <Database size={32} className="text-blue-600" />,
                title: "Managed services integration",
                description:
                  "Seamlessly integrate with managed databases, analytics, and AI/ML services.",
              },
              {
                icon: <Globe size={32} className="text-blue-600" />,
                title: "Global infrastructure",
                description:
                  "Deploy across multiple regions for low-latency access and disaster recovery.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm h-full border border-[#DDD]">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{advantage.icon}</div>
                  <h3 className="text-lg font-semibold">{advantage.title}</h3>
                </div>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Infrastructure Design Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to building world-class cloud infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart className="text-blue-600" size={32} />,
                title: "Requirements Analysis",
                description:
                  "Deep dive into your business needs, performance requirements, and growth projections.",
              },
              {
                icon: <Settings className="text-blue-600" size={32} />,
                title: "Architecture Design",
                description:
                  "Create detailed infrastructure blueprints with best practices and optimization strategies.",
              },
              {
                icon: <Cloud className="text-blue-600" size={32} />,
                title: "Implementation",
                description:
                  "Deploy infrastructure using Infrastructure as Code principles for consistency and reliability.",
              },
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: "Monitoring & Optimization",
                description:
                  "Continuous monitoring, performance tuning, and security hardening for optimal operations.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm h-full text-center">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Benefits of Professional Infrastructure Design
            </h2>
            <p className="text-xl text-gray-600">
              Why organizations trust our infrastructure expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "99.99% uptime guarantee",
              "Auto-scaling efficiency",
              "Advanced security controls",
              "Cost-optimized architecture",
              "Multi-region deployment",
              "Disaster recovery ready",
              "Compliance frameworks",
              "24/7 monitoring",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-[#e5e7eb]">
                <CheckCircle2 className="text-blue-600 mr-3" size={24} />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored architectures for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Microservices Architecture",
                description:
                  "Containerized applications with Kubernetes orchestration for maximum scalability and resilience.",
              },
              {
                title: "Serverless Infrastructure",
                description:
                  "Event-driven architecture with Function-as-a-Service for optimal cost efficiency and performance.",
              },
              {
                title: "Data Lake Architecture",
                description:
                  "Scalable data storage and analytics infrastructure for big data processing and machine learning.",
              },
              {
                title: "Multi-Cloud Setup",
                description:
                  "Hybrid and multi-cloud architectures for vendor independence and optimal service utilization.",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Cloud Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive infrastructure solutions from design to deployment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "Infrastructure Architecture Design",
                description:
                  "Custom cloud architecture blueprints designed for your specific workloads, performance requirements, and business objectives with industry best practices.",
              },
              {
                icon: <Settings size={32} className="text-blue-600" />,
                title: "Infrastructure as Code (IaC)",
                description:
                  "Automated infrastructure provisioning using Terraform, CloudFormation, and other IaC tools for consistent, repeatable deployments.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Security & Compliance Framework",
                description:
                  "Implementation of comprehensive security controls, identity management, and compliance frameworks to protect your infrastructure and data.",
              },
              {
                icon: <BarChart size={32} className="text-blue-600" />,
                title: "Performance Optimization",
                description:
                  "Continuous monitoring, performance tuning, and optimization strategies to ensure your infrastructure delivers maximum efficiency and cost-effectiveness.",
              },
              {
                icon: <Database size={32} className="text-blue-600" />,
                title: "Data Architecture & Storage",
                description:
                  "Design and implementation of scalable data storage solutions, including data lakes, warehouses, and real-time analytics pipelines.",
              },
              {
                icon: <Globe size={32} className="text-blue-600" />,
                title: "Multi-Region Deployment",
                description:
                  "Global infrastructure deployment strategies for high availability, disaster recovery, and optimal user experience across different geographical regions.",
              },
              {
                icon: <Zap size={32} className="text-blue-600" />,
                title: "Auto-Scaling & Load Balancing",
                description:
                  "Implementation of intelligent auto-scaling policies and load balancing strategies to handle varying workloads efficiently and cost-effectively.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Cost Optimization Consulting",
                description:
                  "Ongoing cost analysis and optimization recommendations to ensure you're getting maximum value from your cloud infrastructure investment.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
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
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-center text-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build World-Class Infrastructure?
              </h2>
              <p className="text-xl mb-6">
                Let our certified architects design and implement the perfect
                cloud infrastructure solution for your business.
              </p>
              <a
                href="https://hutechsolutions.com/contact-us/"
                // target="_blank"
                // rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Start Your Infrastructure Project{" "}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
