import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  Award,
  Brain,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  achievements: string[];
  specialties: string[];
  social: {
    linkedin: string;
    github: string;
    email: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Quantum Officer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Former quantum research lead at MIT with 15+ years experience in quantum algorithm development. Pioneer in quantum error correction.",
    achievements: [
      "PhD in Quantum Computing from MIT",
      "20+ published research papers",
      "IEEE Quantum Computing Award 2023",
    ],
    specialties: ["Quantum Algorithms", "Error Correction", "Quantum Machine Learning"],
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@futurethink.com",
    },
  },
  {
    name: "Prof. James Martinez",
    role: "Head of Research",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    bio: "Leading expert in quantum simulation with breakthrough work in quantum chemistry applications. Previously led quantum initiatives at CERN.",
    achievements: [
      "PhD in Theoretical Physics from Stanford",
      "15+ quantum computing patents",
      "National Science Foundation Award",
    ],
    specialties: ["Quantum Simulation", "Quantum Chemistry", "Algorithm Optimization"],
    social: {
      linkedin: "#",
      github: "#",
      email: "james@futurethink.com",
    },
  },
  {
    name: "Prof. James Martinez",
    role: "Head of Research",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    bio: "Leading expert in quantum simulation with breakthrough work in quantum chemistry applications. Previously led quantum initiatives at CERN.",
    achievements: [
      "PhD in Theoretical Physics from Stanford",
      "15+ quantum computing patents",
      "National Science Foundation Award",
    ],
    specialties: ["Quantum Simulation", "Quantum Chemistry", "Algorithm Optimization"],
    social: {
      linkedin: "#",
      github: "#",
      email: "james@futurethink.com",
    },
  },
  {
    name: "Prof. James Martinez",
    role: "Head of Research",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
    bio: "Leading expert in quantum simulation with breakthrough work in quantum chemistry applications. Previously led quantum initiatives at CERN.",
    achievements: [
      "PhD in Theoretical Physics from Stanford",
      "15+ quantum computing patents",
      "National Science Foundation Award",
    ],
    specialties: ["Quantum Simulation", "Quantum Chemistry", "Algorithm Optimization"],
    social: {
      linkedin: "#",
      github: "#",
      email: "james@futurethink.com",
    },
  },
];

const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Meet Our Quantum Experts</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            World-class researchers and engineers pushing the boundaries of quantum computing technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group cursor-pointer ${selectedMember === index ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedMember(index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-blue-400">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedMember !== null && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-white mb-4">{teamMembers[selectedMember].name}</h3>
            <p className="text-gray-300 mb-6">{teamMembers[selectedMember].bio}</p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-blue-400" /> Achievements
              </h4>
              <ul className="space-y-2">
                {teamMembers[selectedMember].achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-300 flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-400" /> {achievement}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-blue-400" /> Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {teamMembers[selectedMember].specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
