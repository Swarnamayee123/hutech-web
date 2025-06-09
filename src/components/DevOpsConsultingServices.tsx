import React from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Cloud,
  Settings,
  Zap,
  ArrowRight,
  CheckCircle,
  Shield,
  Users
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../commomComponents/Card';
import { Button } from '../commomComponents/Button';
import { Badge } from '../commomComponents/badge';

const DevOpsConsultingServices = () => {
  const services = [
    {
      title: "Infrastructure Design",
      description: "Engage with a modern, scalable, and highly effective infrastructure built specifically for your business objectives.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cloud Architecture and Services",
      description: "Reduce costs and improve productivity through flexible cloud solutions with AWS, GCP, Azure, and Digital Ocean.",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Kubernetes Deployment",
      description: "Harness the full power of container orchestration with our end-to-end Kubernetes solutions.",
      icon: <Settings className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Container Orchestration",
      description: "Package your code, configuration, and dependencies into containers for reliable application deployment.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cloud Migration",
      description: "Migrate complex legacy projects to cloud environments seamlessly with our skilled engineers.",
      icon: <ArrowRight className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "CI/CD Implementation",
      description: "Build reliable Continuous Integration and Continuous Delivery pipelines that automate your release process.",
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cloud Cost Optimization",
      description: "Save dramatically on cloud costs using the best optimization and tuning strategies.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Performance Optimization",
      description: "Analyze your infrastructure and identify tactical changes to optimize your system's performance.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Disaster Recovery",
      description: "Protect critical data with thoroughly tested, reliable, automated, and regular backup procedures.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Security Hardening (DevSecOps)",
      description: "Bolster your application's security posture with expert DevSecOps consulting and best practices.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
  ];

  const benefits = [
    {
      title: "Faster Development Cycle",
      description: "Achieve quicker time-to-market and uninterrupted delivery of new features, helping you stay competitive.",
    },
    {
      title: "Improved App Resiliency",
      description: "Develop more robust and dependable applications that can weather challenges while operating at peak performance.",
    },
    {
      title: "Reduced Infrastructure Maintenance Costs",
      description: "Make your IT budget more effective and efficient through optimized resource usage and automation.",
    },
    {
      title: "Better Quality, Stability, and Performance",
      description: "Enhance the overall quality, stability, and performance of your applications and services.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700">DevOps Excellence</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                DevOps Consulting Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our DevOps consulting helps you reshape software delivery and accelerate operational efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                alt="DevOps"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose Hutech Solutions for DevOps?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hutech Solutions leads with proactive DevOps consulting and up-to-date methodologies tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                We embrace challenges and elevate your IT capabilities
              </h3>
              <p className="text-gray-600">
                Our DevOps engineers apply cutting-edge tools and proven processes to deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
                alt="DevOps Team"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Full Range of DevOps Consulting Disciplines
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to transform your IT infrastructure and operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-600">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Benefits You Will Experience With Hutech Solutions
            </h2>
            <p className="text-xl text-blue-100">
              Transform your business with measurable improvements
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
  className="py-20 text-white"
  style={{
    background: "linear-gradient(90deg, #592AB5, #4F8FF3)",
  }}
>
  <div className="container px-4 mx-auto max-w-7xl text-center">
    <div className="space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Do you want to see IT become a value creator in your organization?
      </h2>
      <p className="text-xl text-blue-100 max-w-2xl mx-auto">
        Contact Hutech Solutions today to start your DevOps transformation project!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Contact Us Today
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-white hover:bg-white hover:text-blue-600"
        >
          Schedule Consultation
        </Button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default DevOpsConsultingServices;
