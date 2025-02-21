import React, { useState, useEffect } from 'react';
import { Star, ChevronRight, Search, Calendar, CreditCard, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/87.jpg",
      text: "Our cooking class in Rome was incredible! The local chef was so knowledgeable and made us feel like family. ExperienceBook made booking seamless.",
      rating: 5,
      experience: "Traditional Roman Cooking Class"
    },
    {
      name: "James Wilson",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      text: "Found an amazing local guide for our trek in Nepal. The instant booking and clear communication made planning our adventure stress-free.",
      rating: 5,
      experience: "Himalayan Trek Adventure"
    },
    {
      name: "Maria Garcia",
      location: "Barcelona, Spain",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      text: "Booked a last-minute photography tour in Paris. The guide knew all the hidden spots and helped me capture amazing shots!",
      rating: 5,
      experience: "Paris Photography Walk"
    }
  ];

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Browse through thousands of unique experiences and filter by location, date, or interest",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Calendar,
      title: "Choose & Book",
      description: "Select your preferred date and instantly secure your spot with our real-time booking system",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Confirm & Pay",
      description: "Pay securely and receive instant confirmation with all activity details",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MapPin,
      title: "Experience",
      description: "Meet your local guide and enjoy your unforgettable experience",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* How It Works Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How ExperienceBook Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Book your next adventure in minutes with our simple process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight size={24} className="text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 lg:h-auto">
              <img
                src="/images/a.jpg"
                alt="Happy travelers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                  <p className="text-lg">Over 1 million happy travelers</p>
                </div>
              </div>
            </div>

            {/* Testimonials Side */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8">What Our Travelers Say</h2>
              
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
                  >
                    <div className="flex gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-4">
                      "{testimonial.text}"
                    </blockquote>
                    <p className="text-sm text-gray-500">
                      Experience: {testimonial.experience}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;