import React from 'react';
import { Shield, Lock, CreditCard, Clock, AlertCircle, HeartHandshake, Phone, Check } from 'lucide-react';

const TrustSafety = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Satisfaction Guarantee",
      description: "Not happy with the service? We'll make it right or give you a full refund."
    },
    {
      icon: Lock,
      title: "Verified Professionals",
      description: "Every provider undergoes thorough background checks and skill verification."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your payment information is encrypted and never stored on our servers."
    },
    {
      icon: HeartHandshake,
      title: "$2M Insurance Coverage",
      description: "Every job is covered by our comprehensive insurance policy."
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-green-50 text-green-600 font-medium rounded-full mb-4">
            Your Safety First
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built on Trust, Backed by Guarantee
          </h2>
          <p className="text-xl text-gray-600">
            We've implemented comprehensive safety measures to ensure you have peace of mind with every service.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Safety Process */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Safety Process
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Identity Verification</h4>
                    <p className="text-gray-600">Multi-step verification process for all providers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Background Checks</h4>
                    <p className="text-gray-600">Comprehensive criminal and employment screening</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Skill Certification</h4>
                    <p className="text-gray-600">Verification of professional licenses and certifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Support Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    24/7 Emergency Support
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Our support team is always available to help you with any concerns or emergencies.
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Emergency Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;