import React from 'react';
import { Moon } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 bg-blue-500 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center">
          <Moon className="h-16 w-16 text-blue-400 mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Stream<span className="text-blue-400">Sync</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Powering the future of live streaming with infrastructure that handles
            <span className="text-blue-400 font-semibold"> 10M+ concurrent viewers</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt;500ms</div>
              <div className="text-gray-300">Global Latency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-blue-400 mb-2">10M+</div>
              <div className="text-gray-300">Concurrent Viewers</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transform hover:scale-105 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-lg transform hover:scale-105 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;