import React from 'react';
import { Radio, Phone, Laptop, Building, Ambulance, Shield } from 'lucide-react';

const Partners = () => {
  const integrations = [
    {
      icon: Radio,
      title: "Emergency Radio Systems",
      description: "Seamless integration with major radio communication systems including Motorola, Harris, and Kenwood.",
      partners: ["TETRA", "P25", "DMR"]
    },
    {
      icon: Phone,
      title: "911 Call Centers",
      description: "Direct connection with emergency dispatch centers for immediate response coordination.",
      partners: ["NextGen 911", "Emergency Call Works", "Vesta"]
    },
    {
      icon: Laptop,
      title: "CAD Systems",
      description: "Compatible with leading Computer Aided Dispatch systems for real-time incident management.",
      partners: ["Hexagon", "Central Square", "Tyler Tech"]
    },
    {
      icon: Building,
      title: "Municipal Systems",
      description: "Integrates with city infrastructure and emergency management platforms.",
      partners: ["Smart City", "CivicPlus", "OpenGov"]
    },
    {
      icon: Ambulance,
      title: "Medical Response",
      description: "Connected with hospital and ambulance service management systems.",
      partners: ["Epic", "Cerner", "AllScripts"]
    },
    {
      icon: Shield,
      title: "Law Enforcement",
      description: "Integration with police department systems and databases.",
      partners: ["NCIC", "NLETS", "CJIS"]
    }
  ];

  return (
    <div className="bg-white py-20" id='partners'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Seamless Integration Partners
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Working together with leading emergency response systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {integration.title}
                </h3>
                
                <p className="text-slate-600 mb-4">
                  {integration.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {integration.partners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't see your system listed?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our team of integration experts can work with any emergency response system. Contact us to discuss your specific needs.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Contact Integration Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;