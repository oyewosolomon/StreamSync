import React from 'react';
import { Shield, Clock, Users, Award, MessageSquare, Calendar } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Every booking is protected by our satisfaction guarantee and 24/7 support team"
    },
    {
      icon: Clock,
      title: "Instant Confirmation",
      description: "Receive immediate confirmation and e-tickets for your selected experiences"
    },
    {
      icon: Users,
      title: "Local Experts",
      description: "Connect with verified local guides who share authentic experiences and hidden gems"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "All experiences are vetted for quality and safety before being listed"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Chat directly with guides to customize your experience"
    },
    {
      icon: Calendar,
      title: "Flexible Booking",
      description: "Easy rescheduling and cancellation up to 24 hours before the activity"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose ExperienceBook</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing unforgettable experiences with the best local guides around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="block md:inline-flex gap-8 p-6 bg-blue-50 rounded-xl">
            <div>
              <p className="text-3xl font-bold text-blue-600">50,000+</p>
              <p className="text-gray-600">Experiences</p>
            </div>
            <div className="border-2 border-blue-200 my-2"></div>
            <div>
              <p className="text-3xl font-bold text-blue-600">100,000+</p>
              <p className="text-gray-600">Monthly Bookings</p>
            </div>
            <div className="border-2 border-blue-200 my-2"></div>
            <div>
              <p className="text-3xl font-bold text-blue-600">4.8/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;