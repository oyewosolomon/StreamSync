import React, { useState, FormEvent, ChangeEvent } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle,
  Users,
  Globe,
  Clock,
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  company: string;
  viewers: string;
  message: string;
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

const SchedulerComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [schedulingDone, setSchedulingDone] = useState<boolean>(false);

  // Get current date and next 14 days
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });

  // Generate time slots (9 AM to 5 PM)
  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = (i % 2) * 30;
    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  });

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      setSchedulingDone(true);
      setTimeout(() => setSchedulingDone(false), 3000);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mt-12">
      <div className="flex items-center gap-4 mb-6">
        <Calendar className="w-6 h-6 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">
          Schedule a Sales Call
        </h3>
      </div>

      {/* Date Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-400 mb-4">
          Select a Date
        </label>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(date)}
              className={`p-2 rounded-lg text-center transition-colors ${
                selectedDate?.toDateString() === date.toDateString()
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              <div className="text-xs mb-1">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </div>
              <div className="text-sm font-semibold">
                {date.getDate()}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-400 mb-4">
            Select a Time (Your Local Time)
          </label>
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg text-center transition-colors ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Schedule Button */}
      {selectedDate && selectedTime && (
        <button
          onClick={handleSchedule}
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          Schedule Call
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

      {/* Success Message */}
      {schedulingDone && (
        <div className="mt-4 flex items-center gap-2 text-green-400 justify-center">
          <CheckCircle className="w-5 h-5" />
          <span>Call scheduled successfully! Check your email for details.</span>
        </div>
      )}

      {/* Meeting Details */}
      {selectedDate && selectedTime && (
        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Meeting Details</h4>
          <p className="text-gray-400">
            30-minute call with StreamSync Sales Team
          </p>
          <p className="text-gray-400">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    viewers: 'under100k',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const stats: Stat[] = [
    {
      icon: Users,
      value: "10M+",
      label: "Concurrent Viewers"
    },
    {
      icon: Globe,
      value: "200+",
      label: "Edge Locations"
    },
    {
      icon: Clock,
      value: "<500ms",
      label: "Global Latency"
    }
  ];

  return (
    <div className="bg-black py-24" id='contact'>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Streaming Experience?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team and discover how StreamSync can power your live streaming infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Company"
                  required
                />
              </div>

              <div>
                <label htmlFor="viewers" className="block text-sm font-medium text-gray-400 mb-2">
                  Expected Concurrent Viewers
                </label>
                <select
                  id="viewers"
                  name="viewers"
                  value={formState.viewers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="under100k">Under 100k</option>
                  <option value="100k-500k">100k - 500k</option>
                  <option value="500k-1m">500k - 1M</option>
                  <option value="over1m">Over 1M</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Tell us about your streaming needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Describe your use case..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>

              {submitted && (
                <div className="flex items-center gap-2 text-green-400 justify-center">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! We'll be in touch soon.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Stats */}
          <div className="space-y-12">
            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white">contact@streamsync.tech</div>
                  </div>
                </div>
               
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Live Chat</div>
                    <div className="text-white">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose StreamSync?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <Icon className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-200">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Add Scheduler Component */}
        <div className="lg:col-span-2">
          <SchedulerComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;