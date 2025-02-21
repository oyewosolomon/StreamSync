import React, { useState } from 'react';
import { Play, Pause, BarChart2, Users, Clock } from 'lucide-react';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewers, setViewers] = useState(1000000);
  const [latency, setLatency] = useState(100);

  // Simulate changing metrics
  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setViewers(prev => Math.floor(prev + (Math.random() - 0.5) * 100000));
        setLatency(prev => Math.max(100, Math.min(500, prev + (Math.random() - 0.5) * 50)));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            See StreamSync in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our real-time performance metrics and see how we handle millions of concurrent viewers.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-8 max-w-4xl mx-auto">
          {/* Demo Video Placeholder */}
          <div className="relative aspect-video bg-black/50 rounded-lg mb-8 overflow-hidden">
            <img 
              src="/api/placeholder/800/450" 
              alt="Live Stream Demo" 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 m-auto h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Metrics Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Users className="text-blue-400" />
                <span className="text-gray-400">Concurrent Viewers</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {viewers.toLocaleString()}
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <Clock className="text-blue-400" />
                <span className="text-gray-400">Current Latency</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {latency.toFixed(0)}ms
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <BarChart2 className="text-blue-400" />
                <span className="text-gray-400">Server Load</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {Math.floor(viewers / 100000)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;