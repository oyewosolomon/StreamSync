import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChevronDown, Clock, Users, Zap, MapPin } from 'lucide-react';

interface IncidentData {
  medical: number;
  fire: number;
  police: number;
  other: number;
}

interface CaseStudyProps {
  id: number;
  city: string;
  population: string;
  image: string;
  responseImprovement: number;
  agenciesCoordinated: number;
  incidentsHandled: number;
  coverageArea: string;
  beforeTime: number;
  afterTime: number;
  incidents: IncidentData;
  quote: string;
  quoteName: string;
  quoteTitle: string;
  highlights: string[];
}

interface CaseStudyComponentProps {
  study: CaseStudyProps;
  isOpen: boolean;
  onToggle: () => void;
}

const CaseStudy: React.FC<CaseStudyComponentProps> = ({ study, isOpen, onToggle }) => {
  const responseData = [
    { month: 'Jan', before: study.beforeTime, after: study.afterTime },
    { month: 'Feb', before: study.beforeTime - 0.2, after: study.afterTime - 0.1 },
    { month: 'Mar', before: study.beforeTime - 0.4, after: study.afterTime - 0.2 },
    { month: 'Apr', before: study.beforeTime - 0.6, after: study.afterTime - 0.3 },
    { month: 'May', before: study.beforeTime - 0.8, after: study.afterTime - 0.4 },
    { month: 'Jun', before: study.beforeTime - 1, after: study.afterTime - 0.5 },
  ];

  const incidentData = [
    { name: 'Medical', value: study.incidents.medical },
    { name: 'Fire', value: study.incidents.fire },
    { name: 'Police', value: study.incidents.police },
    { name: 'Other', value: study.incidents.other },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 cursor-pointer hover:bg-slate-50 transition-colors" onClick={onToggle}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={study.image} alt={study.city} className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{study.city}</h3>
              <p className="text-slate-600">{study.population} residents served</p>
            </div>
          </div>
          <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="h-px bg-slate-200 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <Clock className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">{study.responseImprovement}%</div>
              <div className="text-sm text-blue-800">Response Time Improvement</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">{study.agenciesCoordinated}</div>
              <div className="text-sm text-blue-800">Agencies Coordinated</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <Zap className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">{study.incidentsHandled}+</div>
              <div className="text-sm text-blue-800">Incidents Handled</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <MapPin className="w-6 h-6 text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">{study.coverageArea}</div>
              <div className="text-sm text-blue-800">Square Miles Covered</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CaseStudiesSection: React.FC = () => {
  const [openStudyId, setOpenStudyId] = useState<number | null>(null);

  const toggleStudy = (id: number) => {
    setOpenStudyId(openStudyId === id ? null : id);
  };

  const caseStudies: CaseStudyProps[] = [
    {
      id: 1,
      city: "Los Angeles Metropolitan Area",
      population: "4M+",
      image: "/images/f.jpg",
      responseImprovement: 48,
      agenciesCoordinated: 12,
      incidentsHandled: 25000,
      coverageArea: "503 sq mi",
      beforeTime: 8.5,
      afterTime: 4.4,
      incidents: {
        medical: 12000,
        fire: 5000,
        police: 6000,
        other: 2000
      },
      quote: "SafetyTrack has transformed how our emergency services coordinate. The improvement in response times and inter-agency communication has been remarkable.",
      quoteName: "John Rodriguez",
      quoteTitle: "Emergency Services Director",
      highlights: [
        "Integrated 12 different emergency response agencies",
        "Reduced average response time from 8.5 to 4.4 minutes",
        "Implemented predictive resource allocation",
        "Enhanced multi-agency coordination protocols"
      ]
    },
    {
      id: 2,
      city: "Houston Metro Region",
      population: "2.3M+",
      image: "/images/f.jpg",
      responseImprovement: 45,
      agenciesCoordinated: 8,
      incidentsHandled: 18000,
      coverageArea: "671 sq mi",
      beforeTime: 7.8,
      afterTime: 4.3,
      incidents: {
        medical: 8000,
        fire: 4000,
        police: 4500,
        other: 1500
      },
      quote: "The real-time situational awareness provided by SafetyTrack has been invaluable during major weather events and emergencies.",
      quoteName: "Sarah Chen",
      quoteTitle: "Emergency Operations Manager",
      highlights: [
        "Successful deployment during hurricane season",
        "Integration with weather alert systems",
        "Custom protocols for natural disasters",
        "Mobile command center capabilities"
      ]
    },
    {
      id: 3,
      city: "Miami-Dade Region",
      population: "2.7M+",
      image: "/images/f.jpg",
      responseImprovement: 42,
      agenciesCoordinated: 10,
      incidentsHandled: 20000,
      coverageArea: "2,431 sq mi",
      beforeTime: 8.2,
      afterTime: 4.8,
      incidents: {
        medical: 9000,
        fire: 4500,
        police: 5000,
        other: 1500
      },
      quote: "SafetyTrack's multi-language support and cultural considerations have helped us serve our diverse community more effectively.",
      quoteName: "Maria Gonzalez",
      quoteTitle: "Public Safety Director",
      highlights: [
        "Multi-language emergency response support",
        "Tourist area specialized protocols",
        "Marine emergency response integration",
        "Cultural sensitivity training integration"
      ]
    }
  ];





  return (
    <div className="bg-slate-50 py-20" id='casestudies'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Case Studies</h2>
        </div>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <CaseStudy key={study.id} study={study} isOpen={openStudyId === study.id} onToggle={() => toggleStudy(study.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
