import React, { useState } from 'react';
import { Search, Sliders, Star, Clock, DollarSign, MapPin } from 'lucide-react';

const ServicesCategory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    { id: 'cleaning', name: 'Home Cleaning', count: 245 },
    { id: 'plumbing', name: 'Plumbing', count: 189 },
    { id: 'electrical', name: 'Electrical', count: 167 },
    { id: 'painting', name: 'Painting', count: 142 },
    { id: 'landscaping', name: 'Landscaping', count: 156 },
    { id: 'hvac', name: 'HVAC', count: 98 },
  ];

  const services = [
    {
      id: 1,
      title: "Deep House Cleaning",
      category: "cleaning",
      rating: 4.9,
      reviews: 856,
      priceRange: "$$",
      availability: "Today",
      image: "https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
      id: 2,
      title: "Emergency Plumbing",
      category: "plumbing",
      rating: 4.8,
      reviews: 654,
      priceRange: "$$$",
      availability: "Within 2 hours",
      image: "https://randomuser.me/api/portraits/men/87.jpg"
    },
    {
      id: 3,
      title: "Interior Painting",
      category: "painting",
      rating: 4.9,
      reviews: 432,
      priceRange: "$$",
      availability: "Tomorrow",
      image: "https://randomuser.me/api/portraits/men/40.jpg"
    }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect Service Provider
          </h2>
          <p className="text-xl text-gray-600">
            Browse through our extensive network of verified professionals
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Location Input */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Price Range Filter */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Price Ranges</option>
                <option value="$">Budget ($)</option>
                <option value="$$">Mid-Range ($$)</option>
                <option value="$$$">Premium ($$$)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories and Listings */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === 'all' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Services
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span>{category.name}</span>
                    <span className="float-right text-sm text-gray-400">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Service Listings */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{service.rating}</span>
                          <span className="text-gray-500">
                            ({service.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-600">{service.priceRange}</span>
                          <div className="flex items-center text-green-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{service.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-100 px-6 py-4">
                    <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCategory;