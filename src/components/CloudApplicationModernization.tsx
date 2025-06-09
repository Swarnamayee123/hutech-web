/** @format */

import { Button } from "../commomComponents/Button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../commomComponents/Card.tsx";
import {
  Cloud,
  Code,
  Network,
  RefreshCw,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Application-Modernization.jpeg")',
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
                Cloud Application Modernization
              </h1>
              <p className="text-lg mb-6">
                Cloud Application Modernization can change how you run your
                business, helping you stay competitive now and in the future.
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

      {/* Holistic Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A Holistic Approach to Cloud Modernization
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                alt="Technology infrastructure"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-gray-600 leading-relaxed">
                We partner with you to navigate the entire space of cloud. We
                emphasize critical components that include Platform as a Service
                (PaaS) models, containerization of applications, and hybrid
                cloud applications versus software as a service (SaaS)
                solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Essentially, we are focused on helping your data have a smooth
                flow so that we can help break down silos, as well as support
                both your information systems and your employees.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The cloud modernization process begins with an obsession over
                the current business landscape. From there, we create a defined
                roadmap, develop a solid cloud strategy, and help you align
                every aspect of your cloud strategy back to your larger and most
                important business goals.
              </p>
              <div className="flex items-center text-blue-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">
                  Building a technology ecosystem to define your business of the
                  future
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section
        id="pillars"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Key Pillars of Application Modernization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cloud Modernization will require your applications modernization
              efforts that will be defined in Key Pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* App Transformation */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  App Transformation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Application modernization is part of a larger application
                  transformation. App transformation can include reducing
                  applications, adding applications or modernizing applications
                  for optimizing your digital transformation strategy.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Networking */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  The cloud relies on robust network connections to third-party
                  providers. We'll help you determine the ideal network setup
                  and cloud provider that best meets your specific needs and
                  goals.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Cloud Modernization */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cloud className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Cloud Modernization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  The journey doesn't stop once you're in the cloud. Processes
                  and applications should be continuously updated after cloud
                  adoption. This ongoing ability to modernize keeps your
                  business agile and competitive.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Application Migrations */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <RefreshCw className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Application Migrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  Often linked with cloud app modernization, migrations can be
                  part of broader optimization efforts. We facilitate app
                  movements between clouds and create hybrid cloud environments.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Custom Application Development */}
            <Card className="group hover:shadow-xl transition-all duration-300 animate-scale-in border-0 shadow-lg md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Custom Application Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  A vital component of app modernization. By reimagining your
                  applications with modern infrastructure and deployment
                  practices, you gain the power to truly own your digital
                  transformation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your Apps?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don't let outdated systems hold your business back. Get Started on
              your cloud application modernization journey today and unlock a
              more efficient, agile, and competitive future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Start Your Modernization Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
