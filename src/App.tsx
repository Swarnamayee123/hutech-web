/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Clients from "./components/Clients";
// import Contact from "./components/Contact";
import CustomContent from "./components/CustomContent";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import ScrollToTop from "./lib/ScrollToTop.jsx";

// Service Pages
import CloudMigration from "./components/CloudMigration";
import CloudConsulting from "./components/CloudConsulting";
import CostOptimization from "./components/CostOptimization";
import CloudNativeArchitecture from "./components/CloudNativeArchitecture";
import SRE from "./components/SRE";
import CloudInfrastructure from "./components/CloudInfrastructure";
import CloudNative from "./components/CloudNative";
import CloudNativeDataService from "./components/CloudNativeDataService";
import DevOps from "./components/DevOps";
import CDServices from "./components/CDServices";
import CloudManagedServices from "./components/CloudManagedServices";
import SecurityCompliance from "./components/SecurityCompliance";
import CloudApplicationModernization from "./components/CloudApplicationModernization";
import HomePage from "./components/HomePage";

// ✅ View Score Page
import ViewScorePage from "./components/ViewScorePage";

function App() {
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-slate-900 min-h-screen flex flex-col">
      <SEO />
      <Header />

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/services/cloud-consulting" element={<CloudConsulting />} />
          <Route path="/services/cloud-cost-optimization" element={<CostOptimization />} />
          <Route path="/services/cloud-native-architecture" element={<CloudNativeArchitecture />} />
          <Route path="/services/sre-service" element={<SRE />} />
          <Route path="/services/cloud-infrastructure-services" element={<CloudInfrastructure />} />
          <Route path="/services/cloud-native-data-service" element={<CloudNativeDataService />} />
          <Route path="/services/ci-cd-pipelines" element={<CDServices />} />
          <Route path="/services/cloud-managed-services" element={<CloudManagedServices />} />
          <Route path="/services/cloud-security-and-compliance" element={<SecurityCompliance />} />
          <Route path="/services/cloud-applications-modernization" element={<CloudApplicationModernization />} />
          <Route path="/services/cloud-native-development" element={<CloudNative />} />
          <Route path="/services/devops-consulting-services" element={<DevOps />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/custom-content" element={<CustomContent />} />

          {/* ✅ New route */}
          <Route path="/view-score" element={<ViewScorePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
