import React, { useState } from 'react';
import { Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonials Component
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at GameStream",
      image: "https://randomuser.me/api/portraits/women/70.jpg",
      content: "StreamSync has transformed our gaming broadcasts. We went from struggling with 100k viewers to seamlessly handling 2M+ concurrent users.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Technology at LiveSports",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      content: "The sub-500ms latency is a game-changer for sports streaming. Our viewers get real-time action with zero buffering.",
      rating: 5
    },
    {
      name: "Emma Watson",
      role: "Streaming Director at TechConf",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      content: "We hosted our global tech conference on StreamSync. 5M+ viewers, zero issues, and amazing interactive features.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-black py-24" id='pricing'>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Trusted by Industry Leaders
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg p-8">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.content}"</p>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Pricing Component
const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 499,
      annualPrice: 449,
      features: [
        "Up to 100k concurrent viewers",
        "Global CDN access",
        "720p streaming quality",
        "Basic analytics",
        "Email support",
        "99.9% uptime SLA"
      ]
    },
    {
      name: "Professional",
      monthlyPrice: 999,
      annualPrice: 899,
      popular: true,
      features: [
        "Up to 1M concurrent viewers",
        "Premium CDN routing",
        "4K streaming quality",
        "Advanced analytics",
        "24/7 priority support",
        "99.95% uptime SLA",
        "Custom branding",
        "Interactive features"
      ]
    },
    {
      name: "Enterprise",
      features: [
        "10M+ concurrent viewers",
        "Custom CDN configuration",
        "8K streaming support",
        "Real-time analytics",
        "Dedicated support team",
        "99.99% uptime SLA",
        "White-label solution",
        "Custom feature development",
        "Annual contract"
      ]
    }
  ];

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your streaming needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none
                ${isAnnual ? 'bg-blue-600' : 'bg-gray-600'}`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300
                  ${isAnnual ? 'translate-x-9' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual <span className="text-blue-400">(Save 10%)</span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-transform hover:-translate-y-2
                  ${plan.popular 
                    ? 'bg-gradient-to-b from-blue-600 to-blue-800 shadow-xl shadow-blue-500/20' 
                    : 'bg-white/5 backdrop-blur-lg'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                
                {plan.monthlyPrice ? (
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-gray-400">per month</div>
                  </div>
                ) : (
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-white">Custom</div>
                    <div className="text-gray-400">Contact sales</div>
                  </div>
                )}

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors
                    ${plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                >
                  {plan.monthlyPrice ? 'Get Started' : 'Contact Sales'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsAndPricing = () => {
  return (
    <>
      {/* <TestimonialsSection /> */}
      <PricingSection />
    </>
  );
};

export default TestimonialsAndPricing;