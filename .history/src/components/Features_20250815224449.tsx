import React from 'react';
import { Shield, Network, Brain, Users, Search, Lock, GitBranch, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Provenance Verification',
      description: 'Track the complete lineage of research content with cryptographic proof and peer validation.',
      color: 'text-cybiont-primary',
      bgColor: 'bg-cybiont-primary/10'
    },
    {
      icon: Network,
      title: 'Federated Networks',
      description: 'Connect across institutions while maintaining data sovereignty and privacy controls.',
      color: 'text-cybiont-accent',
      bgColor: 'bg-cybiont-accent/10'
    },
    {
      icon: Brain,
      title: 'AI-Powered Trust',
      description: 'Advanced AI algorithms assess content credibility and detect potential misinformation.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Users,
      title: 'Collaborative Spaces',
      description: 'Create expert knowledge communities with reputation-based access and contributions.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Search,
      title: 'Cross-Platform Search',
      description: 'Discover research across multiple platforms with unified trust and relevance scoring.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Granular privacy controls with end-to-end encryption and selective data sharing.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: GitBranch,
      title: 'Content Genealogy',
      description: 'Visual representation of how ideas evolve and build upon previous research.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Award,
      title: 'Reputation System',
      description: 'Transparent reputation metrics based on peer review, citations, and community validation.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <section 
      id="features" 
      className="py-20 bg-white"
      role="region"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-cybiont-dark mb-4"
          >
            Powerful Features for
            <span className="text-gradient block">Academic Communities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cybiont provides the tools and infrastructure needed to build trust, 
            verify provenance, and foster meaningful collaboration in research communities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-cybiont-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-cybiont-dark mb-2 group-hover:text-cybiont-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-gradient-to-r from-cybiont-primary to-cybiont-accent rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-cybiont-header to-cybiont-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-cybiont-dark mb-4">
              Ready to Transform Your Research Community?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are already building trust and collaboration 
              through Cybiont's federated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                aria-label="Start your free trial"
              >
                Start Free Trial
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const element = document.getElementById('about');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                aria-label="Learn more about Cybiont"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
