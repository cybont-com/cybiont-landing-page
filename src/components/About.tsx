import React from 'react';
import { CheckCircle, ArrowRight, Globe, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Active Researchers', icon: Globe },
    { number: '500+', label: 'Institutions', icon: Target },
    { number: '1M+', label: 'Verified Papers', icon: CheckCircle },
    { number: '99.9%', label: 'Trust Accuracy', icon: Lightbulb }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Foundation',
      description: 'Cybiont was founded with the vision of creating a trustworthy federated platform for academic communities.'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'Launched beta version with leading universities, focusing on provenance verification and trust metrics.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Integrated advanced AI systems for content verification and trust assessment across federated networks.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Expanding globally with multi-language support and regional compliance frameworks.'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-gray-50 to-cybiont-header/30"
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-cybiont-dark mb-4"
          >
            About <span className="text-gradient">Cybiont</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of academic collaboration through federated networks, 
            trust verification, and AI-powered knowledge sharing.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-br from-cybiont-primary to-cybiont-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cybiont-dark mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-cybiont-dark mb-6">
                Transforming Academic Collaboration
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Cybiont emerged from the need to address trust and provenance challenges in 
                academic research. Our federated platform enables institutions to maintain 
                data sovereignty while participating in a global knowledge network.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                By combining blockchain-based provenance tracking, AI-powered verification, 
                and collaborative tools, we're creating an ecosystem where trust is transparent, 
                verifiable, and community-driven.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                'Decentralized trust without compromising institutional autonomy',
                'AI-powered content verification with human expert oversight',
                'Cross-platform integration with existing research tools',
                'Privacy-first design with granular access controls'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cybiont-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button 
                className="btn btn-primary group"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                aria-label="Learn more about our mission"
              >
                Learn More About Our Mission
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Network visualization mockup */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-cybiont-dark text-center">
                  Federated Network Architecture
                </h4>
                
                {/* Network nodes */}
                <div className="relative h-64 bg-gradient-to-br from-cybiont-header to-white rounded-lg p-6">
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-cybiont-primary to-cybiont-accent rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">🦋</span>
                    </div>
                  </div>
                  
                  {/* Surrounding nodes */}
                  {[
                    { top: '20%', left: '20%', label: 'MIT' },
                    { top: '20%', right: '20%', label: 'Stanford' },
                    { bottom: '20%', left: '20%', label: 'Harvard' },
                    { bottom: '20%', right: '20%', label: 'Oxford' },
                    { top: '50%', left: '10%', label: 'CERN' },
                    { top: '50%', right: '10%', label: 'NIH' }
                  ].map((node, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 bg-white rounded-full border-2 border-cybiont-primary/30 flex items-center justify-center shadow-md animate-pulse-slow"
                      style={{
                        top: node.top,
                        left: node.left,
                        right: node.right,
                        bottom: node.bottom,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <span className="text-xs font-medium text-cybiont-primary">
                        {node.label}
                      </span>
                    </div>
                  ))}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0057B8" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00B88D" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    {/* Example connection lines - you can add more */}
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
                    </line>
                  </svg>
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  Secure, federated connections between research institutions
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-cybiont-dark text-center mb-12">
            Our Journey
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cybiont-primary to-cybiont-accent rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-cybiont-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-xl font-semibold text-cybiont-dark mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-white border-4 border-cybiont-primary rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
