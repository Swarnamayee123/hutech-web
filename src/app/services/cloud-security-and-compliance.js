/** @format */
import {
  Shield,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  Users,
  Clock,
  AlertTriangle,
  Search,
  TrendingUp,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import SEO from "../../components/SEO";
export default function SecurityCompliancePage() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Proactive Compliance",
      description:
        "Our cloud compliance services facilitate ongoing adherence to regulatory mandates across your entire infrastructure, from data centers to the cloud. In many cases, we achieve this without requiring you to change your existing applications.",
    },
    {
      icon: Shield,
      title: "Secure Data",
      description:
        "Protect your critical data and prevent misuse by implementing strong authentication, role-based access control, and high-strength encryption.",
    },
    {
      icon: Users,
      title: "Centralization & Integration",
      description:
        "We deliver a centralized cloud security and compliance function. This enables better data management, more effective auditing, and helps achieve necessary regulations.",
    },
    {
      icon: Clock,
      title: "24/7 Security Support",
      description:
        "We provide continuous monitoring and immediate security support when you need it, ensuring your cloud environment is never unsecured.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description:
        "Our proactive programs and robust incident response capabilities can significantly mitigate the effects of any cyber-event.",
    },
    {
      icon: Search,
      title: "Proactive Detection and Response",
      description:
        "We use advanced strategies and technology to identify and react to threats before they materialize.",
    },
    {
      icon: TrendingUp,
      title: "Efficiency & Productivity",
      description:
        "Consolidate your security function, eliminate manual overhead, and boost productivity and efficiency when running your cloud environment.",
    },
  ];

  return (
    <>
      <SEO
        title="Cloud Security & Compliance Services | Trusted by Hutech Solutions"
        description="Protect your cloud infrastructure with Hutech Solutions' Cloud Security & Compliance Services. Stay secure, meet regulatory standards, and reduce risk at scale."
      />
      <div>
        {/* Hero Section */}
        <section
          className='text-white pb-20 pt-4 '
          style={{
            backgroundImage:
              'url(" https://hutechsolutions.com/wp-content/uploads/2025/06/Cloud-Security-and-Compliance-1.jpeg")',
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
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20 leading-tight">
                  Cloud Security & Compliance Services
                </h1>
                <p className="text-lg mb-6">
                  {`In today's fast-paced, ever-changing digital world, data
                breaches and compliance demands are constant realities.
                Protecting your organization's cloud assets isn't just
                important; it's absolutely critical.`}
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

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Expert Cloud Security Solutions
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Hutech Solutions is a distinguished Offshore Software
                  Development Service Provider with a strong commitment to Cloud
                  Security and Compliance. Our team of seasoned security
                  professionals is ready to design and implement cloud security
                  strategies that align with industry standards and regulations,
                  tailored precisely to your requirements.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We stay current with all regulatory updates to ensure your
                  cloud environment remains compliant with every necessary
                  standard. The risks associated with compliance and guarding
                  sensitive information from breaches can seem daunting and
                  overwhelming. However, by choosing Hutech Solutions, you can
                  rest assured that your digital assets are safe.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                 {` We leverage our experience and technology to create custom
                  solutions that will minimize risk and introduce a new culture
                  of security and compliance into your organization. We'll put
                  the necessary controls in place, allowing you to focus on
                  driving your business, confident that your data is secured and
                  compliant in today's digital landscape, now, and in the
                  future.`}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Key Benefits of Our Cloud Security & Compliance Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your
                business and ensure compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 6).map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Final Benefit Card - Full Width */}
            <div className="mt-8">
              <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {benefits[6].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {benefits[6].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Hutech Solutions for Cloud Security?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-lg text-blue-100 leading-relaxed">
                 {` Our cloud security and compliance consulting service
                  demonstrates our unwavering commitment to securing your
                  organization's digital assets and maintaining compliance. With
                  an established team of security and compliance professionals,
                  advanced technology, and a proactive delivery methodology, we
                  provide solutions that protect your data and enable your
                  business to securely thrive in the digital world.`}
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Industry Expertise
                      </h3>
                      <p className="text-blue-200">
                        Proven track record in cloud security
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Expert Team</h3>
                      <p className="text-blue-200">
                        Seasoned security professionals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Advanced Technology
                      </h3>
                      <p className="text-blue-200">
                        Cutting-edge security solutions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        Proactive Approach
                      </h3>
                      <p className="text-blue-200">
                        Preventive security methodology
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:flex justify-center">
                <div className="relative">
                  <Image
                    src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center`}
                    alt="Cloud Security Dashboard"
                    className="rounded-2xl shadow-2xl border border-blue-300/20"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="py-20 text-white"
          style={{
            background: "linear-gradient(90deg, #592AB5, #4F8FF3)",
          }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Excited to learn more and secure your cloud environment?
              </h2>
              <p className="text-xl text-blue-100 mb-10">
               {` Don't let security vulnerabilities put your business at risk.
                Contact us today to discuss your cloud security needs.`}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://hutechsolutions.com/contact-us/"
                  className="inline-block font-semibold py-3 px-8 rounded-lg text-lg"
                  style={{
                    background: "#fff",
                    color: "#000",
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
