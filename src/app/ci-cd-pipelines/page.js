import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/Card";
import {
  Zap,
  Code,
  GitBranch,
  Rocket,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Github,
  GitlabIcon as Gitlab,
} from "lucide-react";
import Image from "next/image";
import SEO from "../components/SEO";
export default function Services() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Frequent deployments",
      description: "Publish updates every day or even every hour.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated work",
      description: "Get rid of manual labor for builds, testing, and releases.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Early bug detection",
      description: "Catch and repair issues fast.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Better software quality",
      description: "Produce a better-quality product repeatedly.",
    },
  ];

  const tools = [
    { name: "GitHub Actions", icon: <Github className="w-8 h-8" /> },
    { name: "GitLab Pipelines", icon: <Gitlab className="w-8 h-8" /> },
    { name: "ArgoCD", icon: <GitBranch className="w-8 h-8" /> },
    { name: "Flux Toolkit", icon: <Code className="w-8 h-8" /> },
  ];

  return (
    <>
      <SEO
        title="CI/CD Services | Accelerate Software Delivery with Hutech Solutions"
        description="Automate your build, test, and deployment pipelines with CI/CD services from Hutech Solutions. Improve software quality, speed, and delivery confidence."
      />
      <section
        className="text-white pb-20 pt-4 "
        style={{
          backgroundImage:
            'url("https://hutechsolutions.com/wp-content/uploads/2025/06/CD-Service.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //  height: "100vh",
          marginTop: "6rem",
          paddingLeft: "7.5vw",
          // paddingRight: "5.5vw",
          width: "100vw",
        }}>
        <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 mt-20">
                CI/CD Services
              </h1>
              <p className="text-lg mb-6">
                Accelerate your development cycle with Continuous Integration (CI)
                and Continuous Delivery (CD)—the foundations of DevOps.
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

      {/* What is CI/CD Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              What is CI/CD?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <GitBranch className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Continuous Integration
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {` Continuous Integration (CI) provides a regular and mechanized
                        method of building, packaging, and testing software. It
                        requires developers to merge their changes into a common
                        repository constantly. Every time code is merged, it's
                        confirmed by a successful build and automated checks.`}
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Continuous Delivery
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {`Continuous Delivery (CD) takes CI a step further by automating
                        the process of pushing code changes to non-production
                        environments, such as development and staging. When combined
                        with continuous testing, it ensures that only high-quality,
                        stable code is delivered to users.`}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square to-indigo-100 rounded-2xl p-8">
                <Image
                  src="https://hutechsolutions.com/wp-content/uploads/2025/06/CI-CD-img1.jpg"
                  alt="Development Workflow"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-r from-purple-50 to-pink-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Continuous Deployment
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {`A good CI/CD practice also encompasses Continuous Deployment.
                      Under this mechanism, application changes flow through the CI/CD
                      pipeline automatically and are deployed straight to production
                      environments after having cleared all checks successfully.`}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Benefits of a CI/CD System
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {` Today's companies must be able to manage the speed and rhythm of
                    their own software development. Our CI/CD as a service enhances
                    your development process to be more responsive and flexible to
                    market needs.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            {/* <Image
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=400&fit=crop&crop=center"
                    alt="Development Team Collaboration"
                    className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
                  /> */}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              DevOps CI/CD and Testing Tools
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {` The adoption of CI/CD is always a customized solution. We invest
                    time in understanding your app's configuration and release cycle
                    to develop the optimal automation plan.`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-900">
                Modern Cloud-Native Approach
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {`In accordance with contemporary cloud-native methodologies, we
                      isolate CI and CD pipelines, applying specific tools to each
                      one. Our specialists engage native Git provider tooling for CI
                      and deploy with a polling model from the cluster itself through
                      GitOps.`}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-200 ">
                    <div className="text-slate-600 mr-3">{tool.icon}</div>
                    <span className="font-medium text-slate-900">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl p-8">
                <Image
                  src="https://hutechsolutions.com/wp-content/uploads/2025/06/Modern-Cloud-Native-Approach.jpg"
                  alt="DevOps Tools and Automation"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{
          background: "linear-gradient(90deg, #592AB5, #4F8FF3)",
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            {`We are here to assist in the implementation of CI/CD practices that
            enhance your development process so that it is as quick and seamless
            as your business requires.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              to="https://hutechsolutions.com/contact-us/"
              className="inline-block text-white font-semibold py-3 px-8 rounded-lg text-lg"
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
              }}
            >
              Get Started Today <ArrowRight className="ml-2 inline" size={20} />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}

