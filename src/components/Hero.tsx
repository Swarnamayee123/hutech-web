/** @format */

import React from "react";
import {
  ArrowRight,
  Server,
  Database,
  BarChart,
  ChevronRight,
} from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hutechsolutions.com/wp-content/uploads/2025/06/cloud.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8"></nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8" style={{ paddingLeft: "2rem" }}>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              We build and support
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Cloud Native infrastructures
              </span>
            </h1>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-xl font-semibold hover:opacity-90 transition-opacity flex items-center group">
                TALK TO US
                <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xl font-semibold hover:bg-white/20 transition-colors">
                GET FREE AUDIT
              </a>
            </div>
          </div>

          {/* Right Column - Service Blocks */}
          <div className="relative mt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-6 max-w-2xl ml-auto">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-colors">
                <Server className="h-16 w-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium">
                  DevOps Services, CI/CD Enhancement
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-colors">
                <Database className="h-16 w-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium">Cloud Migration</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-colors">
                <BarChart className="h-16 w-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium">Cloud Cost Optimization</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-colors">
                <Server className="h-16 w-16 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium">Platform Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
