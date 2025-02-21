import React, { useState } from 'react';
import { ChevronRight, Star, DollarSign, Users, Calendar, Award, Check } from 'lucide-react';

const CTASection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const guideTestimonials = [
    {
      name: "Marco Rodriguez",
      location: "Barcelona, Spain",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      experience: "Food & Wine Tours",
      rating: 4.9,
      bookings: 847,
      testimonial: "Joining ExperienceBook transformed my business. I now reach travelers from all over the world and can focus on creating amazing experiences."
    },
    {
      name: "Yuki Tanaka",
      location: "Kyoto, Japan",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      experience: "Cultural Workshops",
      rating: 4.8,
      bookings: 632,
      testimonial: "The platform's tools make it easy to manage bookings and communicate with guests. I've doubled my income since joining."
    },
    {
      name: "Sophie Martin",
      location: "Paris, France",
      image: "https://randomuser.me/api/portraits/men/40.jpg",
      experience: "Photography Tours",
      rating: 4.9,
      bookings: 921,
      testimonial: "The support from ExperienceBook is outstanding. They helped me optimize my listings and grow my business beyond expectations."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Set your own prices and earn up to 85% per booking"
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Connect with travelers from over 190 countries"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Choose your availability and manage bookings easily"
    },
    {
      icon: Award,
      title: "Growth Support",
      description: "Access marketing tools and professional development resources"
    }
  ];

  return (
    <div className="relative bg-blue-50 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform rotate-45 -right-40 -top-40 w-80 h-80 bg-blue-500 rounded-full" />
        <div className="absolute transform rotate-45 -left-40 -bottom-40 w-80 h-80 bg-blue-500 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main CTA */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Share Your Passion,<br />
              <span className="text-blue-600">Become a Guide</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful guides on ExperienceBook and turn your expertise into a thriving business.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Why guides love us:</h3>
              <ul className="space-y-3">
                {[
                  "Instant payments and secure transactions",
                  "Professional liability insurance coverage",
                  "Smart calendar and booking management",
                  "Dedicated support team available 24/7"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-green-500" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
              Start Hosting Today
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Column - Guide Testimonials */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Hear from our Guides</h3>
              <p className="text-gray-600">Join our community of successful experience hosts</p>
            </div>

            <div className="relative h-[400px]">
              {guideTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 italic mb-4">"{testimonial.testimonial}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="font-semibold">{testimonial.rating}</span>
                          <span className="text-gray-500 text-sm">
                            • {testimonial.bookings} bookings
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {guideTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Active Guides", value: "10,000+" },
              { label: "Average Monthly Income", value: "$2,500" },
              { label: "Booking Rate", value: "92%" },
              { label: "Guide Satisfaction", value: "4.8/5" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;