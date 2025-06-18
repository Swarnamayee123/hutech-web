import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Settings, Cloud, Server, Database, Scale, Globe, Zap, DollarSign, LineChart, Users, Brain, Target, Award, MonitorSmartphone, AlertTriangle, CheckCircle2, Activity, Search, BarChart2, GitBranch, Workflow, HardDrive, Laptop, ArrowUpRight } from 'lucide-react';

const SRE = () => {
  return (
    <>
      {/* Hero Section */}
     <section
              className="text-white pb-20 pt-4 "
              style={{
                backgroundImage:
                  'url("https://hutechsolutions.com/wp-content/uploads/2025/05/site-reliability-engineering.jpg")',
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
                    Site Reliability Engineering as a Service
                    </h1>
                    <p className="text-lg mb-6">
                    Transform your operations with our SRE services. We help organizations improve system reliability, 
                    reduce downtime, and optimize performance through proven SRE practices and automation.
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Site Reliability Engineering Services
            </h2>
            <p className="text-xl mb-6 leading-relaxed">
              With over a decade of experience, our Site Reliability Engineering (SRE) engineers are well-equipped 
              to implement best practices, automation, and performance metrics.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our SRE team combines software engineering expertise with operations knowledge to design, build, 
              and maintain highly reliable and scalable systems. We focus on automating manual tasks, 
              implementing robust monitoring solutions, and ensuring system reliability through data-driven 
              decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Business Benefits of SRE (Site Reliability Engineering)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Minimized Downtime",
                description: "Reduce service interruptions and maintain high availability through proactive monitoring and automated recovery processes.",
                link: "#"
              },
              {
                title: "Cost Savings",
                description: "Optimize resource utilization and reduce operational costs through automation and efficient capacity planning.",
                link: "#"
              },
              {
                title: "Long-Term Growth",
                description: "Scale your infrastructure reliably to support business expansion and increasing user demands.",
                link: "#"
              },
              {
                title: "Enhanced User Experience",
                description: "Deliver consistent, high-quality service performance that keeps users satisfied and engaged.",
                link: "#"
              },
              {
                title: "Faster Time to Market",
                description: "Accelerate deployment cycles while maintaining system reliability and security.",
                link: "#"
              },
              {
                title: "Collaborative Culture",
                description: "Foster better collaboration between development and operations teams for improved efficiency.",
                link: "#"
              },
              {
                title: "Increased Revenue and Profitability",
                description: "Drive business growth through improved system reliability and reduced operational costs.",
                link: "#"
              },
              {
                title: "Better Brand Reputation",
                description: "Build trust with customers through consistent service delivery and minimal disruptions.",
                link: "#"
              },
              {
                title: "Higher Employee Productivity",
                description: "Enable teams to focus on innovation by reducing manual tasks and streamlining operations.",
                link: "#"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 h-full transition-all duration-300 hover:shadow-md hover:border-blue-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <ArrowUpRight className="text-blue-600 mr-3" size={24} />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core SRE Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Core SRE Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to enhance your system reliability</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle size={32} />,
                title: "Incident Management and Response",
                description: "Gart swiftly identifies and resolves system incidents to minimize downtime and ensure uninterrupted service availability. Our expert team implements robust incident response procedures and automated recovery processes."
              },
              {
                icon: <Activity size={32} />,
                title: "Scaling & Performance Optimization",
                description: "Gart analyzes system bottlenecks and optimizes performance to enhance response times, delivering an exceptional user experience. We implement auto-scaling solutions and performance monitoring to ensure optimal system operation."
              },
              {
                icon: <Shield size={32} />,
                title: "Fault Tolerance and Redundancy",
                description: "We design systems with fault tolerance and redundancy, ensuring continued operation even in the face of component failures. Our architecture includes multiple layers of redundancy and failover mechanisms."
              },
              {
                icon: <Workflow size={32} />,
                title: "Automated Deployment and Infrastructure Management",
                description: "We implement automated deployment pipelines and expertly manage infrastructure as code to streamline system updates and maintenance. Our automation reduces human error and accelerates deployment cycles."
              },
              {
                icon: <HardDrive size={32} />,
                title: "Backup and Disaster Recovery Services (DRaaS)",
                description: "Gart develops comprehensive disaster recovery plans and tests them to ensure business continuity in the event of major system failures or natural disasters. We implement automated backup solutions and regular recovery testing."
              },
              {
                icon: <Activity size={32} />,
                title: "Monitoring and Alerting",
                description: "Our engineers implement robust monitoring tools to track system health and performance, promptly setting up alerting mechanisms to notify our team of any anomalies or potential issues. We use advanced monitoring solutions for comprehensive system visibility."
              },
              {
                icon: <BarChart2 size={32} />,
                title: "Capacity Planning",
                description: "Our team proactively plans and scales resources to accommodate increasing user demands and future growth. We analyze usage patterns and implement predictive scaling strategies."
              },
              {
                icon: <Target size={32} />,
                title: "SLO and SLI Monitoring",
                description: "Our engineers define and track SLOs and SLIs to ensure that the system consistently meets the agreed-upon performance targets. We implement comprehensive monitoring and reporting of service level metrics."
              },
              {
                icon: <Laptop size={32} />,
                title: "Load Testing and Performance Tuning",
                description: "We conduct load tests and performance tuning exercises to ensure the system can handle expected traffic loads. Our team implements comprehensive performance testing strategies and optimization techniques."
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="p-6">
                  <div className="flex items-start mb-6">
                    <div className="text-blue-600 mr-4 mt-1">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Benefits of Availing SRE Service</h2>
            <p className="text-xl text-gray-600">Transform your operations with our SRE expertise</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield size={32} />,
                title: "Improved Reliability",
                description: "Enhance system reliability through proactive monitoring and incident prevention."
              },
              {
                icon: <Clock size={32} />,
                title: "Reduced Downtime",
                description: "Minimize service disruptions with automated recovery and incident response."
              },
              {
                icon: <Zap size={32} />,
                title: "Increased Efficiency",
                description: "Optimize operations through automation and elimination of manual tasks."
              },
              {
                icon: <DollarSign size={32} />,
                title: "Cost Optimization",
                description: "Reduce operational costs through improved resource utilization and automation."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="p-6 text-center">
                  <div className="text-blue-600 mx-auto mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Success Metrics</h2>
            <p className="text-xl text-gray-600">Measurable improvements in system reliability</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "99.99%",
                title: "Service Availability",
                description: "Achieve and maintain high service availability"
              },
              {
                metric: "50%",
                title: "MTTR Reduction",
                description: "Faster incident resolution through automation"
              },
              {
                metric: "70%",
                title: "Toil Reduction",
                description: "Eliminate manual work through automation"
              },
              {
                metric: "40%",
                title: "Cost Savings",
                description: "Reduce operational costs through optimization"
              }
            ].map((metric, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                <div className="p-6 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">{metric.metric}</h3>
                  <h4 className="text-lg font-semibold mb-4">{metric.title}</h4>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Improve Your System Reliability?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let our SRE experts help you achieve higher reliability and operational efficiency.
            </p>
            <Link 
              to="https://hutechsolutions.com/contact-us/" 
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              style={{
                background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
              }}
            >
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SRE;