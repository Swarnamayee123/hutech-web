import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-30 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">WHAT WE OFFER</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Architecture */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-cyan-700">ARCHITECTURE</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/design.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Design and implementation of nextgen infrastructures</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/capacity.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Capacity planning & workload estimation</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-migration.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Cloud migration</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-manage.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Cloud managed services</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/security.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Security in the cloud</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/cloud-cost.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Cloud cost optimization</span>
              </li>
            </ul>
          </div>

          {/* DevOps Delivery */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-cyan-700">DevOps DELIVERY</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/audit.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Audit of development workflow</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/ci-cd.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>CI/CD design & implementation</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/code.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Infrastructure as code</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/container.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Containerization of microservices</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/automated.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Automated pipelines for testing</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/dev.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Dev & stage environments launch & setup</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/reference.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Reference infrastructure design</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/infrastructure.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Infrastructure delivery platforms</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/support-1.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Consultancy, teams training and support</span>
              </li>
            </ul>
          </div>

          {/* SRE */}
          <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 text-cyan-700">SRE</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/defining.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Defining service level objectives</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/audit-1.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Audit of existing infrastructure</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/logging.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Observability: logging, tracing, monitoring</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/infrastructure-1.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Infrastructure maintenance</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/backup.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>Backup & disaster recovery</span>
              </li>
              <li className="flex items-start">
                <img src="https://hutechsolutions.com/wp-content/uploads/2025/05/devops-1.svg" alt="" className="h-5 w-5 mr-3 mt-1" />
                <span>DevSecOps</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;