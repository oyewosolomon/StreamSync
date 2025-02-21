import React, { useState } from 'react';
import { Send, Star, Check, Apple, Smartphone, Medal, Globe } from 'lucide-react';

interface AppFeature {
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  title: string;
  description: string;
}

const Newsletters: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const appFeatures: AppFeature[] = [
    {
      icon: Globe,
      title: "Offline Access",
      description: "Download guides & maps for offline use"
    },
    {
      icon: Medal,
      title: "Exclusive Deals",
      description: "Get mobile-only discounts & offers"
    },
    {
      icon: Star,
      title: "Instant Booking",
      description: "Book experiences in just one tap"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Newsletter Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Get Inspired Weekly
              </h2>
              <p className="text-gray-600">
                Join 50,000+ travelers receiving personalized experience recommendations, travel tips, and exclusive offers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">You'll receive:</h3>
                <ul className="space-y-3">
                  {[
                    "Weekly curated experiences based on your interests",
                    "Early access to new experiences and special events",
                    "Exclusive subscriber-only discounts",
                    "Expert travel tips and destination guides"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                  subscribed ? 'bg-green-500' : 'hover:bg-blue-700'
                }`}
              >
                {subscribed ? (
                  <>
                    <Check size={20} />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Subscribe Now
                  </>
                )}
              </button>
            </form>
          </div>

          {/* App Download Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">
                Take ExperienceBook<br />
                <span className="text-blue-600">Everywhere You Go</span>
              </h2>
              <p className="text-gray-600">
                Download our mobile app to access experiences, bookings, and travel guides on the go.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-blue-600" size={24} />
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-800"
              >
                <Apple size={20} />
                Download on the App Store
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:bg-gray-700"
              >
                <Smartphone size={20} />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletters;