/** @format */

import React from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   company: '',
  //   message: '',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Get form values
    const name = form.username.value;
    const email = form.email.value;
    const company = form.company.value;
    const message = form.message.value;

    try {
      const response = await fetch(
        "https://chatbots.hutechsolutions.com/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "X-Recaptcha-Token": captchaToken,
          },
          body: JSON.stringify({ name, email, company, message }),
        }
      );

      const data = await response.json();
      if (!data.success) {
        console.error("Verification Failed:", data);
        // alert("reCAPTCHA verification failed!");
      } else {
        console.log("Verification success:", data);
        form.reset(); // Reset the form after successful submission
        alert("Thank you for your message! We will get back to you soon.");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(name, email, company, message, "Form submitted");
  };
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-slate-800 to-cyan-800 p-10 text-white">
              <h2 className="text-3xl font-bold mb-6">
                CONTACT US TO LEARN MORE!
              </h2>
              <p className="mb-8 text-cyan-100">
                Let's get started on transforming your infrastructure with our
                DevOps expertise
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-cyan-400" />
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-cyan-100">
                    No 31, 3rd Floor, 9th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka - 560102
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-cyan-400" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-cyan-100">sales@hutechsolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-cyan-400" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-cyan-100">(+91) 88674 87771</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="username"
                    // value={formData.name}
                    // onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    // value={formData.company}
                    // onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors flex items-center">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
