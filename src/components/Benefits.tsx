import React from 'react';
import { CheckCircle, Users, DollarSign, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-30 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Key Benefits of Our DevOps Managed Services</h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-600">
        As your DevOps services partner, we will find opportunities for your products to deliver real value and standardize your business processes. Hutech Solutions DevOps Managed Service environment is a scalable cloud platform designed according to core DevOps principles.
        </p>
        
        <div className="space-y-20">
          {/* Benefit 1 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="p-1 bg-cyan-600 inline-flex rounded-full mb-6">
                <CheckCircle className="h-16 w-16 text-white p-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Operating & Technical Support  </h3>
              <p className="text-gray-600">
              By offering DevOps as a service, we offer a seamless project workflow, uninterrupted essential data streams and first-class quality. You have the benefit of professional support through the entire length of the project life cycle.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <img 
                  src="https://hutechsolutions.com/wp-content/uploads/2025/04/devops-professionals.png" 
                  alt="Technical support illustration" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Benefit 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="p-1 bg-cyan-600 inline-flex rounded-full mb-6">
                <Users className="h-16 w-16 text-white p-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Access to Top Class Talent</h3>
              <p className="text-gray-600">
              By hiring our DevOps professionals, you are benefiting from some of the smartest people in your corner. You will undoubtedly receive valuable insights from their extensive knowledge and years of experience working on projects with various sizes and levels of complexity in an effort to improve your project.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <img 
                  src="https://hutechsolutions.com/wp-content/uploads/2025/04/devlopment-team.png" 
                  alt="Team collaboration" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Benefit 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="p-1 bg-cyan-600 inline-flex rounded-full mb-6">
                <DollarSign className="h-16 w-16 text-white p-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Massively Reduced Project Costs</h3>
              <p className="text-gray-600">
              With our complex project development processes and industry-leading methods, we will help optimize workflow efficiency! All of which means reduced SaaS cloud administration and maintain costs, while helping you avoid unplanned costs. 
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <img 
                  src="https://hutechsolutions.com/wp-content/uploads/2025/04/reduced-project-costs.png" 
                  alt="Cost reduction" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Benefit 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <div className="p-1 bg-cyan-600 inline-flex rounded-full mb-6">
                <Zap className="h-16 w-16 text-white p-3" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Increased Flexibility for your Dev Team</h3>
              <p className="text-gray-600">
              The outcome of our DevOps engagement is a high-performing team of project developers who are engaged in their work. They will be more engaged in their work as they complete tasks more quickly, with higher-quality workflows and all at a lower cost.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <img 
                  src="https://hutechsolutions.com/wp-content/uploads/2025/04/technical-support.jpg" 
                  alt="Team productivity" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;