import React, { useState } from 'react';
import { Code, ChevronDown, ChevronRight, Copy, Check, Terminal, FileText, MessageSquare } from 'lucide-react';

const CodePreview: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'quickstart' | 'chat' | 'analytics'>('quickstart');

  const codeExamples = {
    quickstart: `
const streamSync = require('streamsync');

// Initialize StreamSync with your API key
const client = new streamSync({
  apiKey: 'your_api_key',
  region: 'global'
});

// Create a new stream
const stream = await client.createStream({
  name: 'My Live Stream',
  quality: '1080p',
  latencyMode: 'ultra_low'
});

// Start streaming
await stream.start();

// Monitor viewer count
stream.on('viewerCount', (count) => {
  console.log(\`Current viewers: \${count}\`);
});`,
    
    chat: `
// Enable chat for your stream
const chat = stream.enableChat({
  moderation: 'automated',
  rateLimiting: true
});

// Listen for new messages
chat.on('message', (msg) => {
  console.log(\`\${msg.user}: \${msg.content}\`);
});

// Send system message
await chat.broadcast({
  type: 'system',
  content: 'Welcome to the stream!'
});`,
    
    analytics: `
// Get real-time analytics
const analytics = await stream.getAnalytics({
  metrics: ['viewerCount', 'bandwidth', 'latency'],
  interval: '1m'
});

// Subscribe to quality metrics
stream.on('qualityMetrics', (metrics) => {
  const { bitrate, fps, resolution } = metrics;
  console.log('Stream health:', metrics);
});`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[selectedTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden">
      <div className="flex border-b border-gray-800">
        <button
          onClick={() => setSelectedTab('quickstart')}
          className={`px-4 py-2 flex items-center gap-2 ${
            selectedTab === 'quickstart' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Terminal className="w-4 h-4" />
          Quickstart
        </button>
        <button
          onClick={() => setSelectedTab('chat')}
          className={`px-4 py-2 flex items-center gap-2 ${
            selectedTab === 'chat' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          Chat Integration
        </button>
        <button
          onClick={() => setSelectedTab('analytics')}
          className={`px-4 py-2 flex items-center gap-2 ${
            selectedTab === 'analytics' ? 'bg-blue-500 text-white' : 'text-gray-400 hover:text-white'
          }`}
        >
          <FileText className="w-4 h-4" />
          Analytics
        </button>
      </div>
      <div className="relative">
        <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
          <code>{codeExamples[selectedTab]}</code>
        </pre>
        <button
          onClick={copyCode}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What makes StreamSync's latency ultra-low?",
      answer: "StreamSync uses a proprietary protocol that optimizes the traditional streaming pipeline. We employ edge computing, adaptive bitrate streaming, and WebRTC technologies to achieve sub-500ms latency worldwide."
    },
    {
      question: "How does StreamSync handle sudden viewer spikes?",
      answer: "Our infrastructure automatically scales based on demand. We use predictive scaling algorithms to anticipate viewer spikes and provision resources accordingly. Our global CDN network ensures smooth distribution even during peak loads."
    },
    {
      question: "What security measures does StreamSync implement?",
      answer: "We provide end-to-end encryption, DDoS protection, token-based authentication, IP whitelisting, and content protection features. Our security complies with industry standards including GDPR and CCPA."
    },
    {
      question: "Can I customize the video player?",
      answer: "Yes, our player is fully customizable. You can modify the appearance, add your own branding, implement custom controls, and integrate interactive features like polls and overlays using our comprehensive API."
    },
    {
      question: "What analytics are available?",
      answer: "StreamSync provides real-time analytics including viewer counts, watch time, bandwidth usage, geographic distribution, quality metrics, and engagement statistics. Custom metrics can be tracked via our Analytics API."
    }
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenItem(openItem === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left"
          >
            <span className="text-lg text-white font-medium">{item.question}</span>
            {openItem === index ? (
              <ChevronDown className="w-5 h-5 text-blue-400" />
            ) : (
              <ChevronRight className="w-5 h-5 text-blue-400" />
            )}
          </button>
          <div
            className={`px-6 transition-all duration-300 ${
              openItem === index ? 'py-4' : 'py-0 h-0'
            } overflow-hidden`}
          >
            <p className="text-gray-400">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const DocsAndFAQ: React.FC = () => {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        {/* Documentation Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Developers
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with our comprehensive API and SDKs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Simple Integration
              </h3>
              <p className="text-gray-400 mb-6">
                Our SDK provides a clean, intuitive API that makes it easy to integrate
                streaming capabilities into your application. Start with basic streaming
                and scale up with advanced features as needed.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Node.js</span>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Python</span>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Java</span>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-2 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Go</span>
                </div>
              </div>
            </div>
            <CodePreview />
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about StreamSync
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsAndFAQ;