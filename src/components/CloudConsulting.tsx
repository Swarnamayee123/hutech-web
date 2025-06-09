/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  Cloud,
  ArrowRight,
  CheckCircle2,
  Shield,
  Users,
  Brain,
  Target,
  Settings,
  Database,
  Scale,
  Globe,
  Zap,
  DollarSign,
  CreditCard,
  FileCheck,
  Lock,
  LineChart,
  Laptop,
  Code,
  BarChart3,
  Rocket,
  Clock,
  FileText,
  Heart,
  GraduationCap,
  Banknote,
  ShoppingCart,
  FlaskRound as Flask,
  BarChart,
  Star,
  Award,
  UserCheck,
  BadgeCheck,
  Monitor,
  AlertTriangle,
  Key,
  ShieldCheck,
  Activity,
  HardDrive,
  Box,
  Archive,
  ServerCrash,
  Cpu,
  Network,
  Search,
  BarChart2,
  BrainCircuit,
  GitBranch,
  GitMerge,
  GitPullRequest,
  Container,
  Boxes,
  Workflow,
  Truck,
  FileSearch,
  DatabaseBackup,
  ClipboardCheck,
  Route,
  PenTool,
  Cog,
} from "lucide-react";

const CloudConsulting = () => {
  return (
    <div className="min-h-screen">
      {/* <section className="bg-white">        <ul className="flex flex-wrap items-center text-sm text-gray-200 p-2 rounded-xl backdrop-blur-sm w-fit pt-8 pl-10">
  <li>
    <a href="/" className="px-3 py-1 font-medium">
      Home
    </a>
  </li>
  <li className="mx-2 text-gray-400 font-semibold">\</li>
  <li>
    <a href="/services" className="px-3 py-1 font-medium">
      Services
    </a>
  </li>
  <li className="mx-2 text-gray-400 font-semibold">\</li>
  <li className="text-white font-semibold">
    Cloud Consulting
  </li>
</ul>
</section> */}
      {/* Hero Section */}
    
      <section
              className="text-white pb-20 pt-4 "
              style={{
                backgroundImage:
                  'url("https://hutechsolutions.com/wp-content/uploads/2025/05/AWS-cloud-consulting.jpg")',
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
                    AWS Cloud Consulting Services
                    </h1>
                    <p className="text-lg mb-6">
                    Transform your business with expert AWS cloud consulting. Our
                certified professionals help you leverage the full potential of
                cloud technology to drive innovation and growth.
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

      {/* AWS Cloud Consulting Services Overview */}
      <section className="py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 pt-12">
              AWS Cloud Consulting Services
            </h2>
            <p className="text-xl text-gray-600 mb-0">
              We provide a complete range of AWS consulting services to guide
              and support businesses in deploying, developing, and optimizing
              their AWS infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Cloud size={32} className="text-blue-600" />,
                title: "AWS Cloud Migration",
                description:
                  "We transfer workloads from data centers or clouds into AWS, using the migration pattern, automating infrastructure, and cutting over with near‑zero downtime. We fine‑tune resources for performance and provide ongoing managed support.",
              },
              {
                icon: <Code size={32} className="text-blue-600" />,
                title: "AWS DevOps",
                description:
                  "DevOps consulting pipelines codify infrastructure and automate build‑test‑deploy cycles for rapid, reliable releases, while integrated security checks, policy guardrails, and real‑time telemetry sustain compliance, performance, and cost‑efficiency.",
              },
              {
                icon: <DollarSign size={32} className="text-blue-600" />,
                title: "AWS Cost Optimization",
                description:
                  "FinOps-driven cost optimization analyzes usage, rightsizes resources, and applies efficient pricing models to cut costs without impacting performance, catches drift and idle assets, keeping AWS expenses under control.",
              },
              {
                icon: <Settings size={32} className="text-blue-600" />,
                title: "AWS Application Modernization",
                description:
                  "We modernize legacy workloads into cloud‑native architectures with microservices, containers, and event‑driven patterns to enhance scalability. We streamline delivery with CI/CD, decoupled services, and built‑in observability for easier maintenance.",
              },
              {
                icon: <BarChart3 size={32} className="text-blue-600" />,
                title: "AWS Data Analytics",
                description:
                  "Scalable data pipelines organize and analyze information, fuelling dashboards while AI/ML models generate predictive insights. Robust governance and design keep the analytics platform secure, compliant, and efficient as data volumes expand.",
              },
              {
                icon: <Laptop size={32} className="text-blue-600" />,
                title: "AWS Cloud App Development",
                description:
                  "We design and build scalable, resilient applications using AWS best practices. Our approach uses modular architectures, automated deployment pipelines, and integrated security to accelerate development and ensure long‑term maintainability.",
              },
              {
                icon: <Shield size={32} className="text-blue-600" />,
                title: "AWS Cloud Security and Compliance",
                description:
                  "We build environments with security and compliance embedded at every layer to safeguard data, control access, and meet regulatory standards (HIPAA, GDPR, and SOC 2). With automated policies, real-time monitoring, and audits, cloud operations remain secure without compromising agility.",
              },
              {
                icon: <Target size={32} className="text-blue-600" />,
                title: "AWS Cloud Strategy and Roadmap",
                description:
                  "We define a clear path for cloud adoption and long‑term growth, aligned with business objectives. It includes cloud readiness assessment, cloud architecture design, and cloud infrastructure set up.",
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

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Explore how our solutions empower various industries. With deep
              expertise in each sector, we address unique challenges and drive
              transformative results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Heart size={32} className="text-blue-600" />,
                title: "Healthcare",
                description:
                  "Secure cloud environments with encryption, access controls, and audit logging help protect patient data and enable scalable health platforms",
              },
              {
                icon: <GraduationCap size={32} className="text-blue-600" />,
                title: "Edtech",
                description:
                  "Real-time content delivery supports seamless digital learning experiences, high availability, and fast global access for students and educators.",
              },
              {
                icon: <Banknote size={32} className="text-blue-600" />,
                title: "Fintech",
                description:
                  "Low-latency systems with built-in security and compliance features enable secure transactions, data protection, and adherence to financial regulations.",
              },
              {
                icon: <ShoppingCart size={32} className="text-blue-600" />,
                title: "Ecommerce",
                description:
                  "Elastic compute, caching, and integrated analytics help handle traffic surges, personalize shopping experiences, and reduce infrastructure costs.",
              },
              {
                icon: <Flask size={32} className="text-blue-600" />,
                title: "Biotech",
                description:
                  "High-performance computing speeds up research workflows, genomic analysis, and clinical trial processing in compliant environments.",
              },
              {
                icon: <BarChart size={32} className="text-blue-600" />,
                title: "Adtech",
                description:
                  "Real-time data ingestion and large-scale analytics power targeted advertising, campaign optimization, and rapid decision-making.",
              },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cloudtech Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Why Cloudtech is the Right Choice
            </h2>
            <p className="text-xl text-gray-600 mb-0">
              Cloudtech is an official member of the AWS community of partners
              and a trusted cloud application development and consulting vendor.
              AWS Certified Advanced Tier Services Partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full text-center">
              <div className="flex justify-center mb-4">
                <UserCheck size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customer-First Culture
              </h3>
              <p className="text-gray-600 mb-0">
                60% of our clients have been working with us for over 4 years
                maximizing their ROI by leveraging long-term partner
                relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full text-center">
              <div className="flex justify-center mb-4">
                <Star size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                5-Star Review Rating
              </h3>
              <p className="text-gray-600 mb-0">
                90% of our clients are willing to recommend us due to our
                transparency, responsiveness, and high professionalism.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full text-center">
              <div className="flex justify-center mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Full-Fledged AWS Expertise
              </h3>
              <p className="text-gray-600 mb-0">
                Our engineers passed AWS certifications that validates their
                technical competency in a wide specter of AWS services and
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AWS Specializations Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Verified AWS Specializations</h2>
            <p className="text-xl text-gray-600">
              Our AWS partnership certifications demonstrate our expertise and
              commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
            {[
              {
                title: "Advanced Tier Services",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws-c1.png",
              },
              {
                title: "DevOps Services Competency",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws-c2.png",
              },
              {
                title: "Amazon OpenSearch Service Delivery",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws-c3.png",
              },
              {
                title: "Amazon CloudFront Delivery",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws-c4.png",
              },
              {
                title: "Public Sector Partner",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws-c5.png",
              },
            ].map((specialization, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <img
                  src={specialization.image}
                  alt={specialization.title}
                  className="w-full h-30 object-contain mb-3"
                  style={{ maxHeight: "120px" }}
                />
                <h3 className="text-sm font-medium mb-0">
                  {specialization.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Certifications Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Our AWS Certifications</h2>
            <p className="text-xl text-gray-600">
              Our team holds multiple AWS certifications, demonstrating our deep
              expertise across the AWS ecosystem
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            {[
              {
                title: "Solutions Architect Professional",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/AWS1.png",
              },
              {
                title: "Solutions Architect Associate",
                image:
                  "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
              },
              {
                title: "DevOps Engineer Professional",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/aws3.png",
              },
              {
                title: "Developer Associate",
                image:
                  "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png",
              },
              {
                title: "SysOps Administrator Associate",
                image:
                  "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png",
              },
              {
                title: "Cloud Practitioner",
                image:
                  "https://hutechsolutions.com/wp-content/uploads/2025/05/AWS2.png",
              },
            ].map((certification, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border text-center">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-40 object-contain mb-3"
                  style={{ maxHeight: "150px" }}
                />
                <h3 className="text-sm font-medium mb-0">
                  {certification.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Tools Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              AWS Consultants Command Tool Set
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive suite of AWS tools and services we leverage to
              deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Cloud Strategy and Planning */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Target className="text-blue-600 mr-2" size={24} />
                AWS Cloud Strategy and Planning
              </h3>
              <ul className="space-y-3 mb-0">
                {[
                  {
                    icon: <Settings size={16} />,
                    name: "Well-Architected Tool",
                  },
                  { icon: <CheckCircle2 size={16} />, name: "Control Tower" },
                  { icon: <Network size={16} />, name: "Organizations" },
                  { icon: <Code size={16} />, name: "OpsWorks" },
                ].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Security and Compliance */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="text-blue-600 mr-2" size={24} />
                AWS Security and Compliance
              </h3>
              <ul className="space-y-3 mb-0">
                {[
                  { icon: <Activity size={16} />, name: "Amazon CloudWatch" },
                  { icon: <FileCheck size={16} />, name: "AWS Config" },
                  {
                    icon: <Key size={16} />,
                    name: "Identity and Access Management (IAM)",
                  },
                  { icon: <ShieldCheck size={16} />, name: "Security Hub" },
                  { icon: <AlertTriangle size={16} />, name: "GuardDuty" },
                  { icon: <Lock size={16} />, name: "Macie" },
                  { icon: <Shield size={16} />, name: "WAF" },
                  { icon: <Shield size={16} />, name: "Shield" },
                ].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Computing and Storage */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <ServerCrash className="text-blue-600 mr-2" size={24} />
                Computing and Storage
              </h3>
              <ul className="space-y-3 mb-0">
                {[
                  { icon: <Monitor size={16} />, name: "Amazon EC2" },
                  { icon: <Code size={16} />, name: "AWS Lambda" },
                  {
                    icon: <Box size={16} />,
                    name: "Elastic Kubernetes Service (EKS)",
                  },
                  { icon: <Archive size={16} />, name: "S3" },
                  {
                    icon: <HardDrive size={16} />,
                    name: "Elastic Block Store (EBS)",
                  },
                  { icon: <Database size={16} />, name: "Storage Gateway" },
                  { icon: <Archive size={16} />, name: "Glacier" },
                  {
                    icon: <Database size={16} />,
                    name: "Elastic File System (EFS)",
                  },
                ].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Migration and Modernization */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Truck className="text-blue-600 mr-2" size={24} />
                Migration and Modernization
              </h3>
              <ul className="space-y-3 mb-0">
                {[
                  { icon: <FileSearch size={16} />, name: "Migration Hub" },
                  {
                    icon: <ServerCrash size={16} />,
                    name: "Server Migration Service (SMS)",
                  },
                  {
                    icon: <Search size={16} />,
                    name: "Application Discovery Service",
                  },
                  {
                    icon: <DatabaseBackup size={16} />,
                    name: "Database Migration Service (DMS)",
                  },
                ].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* AWS Infrastructure and DevOps */}
            <div className="bg-white p-6 rounded-lg shadow-sm border h-full">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitBranch className="text-blue-600 mr-2" size={24} />
                AWS Infrastructure and DevOps
              </h3>
              <ul className="space-y-3 mb-0">
                {[
                  { icon: <Code size={16} />, name: "CloudFormation" },
                  { icon: <GitMerge size={16} />, name: "CodePipeline" },
                  { icon: <GitPullRequest size={16} />, name: "CodeBuild" },
                  { icon: <Rocket size={16} />, name: "CodeDeploy" },
                  {
                    icon: <Container size={16} />,
                    name: "Elastic Container Registry (ECR)",
                  },
                  { icon: <Boxes size={16} />, name: "Terraform" },
                  { icon: <Container size={16} />, name: "Docker" },
                  { icon: <Workflow size={16} />, name: "Jenkins" },
                ].map((tool, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-600 mr-2">{tool.icon}</span>
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Consulting Process Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">
              Our AWS Cloud Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive approach designed to guide businesses through
              every stage of their cloud journey—from initial assessment to
              ongoing operations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ClipboardCheck size={32} className="text-blue-600" />,
                title: "Cloud Readiness Assessment",
                description:
                  "Thorough evaluation of your existing IT infrastructure, workloads, and operational processes. We identify technical gaps, assess cloud maturity, and determine the most effective path for migration to AWS.",
              },
              {
                icon: <Route size={32} className="text-green-600" />,
                title: "Cloud Strategy and Roadmap",
                description:
                  "Development of a clear, customized cloud strategy aligned with your business goals. Our roadmap defines phased initiatives, resource allocation, and KPIs to ensure measurable progress and reduced risk during cloud adoption.",
              },
              {
                icon: <PenTool size={32} className="text-cyan-600" />,
                title: "Solution Design and Architecture",
                description:
                  "Creation of secure, scalable, and cost-efficient architectures following AWS Well-Architected Framework principles. Our solutions account for performance, resilience, availability, and compliance across all core cloud components.",
              },
              {
                icon: <Cog size={32} className="text-amber-600" />,
                title: "Implementation and Optimization",
                description:
                  "Deployment of defined architecture using infrastructure-as-code and automation tools to ensure repeatability and reliability. Workloads are continuously tuned for performance, cost, and security as they move to or operate within AWS.",
              },
              // {
              //   icon: <HeadphonesMic size={32} className="text-red-600" />,
              //   title: "Ongoing Support and Management",
              //   description: "Comprehensive post-deployment services including 24/7 monitoring, issue resolution, and proactive maintenance. Regular reviews and updates ensure your cloud environment evolves with your business needs while staying secure and compliant."
              // }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border h-full hover:shadow-md transition-shadow">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Expert Section */}
      <section
        className="py-20 text-white"
        style={{
          background: "linear-gradient(90deg, #592AB5, #4F8FF3)",
          border: "none",
        }}>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Have a talk with our AWS expert
            </h2>
            <p className="text-xl mb-8">
              Identify the key challenges that might affect your cloud
              environment, and find a productive strategy to tackle them.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
              style={{
                background: "#fff", // or any dark color
                color: "#000", // ensures text is white
                border: "none",
              }}>
              GET A CLOUD READINESS EVALUATION{" "}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />
      </section>
    </div>
  );
};

export default CloudConsulting;
