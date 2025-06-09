/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  DollarSign,
  ArrowRight,
  LineChart,
  BarChart,
  PieChart,
  Settings,
  Cloud,
  Shield,
  Target,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  CircleDollarSign,
  Boxes,
  CreditCard,
  Server,
  MonitorSmartphone,
} from "lucide-react";

const CostOptimization = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-cost-optimization.jpg")',
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
                Cloud Cost Optimization
              </h1>
              <p className="text-lg mb-6">
                Reduce operational costs and keep cloud bills under control with
                our cloud spend optimization services. We help our customers
                manage their operating expenses by optimizing their cloud
                resources and building the most effective cloud strategy as a
                pillar of their business.
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

      {/* Why Costs Are Growing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <TrendingUp className="text-blue-600 mr-4" size={32} />
                <h2 className="text-4xl font-bold">
                  Why are cloud costs growing?
                </h2>
              </div>
              <p className="text-xl mb-8 text-gray-600 leading-relaxed">
                Bringing down costs on maintenance is among the main reasons why
                companies migrate their workloads to the cloud. Indeed, cloud
                infrastructure can considerably reduce the total cost of
                ownership (TCO) – provided that it's designed to your needs and
                configured correctly.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
                <div className="flex">
                  <AlertTriangle
                    className="text-yellow-500 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <p className="text-gray-700">
                    If you're not careful, lack of a cloud strategy and random
                    resource usage can actually make things worse, to such an
                    extent that you can expect monthly increases in cloud
                    spending and astronomical bills.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-8">
              Common Reasons for Growing Cloud Costs:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center bg-white p-6 rounded-lg shadow-sm h-full">
                <Server className="text-blue-600 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Over-provisioning
                  </h4>
                  <p className="text-gray-600">
                    Over-provisioning instances and paying for excessive
                    capacities.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white p-6 rounded-lg shadow-sm h-full">
                <Settings className="text-blue-600 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Poor Configuration
                  </h4>
                  <p className="text-gray-600">
                    Inefficient resource allocation due to poor configuration of
                    services.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white p-6 rounded-lg shadow-sm h-full">
                <Boxes className="text-blue-600 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Abandoned Resources
                  </h4>
                  <p className="text-gray-600">
                    Paying for abandoned resources no longer in use.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white p-6 rounded-lg shadow-sm h-full">
                <MonitorSmartphone className="text-blue-600 mr-4" size={24} />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Underutilization
                  </h4>
                  <p className="text-gray-600">
                    Paying for 100% of computing capacities of underloaded
                    resources.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Can Help Section */}
            <div className="mt-16">
              <div className="flex items-center mb-6">
                <CircleDollarSign className="text-blue-600 mr-4" size={32} />
                <h3 className="text-2xl font-semibold">How we can help</h3>
              </div>
              <p className="text-gray-600 mb-8">
                At SHALB, we use a comprehensive approach to help customers
                reduce their cloud spend. Our cloud cost optimization services
                will help your company strike a balance between cost and
                performance while keeping cloud bills under control.
              </p>

              <h4 className="text-xl font-semibold mb-8">
                Our strategy is based on:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <LineChart size={24} />,
                    text: "Analysis of cloud spend dynamics",
                  },
                  {
                    icon: <Target size={24} />,
                    text: "Discovery of inefficient usage patterns",
                  },
                  {
                    icon: <BarChart size={24} />,
                    text: "Estimation of future expenses based on current resource usage",
                  },
                  {
                    icon: <PieChart size={24} />,
                    text: "Cloud costs tracking and management",
                  },
                  {
                    icon: <CreditCard size={24} />,
                    text: "Working within an allocated budget",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-white p-6 rounded-lg shadow-sm h-full">
                    <div className="text-blue-600 mr-4">{item.icon}</div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits of Cloud Cost Optimization
            </h2>
            <p className="text-xl text-gray-600">
              Maximize your cloud investment with our optimization strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign size={32} />,
                title: "Reduced Cloud Spend",
                description:
                  "Identify and eliminate unnecessary costs, reducing your overall cloud expenditure by up to 30%.",
              },
              {
                icon: <LineChart size={32} />,
                title: "Improved Resource Utilization",
                description:
                  "Optimize resource allocation and scaling to ensure maximum efficiency of your cloud infrastructure.",
              },
              {
                icon: <BarChart size={32} />,
                title: "Better Cost Visibility",
                description:
                  "Gain clear insights into your cloud spending patterns with detailed cost analysis and reporting.",
              },
              {
                icon: <PieChart size={32} />,
                title: "Optimized Performance",
                description:
                  "Balance cost optimization with performance to ensure your applications run efficiently.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-sm h-full">
                <div className="p-8 text-center">
                  <div className="text-blue-600 mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Cost Optimization Approach
            </h2>
            <p className="text-xl text-gray-600">
              A comprehensive strategy to optimize your cloud costs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Assessment & Analysis",
                description:
                  "Comprehensive evaluation of your current cloud infrastructure and spending patterns to identify optimization opportunities.",
              },
              {
                icon: <Settings size={32} />,
                title: "Resource Optimization",
                description:
                  "Right-sizing resources, implementing auto-scaling, and optimizing storage to reduce unnecessary costs.",
              },
              {
                icon: <Cloud size={32} />,
                title: "Architecture Review",
                description:
                  "Evaluating and optimizing your cloud architecture for cost-efficiency while maintaining performance.",
              },
              {
                icon: <Shield size={32} />,
                title: "Governance & Control",
                description:
                  "Implementing cost governance policies and controls to prevent unexpected cost increases.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-sm h-full">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">{step.icon}</div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Strategies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Cost Optimization Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to reduce your cloud costs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Resource Right-sizing",
                description:
                  "Analyze and adjust resource allocation based on actual usage patterns and requirements.",
                items: [
                  "Instance type optimization",
                  "Capacity planning",
                  "Performance analysis",
                  "Utilization monitoring",
                ],
              },
              {
                title: "Reserved Instance Planning",
                description:
                  "Strategic planning and implementation of reserved instances for predictable workloads.",
                items: [
                  "Usage analysis",
                  "Commitment planning",
                  "Cost comparison",
                  "ROI calculation",
                ],
              },
              {
                title: "Storage Optimization",
                description:
                  "Optimize storage costs through proper tiering and lifecycle management.",
                items: [
                  "Storage class analysis",
                  "Data lifecycle management",
                  "Backup optimization",
                  "Archive strategy",
                ],
              },
              {
                title: "Cost Monitoring & Reporting",
                description:
                  "Implement comprehensive cost monitoring and reporting solutions.",
                items: [
                  "Real-time monitoring",
                  "Cost allocation",
                  "Budget alerts",
                  "Trend analysis",
                ],
              },
            ].map((strategy, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-sm h-full">
                <div className="p-8">
                  <h3 className="text-lg font-semibold mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{strategy.description}</p>
                  <ul className="space-y-3">
                    {strategy.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle2
                          className="text-blue-600 mr-3"
                          size={20}
                        />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Success Metrics
            </h2>
            <p className="text-xl text-gray-600">
              Measurable results from our cost optimization services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                metric: "30%",
                title: "Average Cost Reduction",
                description:
                  "Typical reduction in cloud spending achieved through our optimization strategies",
              },
              {
                metric: "40%",
                title: "Resource Efficiency",
                description:
                  "Improvement in resource utilization and elimination of waste",
              },
              {
                metric: "100%",
                title: "Cost Visibility",
                description:
                  "Complete visibility into cloud spending across all services",
              },
              {
                metric: "24/7",
                title: "Monitoring",
                description:
                  "Continuous monitoring and optimization of cloud resources",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border shadow-sm h-full text-center">
                <div className="p-8">
                  <h3 className="text-5xl font-bold text-blue-600 mb-4">
                    {metric.metric}
                  </h3>
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Cloud Costs?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Get a free cloud cost audit and discover how much you could save
              with our optimization strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{
                  background: "#fff", // or any dark color
                  color: "#000", // ensures text is white
                  border: "none",
                }}>
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CostOptimization;
