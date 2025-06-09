/** @format */

import React from "react";
import { Link } from "react-router-dom";
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

const CloudNativeDataServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
           <section
              className="text-white pb-20 pt-4 "
              style={{
                backgroundImage:
                  'url("https://hutechsolutions.com/wp-content/uploads/2025/06/cloud-native-data-service-1.jpg")',
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
                    Cloud Native Data Services
                    </h1>
                    <p className="text-lg mb-6">
                    Transform your data landscape with modern cloud-native data
                services. From real-time analytics to machine learning
                pipelines, we build scalable data solutions that drive business
                intelligence and growth.
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

      {/* Data Challenges Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full lg:w-10/12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What makes cloud native data services complex?
              </h2>

              <div className="flex flex-col lg:flex-row items-center mb-8 gap-6">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <p className="mb-4">
                      Modern data ecosystems require seamless integration
                      between multiple data sources, real-time processing
                      capabilities, and advanced analytics. Building
                      cloud-native data services involves complex orchestration
                      of streaming, batch processing, and storage layers.
                    </p>
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/06/data-pipeline-architecture.jpg"
                      alt="Data Pipeline Architecture"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <p className="mb-4">
                      Successful data service implementation requires careful
                      design of data governance, quality frameworks, security
                      protocols, and performance optimization. Each component
                      must work together to deliver reliable, scalable, and
                      compliant data solutions.
                    </p>
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/06/data-goverance.jpg"
                      alt="Data Governance"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 mb-12">
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm mb-4 lg:mb-0">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/06/realtime-analytics.jpg"
                      alt="Real-time Analytics"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                    <p className="mb-0">
                      Real-time data processing, streaming analytics, and
                      machine learning workflows require specialized expertise
                      in cloud-native technologies. Ensuring low-latency
                      processing while maintaining data quality and consistency
                      is a significant challenge.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/06/data-secruity.jpg"
                      alt="Data Security"
                      className="w-full rounded-xl shadow-sm mb-4"
                    />
                    <p className="mb-0">
                      With increasing data privacy regulations and security
                      requirements, many organizations struggle to implement
                      comprehensive data protection while maintaining
                      accessibility and performance across their cloud-native
                      data services.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-blue-50 p-6 lg:p-10 rounded-2xl border border-blue-200">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-1/3">
                    <img
                      src="https://hutechsolutions.com/wp-content/uploads/2025/05/data-expertise.png"
                      alt="Data Services Expertise"
                      className="w-full rounded-xl shadow-sm mb-4 lg:mb-0"
                    />
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-xl font-semibold mb-3">
                      Trust our expertise in cloud native data services!
                    </h3>
                    <p className="mb-4">
                      Our certified data engineers and architects have built
                      enterprise-scale data platforms for organizations across
                      industries. Let us design and implement a modern, scalable
                      data ecosystem that unlocks the full potential of your
                      data assets.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-5 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                      style={{
                        background: "linear-gradient(90deg, #51b2d3, #4b84ee )",
                        border: "none",
                      }}>
                      Start Your Data Transformation{" "}
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Data Technologies Stack */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Modern Data Technologies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge tools and platforms for cloud-native data services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Data Lakes & Storage",
                technologies: [
                  "Amazon S3",
                  "Azure Data Lake",
                  "Google Cloud Storage",
                  "Delta Lake",
                ],
              },
              {
                category: "Stream Processing",
                technologies: [
                  "Apache Kafka",
                  "Amazon Kinesis",
                  "Apache Flink",
                  "Azure Event Hubs",
                ],
              },
              {
                category: "Data Warehouses",
                technologies: [
                  "Snowflake",
                  "Amazon Redshift",
                  "Google BigQuery",
                  "Azure Synapse",
                ],
              },
              {
                category: "Analytics & ML",
                technologies: [
                  "Apache Spark",
                  "Databricks",
                  "SageMaker",
                  "TensorFlow",
                ],
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">
                  {stack.category}
                </h3>
                <ul className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages of Cloud Native Data Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Advantages of Cloud Native Data Services
            </h2>
            <p className="text-xl text-gray-600">
              Why modern enterprises choose cloud-native data solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale size={32} className="text-blue-600" />,
                title: "Elastic scalability",
                description:
                  "Automatically scale data processing resources up or down based on workload demands and data volume fluctuations.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Advanced data security",
                description:
                  "Multi-layered security with encryption at rest and in transit, fine-grained access controls, and compliance frameworks.",
              },
              {
                icon: <Zap size={32} className="text-blue-600" />,
                title: "Real-time processing",
                description:
                  "Process streaming data in real-time with low-latency pipelines for immediate insights and decision-making.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Cost-effective storage",
                description:
                  "Intelligent tiering and compression strategies to optimize storage costs while maintaining performance.",
              },
              {
                icon: <Database size={32} className="text-blue-600" />,
                title: "Multi-format support",
                description:
                  "Handle structured, semi-structured, and unstructured data formats in a unified data platform.",
              },
              {
                icon: <Globe size={32} className="text-blue-600" />,
                title: "Global data access",
                description:
                  "Distributed data services across multiple regions for optimal performance and disaster recovery.",
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

      {/* Data Architecture Patterns */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Data Architecture Patterns
            </h2>
            <p className="text-xl text-gray-600">
              Proven architectural patterns for modern data platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lambda Architecture",
                description:
                  "Combines batch and stream processing for comprehensive data processing with fault tolerance and low latency.",
                features: [
                  "Batch processing layer",
                  "Speed layer for real-time",
                  "Serving layer for queries",
                  "Fault-tolerant design",
                ],
              },
              {
                title: "Kappa Architecture",
                description:
                  "Simplified architecture using only stream processing for both real-time and batch workloads.",
                features: [
                  "Stream-only processing",
                  "Simplified maintenance",
                  "Event sourcing",
                  "Replayable streams",
                ],
              },
              {
                title: "Data Mesh",
                description:
                  "Decentralized data architecture treating data as a product with domain ownership and self-serve infrastructure.",
                features: [
                  "Domain ownership",
                  "Data as a product",
                  "Self-serve platform",
                  "Federated governance",
                ],
              },
              {
                title: "Modern Data Stack",
                description:
                  "Cloud-native stack with separate storage, compute, and analytics layers for maximum flexibility.",
                features: [
                  "Decoupled architecture",
                  "Cloud-native tools",
                  "SQL-first approach",
                  "Version control",
                ],
              },
            ].map((pattern, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {pattern.title}
                </h3>
                <p className="text-gray-600 mb-4">{pattern.description}</p>
                <ul className="space-y-2">
                  {pattern.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Data Service Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to building enterprise-grade data services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BarChart className="text-blue-600" size={32} />,
                title: "Data Discovery",
                description:
                  "Analyze your data landscape, identify sources, and understand business requirements for optimal service design.",
              },
              {
                icon: <Settings className="text-blue-600" size={32} />,
                title: "Architecture Design",
                description:
                  "Design scalable data pipelines, storage strategies, and processing workflows tailored to your needs.",
              },
              {
                icon: <Cloud className="text-blue-600" size={32} />,
                title: "Service Implementation",
                description:
                  "Build and deploy cloud-native data services using modern technologies and best practices.",
              },
              {
                icon: <Shield className="text-blue-600" size={32} />,
                title: "Monitoring & Governance",
                description:
                  "Implement comprehensive monitoring, data quality checks, and governance frameworks for reliable operations.",
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

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Cloud Native Data Service Use Cases
            </h2>
            <p className="text-xl text-gray-600">
              Real-world applications across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-time Fraud Detection",
                description:
                  "Process financial transactions in real-time to detect and prevent fraudulent activities.",
                industry: "Financial Services",
              },
              {
                title: "Customer 360 Analytics",
                description:
                  "Unified customer data platform for personalized experiences and targeted marketing.",
                industry: "Retail & E-commerce",
              },
              {
                title: "IoT Data Processing",
                description:
                  "Collect and analyze sensor data from connected devices for operational insights.",
                industry: "Manufacturing",
              },
              {
                title: "Personalized Recommendations",
                description:
                  "Machine learning-powered recommendation engines for content and product suggestions.",
                industry: "Media & Entertainment",
              },
              {
                title: "Predictive Maintenance",
                description:
                  "Analyze equipment data to predict failures and optimize maintenance schedules.",
                industry: "Energy & Utilities",
              },
              {
                title: "Clinical Data Analytics",
                description:
                  "Process patient data and research information for improved healthcare outcomes.",
                industry: "Healthcare",
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Benefits of Professional Data Services
            </h2>
            <p className="text-xl text-gray-600">
              Why organizations choose our data expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "99.9% data availability",
              "Real-time processing",
              "Advanced analytics",
              "Cost-optimized storage",
              "Data quality assurance",
              "Compliance ready",
              "ML/AI integration",
              "24/7 monitoring",
              "Disaster recovery",
              "Multi-cloud support",
              "Auto-scaling pipelines",
              "Data governance",
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

      {/* Data Service Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Data Service Solutions</h2>
            <p className="text-xl text-gray-600">
              Comprehensive data services for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Data Lake Architecture",
                description:
                  "Scalable storage and processing of structured and unstructured data with advanced analytics capabilities.",
              },
              {
                title: "Real-time Data Streaming",
                description:
                  "Event-driven data pipelines for real-time analytics, monitoring, and immediate business insights.",
              },
              {
                title: "Data Warehouse Modernization",
                description:
                  "Cloud-native data warehouses with columnar storage, automatic scaling, and SQL-based analytics.",
              },
              {
                title: "ML/AI Data Platforms",
                description:
                  "End-to-end machine learning platforms with feature stores, model training, and deployment pipelines.",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Data Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Cloud Native Data Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end data solutions from ingestion to insights
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Database size={32} className="text-blue-600" />,
                title: "Data Pipeline Development",
                description:
                  "Design and build robust ETL/ELT pipelines for batch and real-time data processing with automated orchestration and monitoring.",
              },
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "Data Lake Implementation",
                description:
                  "Implement scalable data lakes with multi-format support, data cataloging, and governance frameworks for enterprise data management.",
              },
              {
                icon: <BarChart size={32} className="text-blue-600" />,
                title: "Analytics Platform Design",
                description:
                  "Build comprehensive analytics platforms with self-service capabilities, interactive dashboards, and advanced visualization tools.",
              },
              {
                icon: <Settings size={32} className="text-blue-600" />,
                title: "Data Integration Services",
                description:
                  "Seamless integration of disparate data sources with API-driven connectors, change data capture, and real-time synchronization.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "Data Security & Governance",
                description:
                  "Implement comprehensive data governance, privacy controls, lineage tracking, and compliance frameworks for secure data operations.",
              },
              {
                icon: <Zap size={32} className="text-blue-600" />,
                title: "Stream Processing Solutions",
                description:
                  "Real-time data streaming architectures with event processing, complex event correlation, and low-latency analytics capabilities.",
              },
              {
                icon: <Scale size={32} className="text-blue-600" />,
                title: "ML/AI Data Platforms",
                description:
                  "End-to-end machine learning platforms with feature engineering, model training, deployment, and monitoring capabilities.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "Data Cost Optimization",
                description:
                  "Optimize data storage and processing costs through intelligent tiering, compression, and resource allocation strategies.",
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
                Ready to Transform Your Data Strategy?
              </h2>
              <p className="text-xl mb-6">
                Let our data experts design and implement cloud-native data
                services that unlock the full potential of your data assets.
              </p>
              <a
                href="https://hutechsolutions.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Start Your Data Journey{" "}
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudNativeDataServices;
