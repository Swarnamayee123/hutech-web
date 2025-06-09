import React from 'react';

const Clients: React.FC = () => {
  const clients = [
    { id: 1, name: 'Client 1', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/blue-element.png' },
    { id: 2, name: 'Client 2', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/techspire-logo.png' },
    { id: 3, name: 'Client 3', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/synexis-logo.png' },
    { id: 4, name: 'Client 4', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/dna-infotech.png' },
    { id: 5, name: 'Client 5', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/aq4-1.png' },
    { id: 6, name: 'Client 6', logo: 'https://hutechsolutions.com/wp-content/uploads/2025/04/nexora.png' },
  ];

  return (
    <section id="clients" className="py-20 bg-white overflow-hidden relative">
      {/* Marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-30 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">OUR CLIENTS</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-600">
          Already benefiting from our successful collaboration
        </p>

        <div className="overflow-hidden">
          <div
            className="flex w-max gap-12 items-center"
            style={{
              animation: 'marquee 20s linear infinite',
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <img
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;