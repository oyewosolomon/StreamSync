import React, { useState } from 'react';
import { 
  BarChart2, 
  Brain, 
  Target, 
  Users, 
  ChevronRight,
  Layout,
  PieChart,
  Zap
} from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Data Collection & Integration",
      description: "Seamlessly collect and integrate data from multiple learning platforms, student information systems, and assessment tools.",
      icon: Layout,
      features: [
        "Automatic data synchronization",
        "Support for all major LMS platforms",
        "Real-time data processing",
        "Secure data handling"
      ],
      stats: {
        value: "99.9%",
        label: "Integration Success Rate"
      }
    },
    {
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze learning patterns, identify trends, and generate actionable insights.",
      icon: Brain,
      features: [
        "Pattern recognition",
        "Predictive analytics",
        "Behavioral analysis",
        "Performance forecasting"
      ],
      stats: {
        value: "94%",
        label: "Prediction Accuracy"
      }
    },
    {
      title: "Personalized Learning Paths",
      description: "Generate customized learning journeys based on individual student performance, goals, and learning style.",
      icon: Target,
      features: [
        "Adaptive learning paths",
        "Custom content recommendations",
        "Progress tracking",
        "Goal setting"
      ],
      stats: {
        value: "85%",
        label: "Student Engagement"
      }
    },
    {
      title: "Performance Monitoring",
      description: "Track progress, generate reports, and identify areas for improvement in real-time.",
      icon: BarChart2,
      features: [
        "Real-time dashboards",
        "Automated reporting",
        "Alert systems",
        "Performance benchmarking"
      ],
      stats: {
        value: "30%",
        label: "Performance Improvement"
      }
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            How EdTech Analytics Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your educational institution with our powerful analytics platform
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Step Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer group ${
                  activeStep === index 
                    ? 'bg-white shadow-lg border-indigo-600' 
                    : 'bg-white hover:bg-gray-50'
                } border rounded-xl p-6 transition-all duration-300`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center
                    ${activeStep === index ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}
                    group-hover:bg-indigo-600 group-hover:text-white transition-colors
                  `}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Feature Display */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                {React.createElement(steps[activeStep].icon, {
                  className: "w-8 h-8 text-indigo-600"
                })}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">
                  {steps[activeStep].stats.value}
                </div>
                <div className="text-gray-600">
                  {steps[activeStep].stats.label}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps[activeStep].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                Learn More
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, label: "Active Users", value: "1M+" },
            { icon: PieChart, label: "Data Points Analyzed", value: "1B+" },
            { icon: Zap, label: "Real-time Updates", value: "24/7" },
            { icon: Target, label: "Success Rate", value: "95%" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 mb-4">
                <stat.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;