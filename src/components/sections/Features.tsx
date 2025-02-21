import React from 'react';
import { Globe, Zap, Users, Shield, Cpu, MessageSquare } from 'lucide-react';

// Define the type for the FeatureCard props
interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
    <Icon className="h-12 w-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: "Global CDN",
      description: "Edge-optimized content delivery network spanning 200+ locations worldwide for minimal latency."
    },
    {
      icon: Zap,
      title: "Ultra-Low Latency",
      description: "Sub-500ms streaming latency worldwide with our optimized protocol stack."
    },
    {
      icon: Users,
      title: "Massive Scale",
      description: "Handle 10M+ concurrent viewers with automatic scaling and load balancing."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, DDoS protection, and content security features."
    },
    {
      icon: Cpu,
      title: "Smart Transcoding",
      description: "Adaptive bitrate streaming with AI-powered quality optimization."
    },
    {
      icon: MessageSquare,
      title: "Interactive Features",
      description: "Built-in chat, polls, and real-time overlays for engagement."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-indigo-900 py-24" id='features'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Built for Scale and Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our infrastructure is designed to handle the most demanding streaming scenarios
            with unmatched reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;