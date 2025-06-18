/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Scale,
  Shield,
  Zap,
  DollarSign,
  CreditCard,
  Globe,
  BarChart,
  Database,
  Settings,
  CheckCircle2,
  Cloud,
  Brain,
  FileCheck,
  Users,
  Lock,
} from "lucide-react";

const CloudMigration = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/06/cloud-migration-2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  height: "100vh",
          marginTop: "6rem",
          paddingLeft: "7.5vw",
          paddingRight: "5.5vw",
          width: "100vw",
        }}>
        <div className=" mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                Cloud Migration Services
              </h1>
              <p className="text-lg mb-6">
                Transform your business with our comprehensive cloud migration
                solutions. We help organizations seamlessly transition to AWS
                cloud infrastructure while ensuring business continuity and
                optimization.
              </p>
              <Link
                to="https://hutechsolutions.com/contact-us/"
                className="inline-block text-white text-lg font-medium px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
                  border: "none",
                }}>
                Start Your Migration Journey
              </Link>
            </div>
            <div className="w-full lg:w-1/2"></div>
          </div>
        </div>
      </section>

      {/* Migration Challenges Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What makes cloud migration challenging?
              </h2>

              <div className="flex flex-col lg:flex-row items-center mb-8 gap-6">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <p className="mb-4">
                      Transition to a cloud results in certain advantages, such
                      as infrastructure flexibility, lower maintenance costs,
                      and enhanced performance. However, it takes more than
                      simply shifting your applications and datastores to a
                      cloud platform to achieve the hoped-for results.
                    </p>
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-m1.png"
                      alt="Cloud Infrastructure"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <p className="mb-4">
                      A successful cloud initiative relies on detailed planning
                      and thorough assessment of both cost savings and operation
                      advantages. Organizations moving to a cloud need to define
                      clear KPIs to estimate their cost savings and operation
                      advantages of their new cloud infrastructure.
                    </p>
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-m2.png"
                      alt="Business Analytics"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-m3.png"
                      alt="Data Center"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                    <p className="mb-0">
                      It is just as important to understand working profiles of
                      your workloads to estimate their resource consumption.
                      Additionally, some applications and datasets can have
                      specific requirements that may affect their migration's
                      process or require additional efforts to shift.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-m4.png"
                      alt="Team Planning"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                    <p className="mb-0">
                      With so many factors to consider, it is no surprise that
                      some organizations are reluctant to start the migration
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 lg:p-10 rounded-2xl border border-blue-200">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-1/3">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/trust.png"
                      alt="Cloud Expertise"
                      className="w-full rounded-xl shadow-sm mb-4 lg:mb-0"
                    />
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-xl font-semibold mb-3">
                      Trust our expertise in cloud migration!
                    </h3>
                    <p className="mb-4">
                      Our specialists can seamlessly perform the most complex
                      migrations, including full-scale shifting of legacy
                      project infrastructures. Let us increase the potential of
                      your product by employing the cloud benefits for you.
                    </p>
                    <Link
                      to="https://hutechsolutions.com/contact-us/"
                      className="inline-flex items-center px-5 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                      style={{
                        background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
                        border: "none",
                      }}>
                      Get Started with Migration{" "}
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages of Cloud Computing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Advantages of Cloud Computing
            </h2>
            <p className="text-xl text-gray-600">
              Unlock the full potential of cloud technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale size={32} className="text-blue-600" />,
                title: "Scalability and control over peak loads",
                description:
                  "Easily scale your resources up or down based on demand, ensuring optimal performance during peak times.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "High availability of services",
                description:
                  "Ensure your applications are always accessible with redundant systems and automatic failover.",
              },
              {
                icon: <Zap size={32} className="text-blue-600" />,
                title: "Improved performance",
                description:
                  "Leverage high-performance computing resources and global content delivery networks.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Reduced costs",
                description:
                  "Eliminate capital expenses and only pay for the resources you actually use.",
              },
              {
                icon: <CreditCard size={32} className="text-blue-600" />,
                title: "Consumption-based billing",
                description:
                  "Pay-as-you-go pricing model that aligns costs with actual usage patterns.",
              },
              {
                icon: <Globe size={32} className="text-blue-600" />,
                title: "Global access to cloud services",
                description:
                  "Access your applications and data from anywhere in the world with internet connectivity.",
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
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

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure successful cloud migration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart className="text-blue-600" size={32} />,
                title: "Assessment & Planning",
                description:
                  "Comprehensive analysis of your current infrastructure and development of a detailed migration strategy.",
              },
              {
                icon: <Database className="text-blue-600" size={32} />,
                title: "Data Migration",
                description:
                  "Secure transfer of your data to the cloud with minimal disruption to your operations.",
              },
              {
                icon: <Settings className="text-blue-600" size={32} />,
                title: "Application Migration",
                description:
                  "Careful migration of applications with necessary modifications for cloud optimization.",
              },
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: "Testing & Security",
                description:
                  "Thorough testing and implementation of robust security measures.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full text-center">
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
              Benefits of Cloud Migration
            </h2>
            <p className="text-xl text-gray-600">
              Why businesses choose our cloud migration services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Reduced operational costs",
              "Enhanced scalability",
              "Improved security",
              "Better performance",
              "Increased agility",
              "Disaster recovery",
              "Global accessibility",
              "Modern infrastructure",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow-sm border">
                <CheckCircle2 className="text-blue-600 mr-3" size={24} />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Migration Approaches</h2>
            <p className="text-xl text-gray-600">
              Tailored strategies for your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Rehosting (Lift & Shift)",
                description:
                  "Move applications to AWS without any changes to their architecture.",
              },
              {
                title: "Replatforming",
                description:
                  "Make minor optimizations to achieve tangible benefits without changing core architecture.",
              },
              {
                title: "Refactoring",
                description:
                  "Reimagine how applications are architected using cloud-native features.",
              },
              {
                title: "Hybrid Solutions",
                description:
                  "Maintain some applications on-premises while moving others to the cloud.",
              },
            ].map((approach, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
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
              Our Cloud Migration Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your migration needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "Performing all types of migration",
                description:
                  "Whether a full data center exit, shifting specific applications, or cloud-to-cloud migration, our qualified specialists will seamlessly shift an entire infrastructure to a new environment.",
              },
              {
                icon: <Brain size={32} className="text-blue-600" />,
                title: "Defining cloud migration strategy",
                description:
                  "We provide assistance in devising a clear strategy that includes setting attainable operating goals and business objectives that are to be achieved in the course of migration.",
              },
              {
                icon: <FileCheck size={32} className="text-blue-600" />,
                title: "Consultancy on cloud service providers",
                description:
                  "Given your estimated cloud deployment, we thoroughly analyze available options from different providers, to help you choose the best-fit cloud platform, both technically and economically.",
              },
              {
                icon: <Settings size={32} className="text-blue-600" />,
                title: "Defining cloud migration approach",
                description:
                  "Rehost, refactor, revise, rebuild, or replace – depending on your organization's goals and the codebase's state, our experts suggest the migration technique that best answers your needs.",
              },
              {
                icon: <BarChart size={32} className="text-blue-600" />,
                title: "Developing migration business case",
                description:
                  "We help you define advantages of cloud migration from an economic point of view, by setting clear KPIs and calculating expected total cost of ownership (TCO) on the cloud, compared to current TCO.",
              },
              {
                icon: <Users size={32} className="text-blue-600" />,
                title: "Training of staff",
                description:
                  "Organizing cloud workflow is different from running the same processes on-prem. Our engineers will teach your team to work on a new platform, making sure your employees learn new operating models within shortest terms.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Budgeting assistance",
                description:
                  "A cloud payment model can be hard to comprehend, considering the dynamic nature of cloud environments. We make sure our customers understand the cloud billing process and keep their costs under control.",
              },
              {
                icon: <Lock size={32} className="text-blue-600" />,
                title: "Data security and compliance",
                description:
                  "Migration to a cloud changes security approach, shifting focus on identity and access management. We make sure all your services are configured correctly and have appropriate security controls at place.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
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
                Ready to Start Your Cloud Journey?
              </h2>
              <p className="text-xl mb-6">
                Let our experts guide you through a seamless cloud migration
                process.
              </p>
              <a
                href="https://hutechsolutions.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 font-semibold rounded-md hover:opacity-90 transition-opacity"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Contact Us Today <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigration;
