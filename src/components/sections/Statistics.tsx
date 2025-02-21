import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StatsDashboard = () => {
  // Sample data - in a real app, this would come from your backend
  const responseTimeData = [
    { name: 'Jan', time: 8.2 },
    { name: 'Feb', time: 7.8 },
    { name: 'Mar', time: 6.5 },
    { name: 'Apr', time: 5.9 },
    { name: 'May', time: 4.8 },
    { name: 'Jun', time: 4.5 },
  ];

  const incidentData = [
    { name: 'Jan', value: 420 },
    { name: 'Feb', value: 380 },
    { name: 'Mar', value: 450 },
    { name: 'Apr', value: 410 },
    { name: 'May', value: 440 },
    { name: 'Jun', value: 390 },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Real-Time Performance Metrics
          </h2>
          <p className="mt-4 text-xl text-slate-600">
            Track emergency response effectiveness across your network
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Response Time Chart */}
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Average Response Time</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="time" 
                    stroke="#2563eb" 
                    strokeWidth={2}
                    dot={{ fill: '#2563eb' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Incidents Chart */}
          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Monthly Incidents Handled</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={incidentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2563eb"
                    fill="#93c5fd"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;