import {
  UploadCloud,
  DownloadCloud,
  ArrowUp,
  ArrowDown,
  LucideIcon, // type for icons
} from "lucide-react";
  import { Button } from '../commomComponents/Button';
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../commomComponents/Card";
  
  const steps = [
    {
      icon: UploadCloud,
      title: 'Architecture Design & Planning',
      items: [
        'Deep Dive Analysis: We thoroughly analyze your business case and existing infrastructure.',
        'Current Infrastructure Audit: Identifying bottlenecks and areas for improvement.',
        'Tech Stack Selection: Impartial selection of optimal platforms, technologies, and tools considering integration possibilities.',
        'Future Cloud Infrastructure Blueprint: Designing a detailed roadmap for your new environment.',
      ],
    },
    {
      icon: DownloadCloud,
      title: 'Infrastructure Development & Implementation',
      items: [
        'Seamless Development: We either take full responsibility for delivery or consult your team on implementation.',
        'Current Infrastructure Optimization: Preparing your existing systems for transformation.',
        'Agreed Technologies & Tools Implementation: Building out your new cloud infrastructure.',
        'Team Introduction: Ensuring your team is comfortable and proficient with the new IT environment.',
      ],
    },
    {
      icon: ArrowUp,
      title: 'Ongoing Optimization & Management',
      items: [
        'Continuous Monitoring: Tracking 30+ key performance indicators (KPIs) and gathering statistics.',
        'Data-Driven Optimization: Creating a plan for continuous scaling and improvement.',
        'Cloud Infrastructure Consulting: Ongoing expert advice and support.',
        'Support with Scaling & New Features: Adapting your infrastructure as your business evolves.',
      ],
    },
  ];
  
  const solutions = [
    {
      icon: UploadCloud,
      title: 'Strategic Cloud Architecture Design',
      description:
        'Cloud computing provides amazing potential for the creation of dynamic and robust infrastructures. But it takes specialized expertise to navigate the myriad of cloud offerings and technologies.',
      features: [
        'Your Business Needs & Plans: We match the architecture to your strategic plans directly.',
        'Team Expectations: We make the solution workable and simple for your teams.',
        'Industry-Specific Compliance: We follow applicable compliance guidelines and industry best practices for your industry.',
      ],
    },
    {
      icon: DownloadCloud,
      title: 'Expert Cloud Infrastructure Engineering & Development',
      description:
        'An effective IT infrastructure operates as a seamlessly integrated system. Investing in expert cloud infrastructure design from the outset prevents costly trial-and-error approaches.',
      features: [
        'Architecture & Storage Design: Optimizing data storage and access.',
        'Networking Solutions: Ensuring seamless and secure connectivity.',
        'Advanced Security Measures: Implementing robust cybersecurity frameworks.',
        'Autoscaling & Load Balancing: Dynamic resource allocation for peak performance.',
        'System Monitoring & Alerting: Proactive identification and resolution of issues.',
        'High Robustness & Resilience: Building fault-tolerant and highly available systems.',
      ],
    },
    {
      icon: ArrowUp,
      title: 'Impartial Cloud Infrastructure Consulting',
      description:
        "A well-thought-out cloud infrastructure is paramount for IT operational efficiency. Regardless of your infrastructure's size or complexity, we provide expert consulting services.",
      features: [
        'Elaborate State-of-the-Art Infrastructure Concepts: Guiding you from ideation to execution.',
        'Review Existing Infrastructure: Identifying bottlenecks and suggesting improvements.',
        'Complete cloud adoption coverage: from architecture planning to cost optimization.',
      ],
    },
    {
      icon: ArrowDown,
      title: 'Infrastructure Automation Consulting (IaC)',
      description:
        'Transform your infrastructure management with Infrastructure as Code (IaC). By describing your infrastructure as code, you can automate building, deploying, and managing your cloud environments.',
      features: [
        'Repeatable & Resilient Infrastructure: Consistent deployments every time.',
        'Transparent Environment: Clear visibility into your infrastructure\'s configuration.',
        'Easily Maintainable System: Streamlined updates and troubleshooting.',
        'Faster Iterations: Accelerate your development and deployment cycles.',
      ],
    },
  ];
  
  const benefits = [
    {
      icon: ArrowUp,
      title: 'Scalability',
      description: 'Seamlessly adjust to evolving demands and future expansion.',
    },
    {
      icon: DownloadCloud,
      title: 'Cost-Efficiency',
      description: 'Optimize your return on investment via intelligent resource utilization.',
    },
    {
      icon: UploadCloud,
      title: 'Security',
      description: 'Establish robust measures to safeguard your valuable data and applications.',
    },
    {
      icon: ArrowDown,
      title: 'Performance',
      description: 'Optimize speed and reliability for all your operations.',
    },
  ];
  
  const HomePage = () => {
    return (
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Cloud Infrastructure Design Services
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
                Construct Your Future-Proof Foundation
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                A strong, scalable cloud infrastructure is a must today; Sigma Software provides expert cloud infrastructure design services for high-performance, cost-efficient, and secure IT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3 text-lg">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg">
                  View Our Solutions
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/70" />
          </div>
        </section>
  
        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our 3-Step Cloud Infrastructure Design Process
              </h2>
              <p className="text-lg text-gray-600">
                We follow a structured approach to ensure optimal results:
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="mb-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-center mt-3">
                            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Step {index + 1}: {step.title}
                          </h3>
                          <ul className="space-y-4">
                            {step.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center mb-8">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Solutions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Cloud Infrastructure Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Our experts in certified cloud architects and engineers bring extensive industry experience and technical know-how to provide end-to-end cloud infrastructure design and implementation.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Select Our Cloud Infrastructure Design?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We don't merely assist you in cloud migration. Our specialists design customized solutions that meet your exclusive business objectives, expansion plans, and existing IT infrastructure. We maximize your infrastructure for:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-medium">
                <UploadCloud className="w-5 h-5" />
                Resilience: Plan for high availability and rapid disaster recovery
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default HomePage;
  