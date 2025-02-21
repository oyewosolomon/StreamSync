import React, { useState } from 'react';
import {
  PlayCircle,
  BookOpen,
  Users,
  MessageSquare,
  Calendar,
  Award,
  CheckCircle,
  FileText,
  Phone,
  Globe,
  Clock,
  Search
} from 'lucide-react';

interface TrainingCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TrainingCard: React.FC<TrainingCardProps> = ({ title, description, duration, level, type, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <div className="flex items-center gap-4 text-sm text-slate-500">
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        {duration}
      </div>
      <div className="px-2 py-1 bg-slate-100 rounded-full">{level}</div>
      <div className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">{type}</div>
    </div>
  </div>
);

interface CertificationTrack {
  title: string;
  modules: number;
  duration: string;
  description: string;
}

const Resources: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'training' | 'certifications' | 'support'>('training');
  const [searchQuery, setSearchQuery] = useState('');

  const trainingResources: TrainingCardProps[] = [
    {
      title: "Emergency Response Basics",
      description: "Learn the fundamentals of coordinating emergency responses using SafetyTrack.",
      duration: "2 hours",
      level: "Beginner",
      type: "Video Course",
      icon: PlayCircle
    },
    {
      title: "Advanced Agency Coordination",
      description: "Master multi-agency coordination and resource allocation strategies.",
      duration: "4 hours",
      level: "Advanced",
      type: "Workshop",
      icon: Users
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "Deep dive into SafetyTrack's analytics and reporting capabilities.",
      duration: "3 hours",
      level: "Intermediate",
      type: "Interactive",
      icon: BookOpen
    },
    {
      title: "Crisis Communication Protocols",
      description: "Learn effective communication strategies during emergency situations.",
      duration: "2.5 hours",
      level: "Intermediate",
      type: "Webinar",
      icon: MessageSquare
    }
  ];

  const certificationTracks: CertificationTrack[] = [
    {
      title: "SafetyTrack Certified Operator",
      modules: 5,
      duration: "20 hours",
      description: "Essential certification for daily platform operations"
    },
    {
      title: "Emergency Response Coordinator",
      modules: 8,
      duration: "40 hours",
      description: "Advanced certification for emergency management professionals"
    },
    {
      title: "System Administrator",
      modules: 6,
      duration: "30 hours",
      description: "Technical certification for platform administration"
    }
  ];

  return (
    <div className="bg-slate-50 py-20" id='resources'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Support & Training Resources
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Comprehensive training and support to help your team succeed
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search resources, courses, and documentation..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {[{ id: 'training', label: 'Training Courses' }, { id: 'certifications', label: 'Certification Tracks' }, { id: 'support', label: 'Support Options' }].map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
              onClick={() => setActiveTab(tab.id as 'training' | 'certifications' | 'support')}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'training' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingResources.map((resource, index) => (
              <TrainingCard key={index} {...resource} />
            ))}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="space-y-8">
            {certificationTracks.map((track, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{track.title}</h3>
                <p className="text-slate-600 mb-4">{track.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {track.modules} Modules
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {track.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
