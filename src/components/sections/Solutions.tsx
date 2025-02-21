import React from 'react';
import { ArrowRight, FileText, ShieldCheck, Clock } from 'lucide-react';
import { NavItem, Statistic } from '../types';

interface HeroProps {
  navItems?: NavItem[];
  statistics?: Statistic[];
}

const defaultNavItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
];

const defaultStatistics: Statistic[] = [
  { label: 'Monthly Documents', value: '50K+' },
  { label: 'Time Saved', value: '70%' },
  { label: 'Accuracy Rate', value: '99%' },
];

const Solutions: React.FC<HeroProps> = ({
  navItems = defaultNavItems,
  statistics = defaultStatistics,
}) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">LegalTech</span>
              <span className="text-2xl font-bold text-gray-800">Solutions</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Legal Workflow
            </h1>
            <p className="text-xl text-gray-600">
              Automate document processing, ensure compliance, and manage cases efficiently. 
              Join 1000+ firms saving 70% on review time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                Schedule Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-6">
            <FeatureCard
              icon={<FileText className="w-6 h-6 text-blue-600" />}
              title="Document Automation"
              description="Process and analyze legal documents with AI-powered automation"
              bgColor="blue"
            />
            <FeatureCard
              icon={<ShieldCheck className="w-6 h-6 text-green-600" />}
              title="Compliance Checking"
              description="Ensure documents meet regulatory requirements automatically"
              bgColor="green"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-purple-600" />}
              title="Case Management"
              description="Streamline your workflow with intelligent case tracking"
              bgColor="purple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: 'blue' | 'green' | 'purple';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bgColor }) => {
  const getBgColor = () => {
    switch (bgColor) {
      case 'blue': return 'bg-blue-100';
      case 'green': return 'bg-green-100';
      case 'purple': return 'bg-purple-100';
      default: return 'bg-blue-100';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className={`${getBgColor()} p-3 rounded-lg`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;