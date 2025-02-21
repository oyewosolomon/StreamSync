import React from 'react';
import { Target, Lightbulb, Users, Sparkles, ArrowRight, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Established by leading quantum computing researchers and industry veterans"
    },
    {
      year: "2019",
      title: "First Patent",
      description: "Breakthrough in quantum error correction algorithms"
    },
    {
      year: "2020",
      title: "Research Center",
      description: "Opened state-of-the-art quantum research facility"
    },
    {
      year: "2021",
      title: "Industry Partnership",
      description: "Major collaboration with Fortune 500 tech companies"
    },
    {
      year: "2022",
      title: "Platform Launch",
      description: "Released quantum simulation platform"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Opened offices in Europe and Asia"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pioneering the Quantum Revolution
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leading the way in quantum computing innovation with groundbreaking research and practical solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Mission */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-xl">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/20 rounded-lg mb-6">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To accelerate the advancement of quantum computing technology and make it accessible to businesses worldwide, enabling breakthrough innovations across industries.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-xl">
            <div className="inline-flex items-center justify-center p-3 bg-purple-500/20 rounded-lg mb-6">
              <Lightbulb className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in quantum computing solutions, driving the transformation of computing capabilities and solving humanity's most complex challenges.
            </p>
          </div>
        </div>

        {/* Key Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Users, label: "Team Members", value: "100+", color: "blue" },
            { icon: Award, label: "Patents Filed", value: "50+", color: "purple" },
            { icon: BookOpen, label: "Research Papers", value: "200+", color: "green" },
            { icon: Sparkles, label: "Client Solutions", value: "1000+", color: "pink" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center p-3 bg-${stat.color}-500/20 rounded-lg mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-700"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="space-y-2">
                        <div className="text-blue-400 font-bold">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <div className="space-y-2">
                        <div className="text-blue-400 font-bold">{milestone.year}</div>
                        <h4 className="text-xl font-bold text-white">{milestone.title}</h4>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg group hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
            Join Our Journey
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;