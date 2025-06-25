
import {
    ArrowRight,
    Timer,
    ArrowUpDown,
    UserCog,
    DollarSign,
    Wallet,
    TrendingDown,
    Hourglass,
    UserCheck,
    PlusCircle,
    MinusCircle,
    Lightbulb,
  } from "lucide-react";
  import Image from "next/image";
  import Tabs from "../../components/Tabs";
  import SEO from "../../components/SEO";
  import React, { useState } from "react";
export default function CloudNativeDevelopment() {
    const [activeTab, setActiveTab] = useState("cloud-native");
    const [activeFaq, setActiveFaq] = useState(null);
    return (
      <>
       <SEO
        title="Cloud Native Development Services | Build Modern Apps with Hutech Solutions"
        description="Accelerate innovation with Cloud Native Development services by Hutech Solutions. Build scalable, containerized, and resilient applications for the cloud."
      />
      <div>
        {/* Hero Section */}
        <section
              className="text-white pb-20 pt-4 "
              style={{
                backgroundImage:
                  'url("https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-native-development.jpg")',
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
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20 w-[200vh]">
                    Cloud Native Development
                    </h1>
                    <p className="text-lg mb-6">
                    Build scalable, resilient, and modern applications with our
                cloud-native development services. We help organizations
                leverage microservices, containers, and serverless architectures
                to create innovative solutions that drive business growth.
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="lg:w-5/6">
              <h2 className="text-4xl font-bold mb-8 text-center">
                Leverage the Power of Cloud Native Development for Superior
                Agility & Resilience
              </h2>
              <p className="text-1xl mb-6 leading-relaxed">
                The business landscape is rapidly evolving, and cloud native
                development is becoming the norm. There is an ever-growing need
                for agility and resilience to keep up with industry changes.
                Gartner predicted that 85% of enterprises would have a
                cloud-first principle by 2025. This prediction is being realized
                with the demand for cloud native software development services
                skyrocketing. According to McKinsey, companies can reduce
                application development and maintenance costs by up to 40% with
                cloud native solutions.
              </p>
              <p className="mb-10">
                As a global leader in cloud native application development
                services, we leverage the power of the cloud to help enterprises
                like yours build modern, hyper-scalable applications that excel
                in their markets. Our comprehensive cloud native transformation
                services enable you to optimize your current workloads and
                achieve cost savings, enhanced scalability, improved security,
                and maximized performance.
              </p>

              <div className="bg-gray-100 p-6 lg:p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-6">
                 {` Cloudtech's Cloud-native Services`}
                </h3>
                <p className="mb-6">
                  {`Cloudtech's cloud native services empower businesses to fully
                  leverage the power of the cloud, ensuring agility,
                  scalability, and efficiency. Our offerings include
                  comprehensive re-architecture services, transforming legacy
                  applications to seamlessly operate in a cloud environment. We
                  excel at building robust microservices that enhance
                  application modularity and resilience.`}
                </p>
                <p className="mb-6">
                 {` Additionally, our team specializes in developing applications
                  from scratch, tailored to meet your specific business needs.
                  So, whether your cloud native software development needs
                  pertain to strategic and technical inputs, design and
                  implementation, cloud-based solutioning, or application
                  modernization, we can serve you.`}
                </p>
                <p className="mb-0">
                  {`By harnessing the latest cloud technologies, Cloudtech ensures
                  your applications are future-ready, scalable, and optimized
                  for peak performance.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              {/* Tabs Navigation */}

              <Tabs
                tabs={[
                  {
                    name: "CLOUD-NATIVE APPLICATION",
                    content: (
                      <>
                        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
                          To maximize the game-changing benefits of the public
                          cloud, a cloud native application development approach
                          is essential. We empower your team to implement
                          innovative cloud strategies to rapidly develop stable
                          and scalable business applications in multi- or
                          hybrid-cloud environments. Our approach is grounded in
                          evolving industry best practices as well as your
                          unique application development needs. Further, our
                          preferred-partner status with leading cloud providers
                          ensures access to the best resources to set you up for
                          cloud transformation success.
                        </div>
                    <div className="border border-[#DDD] rounded-2xl p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            Case study:
                          </h3>
                          <h4 className="text-md font-medium mb-4">
                            American Cybersecurity Giant Adopts Cloud Native
                            Approach to Achieve High Scalability & Performance
                          </h4>
                          <a
                            href="https://hutechsolutions.com/contact-us/"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                            READ MORE <ArrowRight className="ml-2" size={20} />
                          </a>
                        </div>
                      </>
                    ),
                  },
                  {
                    name: "MONOLITHIC TO MICROSERVICES",
                    content: (
                      <>
                        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
                         {` Starting a cloud native application from scratch can
                          be challenging due to uncertainties regarding the
                          development process. However, we have you covered.
                          Cloudtech's experts have assisted many customers in
                          designing cloud native products from the ground up
                          using the microservices architecture. Helping them
                          make the transition from monolithic to microservices
                          has ensured greater efficiency, quicker deployments,
                          and improved scalability. And this has translated into
                          an overall faster time-to-market and quicker ROI.`}
                        </div>
                        <div className="border border-[#DDD] rounded-2xl p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            Case study:
                          </h3>
                          <h4 className="text-md font-medium mb-4">
                           {` Global Enterprise Achieves 40% Faster Deployments
                            Through Microservices Migration`}
                          </h4>
                          <a
                           href="https://hutechsolutions.com/contact-us/"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                            READ MORE <ArrowRight className="ml-2" size={20} />
                          </a>
                        </div>
                      </>
                    ),
                  },
                  {
                    name: "CLOUD RE-ARCHITECTURE",
                    content: (
                      <>
                        <div className="flex flex-col lg:flex-row justify-between items-center pb-8">
                          {`Access to modern, secure, and cost-effective cloud
                          infrastructure is crucial for today's business
                          operations. However, ensuring your technology stack
                          and databases meet the requirements for cloud
                          deployment can be challenging. This is a situation
                          that requires re-architecting for the cloud. At
                          Cloudtech, we guide you through the latest
                          advancements in cloud native re-architecting, enabling
                          you to design, build, and run your business on the
                          most efficient platform available. Re-architecting for
                          the cloud ensures that a firm foundation is set for
                          future scalability, efficiency, transparency, and cost
                          savings.`}
                        </div>
                     <div className="border border-[#DDD] rounded-2xl p-6">
                          <h3 className="text-lg font-semibold mb-4">
                            Case study:
                          </h3>
                          <h4 className="text-md font-medium mb-4">
                           {` Financial Services Provider Achieves 60% Cost
                            Reduction Through Cloud Re-architecture`}
                          </h4>
                          <a
                           href="https://hutechsolutions.com/contact-us/"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                            READ MORE <ArrowRight className="ml-2" size={20} />
                          </a>
                        </div>
                      </>
                    ),
                  },
                ]}
              />
              {/* Tab Content */}
              <div>
                {activeTab === "cloud-native" && (
                  <div className="animate-fade-in"></div>
                )}

                {activeTab === "monolithic" && (
                  <div className="animate-fade-in">
                    <p className="mb-6 text-slate-700">
                      Starting a cloud native application from scratch can be
                      challenging due to uncertainties...
                    </p>
                   <div className="border border-[#DDD] rounded-2xl p-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Case study:
                      </h3>
                      <h4 className="text-md font-medium mb-4">
                        Global Enterprise Achieves 40% Faster Deployments
                        Through Microservices Migration
                      </h4>
                      <a
                        to="/case-studies/microservices-migration"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                        READ MORE <ArrowRight className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                )}

                {activeTab === "re-architecture" && (
                  <div className="animate-fade-in">
                    <p className="mb-6 text-slate-700">
                      {`Access to modern, secure, and cost-effective cloud
                      infrastructure is crucial for today's business...`}
                    </p>
                   <div className="border border-[#DDD] rounded-2xl p-6">
                      <h3 className="text-lg font-semibold mb-4">
                        Case study:
                      </h3>
                      <h4 className="text-md font-medium mb-4">
                        Financial Services Provider Achieves 60% Cost Reduction
                        Through Cloud Re-architecture
                      </h4>
                      <a
                        to="/case-studies/cloud-rearchitecture"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium">
                        READ MORE <ArrowRight className="ml-2" size={20} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cloud Native Application Development Difference */}
      <section className="py-20 bg-gray-100 overflow-x-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center"
    style={{ gap: "2rem", 
      paddingLeft: "2rem",
      paddingRight: "2rem",
    }}>
      <div className="w-full lg:w-[55%] lg:pr-8">
        <h2 className="text-4xl font-bold mb-8 text-left">
          The Cloudtech Cloud Native Application Development Difference
        </h2>
        <p className="mb-6">
         {` Cloudtech's cloud native app development offering empowers
          businesses to develop born-on-the-cloud digital applications
          that ensure improved customer experience and massive efficiency
          gains.`}
        </p>
        <p className="mb-6">
        {`  Our expert-driven cloud native software development methodology
          ensures that enterprises can tap into the best the cloud has to
          offer, whether in terms of architecture, improved security and
          compliance, or interoperability.`}
        </p>
        <p className="mb-6">
          {`Cloud native transformation with Cloudtech guarantees
          scalability based on demand, faster time to market, and reduced
          total cost of ownership.`}
        </p>
      </div>
      <div className="w-full lg:w-[45%]">
        <Image
          src="https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Native-Application.jpg"
          alt="Cloud Native Development Team"
          className="w-full max-w-full rounded-3xl shadow-lg"
          width={600}
          height={400}
        />
      </div>
    </div>
  </div>
</section>



      {/* Choose Best Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center"
          style={{ gap: "2rem", 
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}>
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src="https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Native-Applications2.jpg"
                alt="Cloud Native Security"
                className="w-full rounded-3xl shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-8 text-left">
                Choose the Best Approach for Your Cloud Native Applications
              </h2>
              <p className="mb-6">
                Our team of experts can help you zero in on a bespoke approach
                to your cloud native applications. We are vendor preferred due
                to our broad breadth of experience with cloud native solutions
                and capability to deliver transformation at scale regardless of
                the technologies involved.
              </p>
              <p className="mb-6">
                {`Our solutions encompass technologies including containerization,
                microservices, serverless computing, multi-tenancy, scalable
                storage, distributed caching, infrastructure as code (IaC), and
                cutting-edge DevOps practices. Whatever your specific
                requirement around cloud native transformation may be, we have
                you covered.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Native Development Process */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="lg:w-5/6">
              <h2 className="text-4xl font-bold mb-8 text-left">
                The Cloud Native Application Development Process
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                {`Cloudtech's experts use industry-leading approaches to cloud
                native app development. Getting started on the cloud begins with
                in-depth analysis of existing resources and data as well as
                planning. Transforming monolithic components to MACH-compliant
                microservices might be required next. The next step would be to
                select a suitable cloud environment based on multiple
                parameters, including cost and need for scalability. The next
                step would involve cloud native application development or
                re-architecting the existing application for the cloud. Testing
                the application before deployment is crucial. The final step
                would be ongoing monitoring and maintenance to ensure optimal
                performance and robust data security.`}
              </p>

              {/* <div className="text-center">
                <Image
                  src="https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Native-Application4.jpg"
                  alt="Cloud Native Development Process"
                  className="w-full rounded-3xl shadow-lg"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="pt-4 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
           {` Business Benefits with Cloudtech's Cloud Native Development Services`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <Timer size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">60%</h3>
              <p className="text-gray-600">reduction in Development Time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <ArrowUpDown size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">25%</h3>
              <p className="text-gray-600">improvement in Deployment Time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <UserCog size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">40%</h3>
              <p className="text-gray-600">improvement in Release Management</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <DollarSign size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">30%</h3>
              <p className="text-gray-600">reduction in overall costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accelerators Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Cutting-edge Accelerators for your Cloud Native software
            development journey
          </h2>

          <div className="flex items-center mb-10"
          style={{ gap: "2rem", 
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}>
            <div className="lg:w-1/2 lg:pr-12">
              <h3 className="text-2xl font-bold mb-6">TECHCELLO for Cloud</h3>
              <p className="mb-6">
               {` Cloudtech's cloud development framework, Techcello, is a
                one-stop solution for all your cloud-based applications and SaaS
                requirements. Techcello provides custom SaaS-based solutions and
                comes with an architecture that is completely cloud independent.
                This ensures you will not be handicapped with one cloud
                provider. The development process involves out-of-the box CI/CD
                options available to set up automated release pipelines.`}
              </p>
              {/* <div className="mb-6">
                <h4 className="text-lg mb-4">
                  Case study: Global Education Pioneer Conquers Liabilities of
                  Single-Tenant Application with Techcello
                </h4>
                <Link
                  to="/case-studies/techcello"
                  className="text-purple-700 hover:text-purple-600 inline-flex items-center">
                  READ MORE <ArrowRight className="ml-2" size={20} />
                </Link>
              </div> */}
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Native-Application4.jpg"
                alt="Techcello Framework"
                className="w-full rounded-3xl shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>

          <div className="flex items-center"
          style={{ gap: "2rem", 
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}>
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Microservices Development"
                className="w-full rounded-3xl shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6">
                TECHCELLO for Microservices
              </h3>
              <p className="mb-6">
               {` Organizations today are adopting microservices and APIs to gain
                a competitive edge, simplify IT, and accelerate their move to
                the cloud. Research shows over 60% of customers advance faster
                in digital transformation by embracing microservices.
                Transitioning from monolithic to microservices architecture
                offers a scalable, stable, reusable, and agile solution.
                However, building microservices architecture is complex and
                costly without expertise. Techcello for microservices empowers
                organizations to swiftly develop microservices solutions and
                fast-forward the journey to the cloud.`}
              </p>
              {/* <div className="mb-6">
                <h4 className="text-lg mb-4">
                  Case Study: Techcello for Microservices Empowers a Leading
                  Professional Services Firm to Achieve Unparalleled
                  Availability, Scalability & Security
                </h4>
                <Link
                  to="/case-studies/techcello-microservices"
                  className="text-purple-700 hover:text-purple-600 inline-flex items-center">
                  READ MORE <ArrowRight className="ml-2" size={20} />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Using Techcello Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Benefits of Using Techcello in Your Cloud Native Development
            Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <Wallet size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">50%</h3>
              <p className="text-gray-600 text-center">
                savings in your engineering budget
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <TrendingDown size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">10X</h3>
              <p className="text-gray-600 text-center">
                times reduction in operating expenses
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <DollarSign size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">40%</h3>
              <p className="text-gray-600 text-center">reduction in trial conversions</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <Hourglass size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">50%</h3>
              <p className="text-gray-600 text-center">
                reduction in implementation time and cost
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-purple-700 mx-auto mb-6">
                <UserCheck size={48} />
              </div>
              <h3 className="text-4xl font-bold mb-4">60-80%</h3>
              <p className="text-gray-600">reduction in support workload</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Selection Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center"
          style={{ gap: "2rem", 
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}>
            <div className="lg:w-1/2 lg:pr-12">
              <h2 className="text-4xl font-bold mb-8 text-left">
                Choosing the Right Cloud Native Development Partner
              </h2>
              <p className="text-xl mb-6 leading-relaxed">
               {` The right cloud native development partner for you is one with
                the experience and expertise needed to leverage the power of
                cutting-edge technologies including AI. Our experts can infuse
                AI into critical areas of work including code generation and
                completion. We also have industry-leading AI capabilities in the
                areas of data management and machine learning for continuous
                optimization.`}
              </p>
              <a
                href="https://hutechsolutions.com/contact-us/"
                className="text-purple-700 hover:text-purple-600 inline-flex items-center">
                LEARN MORE <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Cloud Native Development Partner"
                className="w-full rounded-3xl shadow-lg"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
          <div className="flex justify-center">
            <div className="lg:w-5/6">
              {[
                {
                  question:
                    "How does the microservices architecture support cloud native development?",
                  answer:
                    "Microservices architecture is fundamental to cloud native development as it enables building applications as a collection of small, independent services. This approach provides several benefits including: improved scalability where individual services can be scaled independently, enhanced resilience as failures are isolated to specific services, faster development cycles with independent deployment of services, and better maintainability through smaller, focused codebases. Our expertise in microservices helps organizations fully leverage these advantages while avoiding common pitfalls in implementation.",
                },
                {
                  question:
                    "How do you approach a cloud native transformation for my existing applications?",
                  answer:
                    "Our approach to cloud native transformation follows a systematic methodology: 1) Assessment of current architecture and identification of transformation goals, 2) Development of a detailed transformation roadmap, 3) Modernization of application architecture using cloud native principles, 4) Implementation of DevOps practices and automation, 5) Gradual migration with minimal disruption, and 6) Continuous optimization and monitoring. We ensure the transformation aligns with your business objectives while maintaining application stability throughout the process.",
                },
                {
                  question:
                    "Can you migrate our monolithic applications to a cloud native architecture?",
                  answer:
                    "Yes, we specialize in migrating monolithic applications to cloud native architectures. Our process involves: 1) Analyzing the existing monolith to identify bounded contexts and service boundaries, 2) Creating a detailed migration strategy that minimizes risk and disruption, 3) Gradually decomposing the monolith into microservices, 4) Implementing cloud native patterns and best practices, and 5) Setting up robust monitoring and observability. We've successfully completed numerous such migrations across various industries.",
                },
                {
                  question: "Do you support hybrid or multi-cloud deployments?",
                  answer:
                    "Yes, we provide comprehensive support for both hybrid and multi-cloud deployments. Our solutions are designed to be cloud-agnostic and can work seamlessly across different cloud providers and on-premises infrastructure. We implement robust orchestration, ensure consistent security policies, and provide unified monitoring across all environments. This flexibility allows you to leverage the best capabilities of each platform while avoiding vendor lock-in.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm mb-4">
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-black-700">
                        {faq.question}
                      </h3>
                      {activeFaq === index ? (
                        <MinusCircle className="text-black-700" size={24} />
                      ) : (
                        <PlusCircle className="text-black-700" size={24} />
                      )}
                    </div>
                  </div>
                  {activeFaq === index && (
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
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-center">
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Cloud Native Journey?
              </h2>
              <p className="text-xl mb-6 leading-relaxed">
                Let our experts help you transform your applications with cloud
                native development.
              </p>
              <a
                href="https://hutechsolutions.com/contact-us/"
                className="inline-block text-white font-semibold py-3 px-8 rounded-lg text-lg"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Get Started Today{" "}
                <ArrowRight className="ml-2 inline" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
      </>
    );
  }
  