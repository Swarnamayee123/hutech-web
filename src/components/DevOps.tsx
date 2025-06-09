/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  GitBranch,
  GitMerge,
  Server,
  Database,
  Shield,
  Settings,
  Monitor,
  LineChart,
  Users,
  CheckCircle2,
  Cpu,
  Cloud,
  Target,
  PenTool as Tool,
  MinusCircle,
  PlusCircle,
} from "lucide-react";

const DevOps = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DevOps and why is it important?",
      answer:
        "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the development lifecycle and provide continuous delivery of high-quality software. DevOps is important because it helps organizations deliver applications and services faster, improve operational efficiency, and reduce time-to-market.",
    },
    {
      question: "How long does it take to implement DevOps practices?",
      answer:
        "The implementation timeline varies depending on your organization's size, current processes, and goals. Typically, initial implementation takes 3-6 months, including assessment, planning, and basic automation setup. Full cultural transformation and advanced practices may take 12-18 months.",
    },
    {
      question: "What tools do you use for DevOps implementation?",
      answer:
        "We use industry-leading tools including Git for version control, Jenkins/GitLab for CI/CD, Docker and Kubernetes for containerization, Terraform for infrastructure as code, and various monitoring tools like Prometheus and Grafana. The specific toolset is customized based on your needs and existing technology stack.",
    },
    {
      question: "How do you ensure security in DevOps practices?",
      answer:
        "We implement DevSecOps practices by integrating security at every stage of the development pipeline. This includes automated security testing, compliance checks, vulnerability scanning, and secure configuration management. We also implement proper access controls and security monitoring.",
    },
    {
      question: "What are the key metrics you track in DevOps?",
      answer:
        "We track several key metrics including deployment frequency, lead time for changes, mean time to recovery (MTTR), change failure rate, and system availability. These metrics help measure the effectiveness of DevOps practices and identify areas for improvement.",
    },
    {
      question:
        "How do you handle the cultural transformation required for DevOps?",
      answer:
        "We focus on fostering collaboration between development and operations teams through training, workshops, and establishing clear communication channels. We help implement agile practices, encourage knowledge sharing, and develop a culture of continuous improvement.",
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer:
        "We offer ongoing support including monitoring, maintenance, optimization, and training. Our team can provide 24/7 support for critical systems, regular health checks, performance optimization, and continuous improvement recommendations.",
    },
    {
      question:
        "How do you ensure minimal disruption during DevOps transformation?",
      answer:
        "We follow a phased approach to implementation, starting with non-critical systems and gradually expanding. We conduct thorough testing, provide rollback plans, and implement changes during maintenance windows to minimize business impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/05/devOps-consulting-services.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  height: "100vh",
          marginTop: "6rem",
        }}>
        <div className="max-w-[75rem] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                DevOps Consulting Services
              </h1>
              <p className="text-lg mb-6">
                Transform your software delivery with our comprehensive DevOps
                solutions. We help organizations implement efficient CI/CD
                pipelines, automate infrastructure, and optimize development
                workflows.
              </p>
              <Link
                to="/contact"
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

      {/* Areas We Consult On */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Areas that we consult on
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive DevOps solutions to accelerate your software
              delivery and improve operational efficiency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Server size={32} className="text-blue-600" />,
                title: "Infrastructure design",
                description:
                  "Get an up-to-date, scalable, and effective infrastructure that aligns perfectly with your business objectives. We provide support throughout your operation in correctly scaling your solution, optimizing the configuration of services, and making everything ready to accept production traffic.",
              },
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "Cloud architecture and services",
                description:
                  "Save costs and make your business processes more productive with flexible and cost-efficient cloud solutions. We work with leading providers of cloud computing services, including Amazon Web Services, Google Cloud Platform, Microsoft Azure Cloud, and DigitalOcean Cloud.",
              },
              {
                icon: <Cpu size={32} className="text-blue-600" />,
                title: "Kubernetes deployment",
                description:
                  "We provide all kinds of Kubernetes services, including Kubernetes cluster setup & management, assistance with self-hosted and managed Kubernetes clusters, and cluster security hardening.",
              },
              {
                icon: <Database size={32} className="text-blue-600" />,
                title: "Container orchestration",
                description:
                  "Leverage the power of containers as universal runtimes. Containerize your code, app configuration, and dependencies to run your application reliably across different environments.",
              },
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "Cloud migration",
                description:
                  "Our experienced engineers can seamlessly shift even the most complex legacy project to a new environment to increase the potential of your product.",
              },
              {
                icon: <GitBranch size={32} className="text-blue-600" />,
                title: "CI/CD implementation",
                description:
                  "Accelerate your software development cycle with combined practices of continuous integration, continuous delivery and deployment to meet your business needs faster and more consistently.",
              },
              {
                icon: <LineChart size={32} className="text-blue-600" />,
                title: "Cloud cost optimization",
                description:
                  "We help reduce your cloud administration and maintenance expenses by employing the latest cloud optimization and tuning techniques available.",
              },
              {
                icon: <Settings size={32} className="text-blue-600" />,
                title: "Performance optimization",
                description:
                  "Reduce operating costs and run on the technology platform that is optimal for your needs. We investigate your infrastructure and suggest ways to make your systems work at the highest level of efficiency.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Disaster recovery",
                description:
                  "Plan recovery strategies and keep your data safe with proper backup management. We ensure your backups are regular, automated, and tested to be in working order.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Security hardening",
                description:
                  "Improve your application security posture with our professional DevSecOps consulting. We design systems based on best practices in identity and access management, infrastructure protection, detective controls, and data protection.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DevOps Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our DevOps Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to implementing DevOps practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={32} className="text-blue-600" />,
                title: "Assessment",
                description:
                  "Evaluate current processes, tools, and culture to identify improvement opportunities.",
              },
              {
                icon: <Tool size={32} className="text-blue-600" />,
                title: "Planning",
                description:
                  "Develop a roadmap for implementing DevOps practices and selecting appropriate tools.",
              },
              {
                icon: <GitMerge size={32} className="text-blue-600" />,
                title: "Implementation",
                description:
                  "Set up automation pipelines, infrastructure as code, and monitoring solutions.",
              },
              {
                icon: <Users size={32} className="text-blue-600" />,
                title: "Training",
                description:
                  "Enable teams with the knowledge and skills needed to maintain DevOps practices.",
              },
              {
                icon: <LineChart size={32} className="text-blue-600" />,
                title: "Optimization",
                description:
                  "Continuously improve processes and tooling based on metrics and feedback.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border text-center">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools we use to implement DevOps solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Version Control & CI/CD",
                tools: [
                  "Git",
                  "GitHub",
                  "GitLab",
                  "Jenkins",
                  "CircleCI",
                  "AWS CodePipeline",
                ],
              },
              {
                category: "Infrastructure as Code",
                tools: [
                  "Terraform",
                  "AWS CloudFormation",
                  "Ansible",
                  "Puppet",
                  "Chef",
                ],
              },
              {
                category: "Containerization",
                tools: ["Docker", "Kubernetes", "AWS ECS", "OpenShift"],
              },
              {
                category: "Monitoring & Logging",
                tools: [
                  "Prometheus",
                  "Grafana",
                  "ELK Stack",
                  "New Relic",
                  "Datadog",
                ],
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Benefits you get</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              "Accelerated development cycle",
              "Faster time-to-market",
              "Uninterrupted delivery of new features",
              "Increased application resilience",
              "Reduced infrastructure maintenance costs",
              "Overall product improvement",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center">
                  <CheckCircle2 className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-lg font-semibold">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xl mb-8 text-gray-600 max-w-4xl mx-auto">
              Cloudtech Solutions is a Devops consulting company that will help
              bring your IT value creation to another level. We love new
              challenges and the team always keeps pace with the ever-evolving
              universe of DevOps methodologies and tools. So whatever the issue,
              trust our guidance to have the best solutions at your disposal!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #51b2d3, #4b84ee)",
              }}>
              Start your project
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our DevOps services
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-lg shadow-sm">
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => toggleFaq(index)}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      {openFaq === index ? (
                        <MinusCircle className="text-blue-600" size={24} />
                      ) : (
                        <PlusCircle className="text-blue-600" size={24} />
                      )}
                    </div>
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Development Process?
              </h2>
              <p className="text-xl mb-8">
                Let our experts help you implement efficient DevOps practices
                that drive innovation and growth.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-300 hover:opacity-90"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
