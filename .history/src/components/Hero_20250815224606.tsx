import React from 'react';
import { ArrowRight, Play, Shield, Users, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-cybiont-header via-white to-cybiont-header/30 flex items-center"
      role="banner"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cybiont-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cybiont-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-cybiont-primary/10 text-cybiont-primary rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-cybiont-accent rounded-full mr-2 animate-pulse"></span>
              Federated Social Platform for Academics
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cybiont-dark leading-tight">
              Build Trust Through
              <span className="text-gradient block">
                Provenance & Collaboration
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Cybiont connects academic and research communities through a federated platform 
              that prioritizes trust, transparency, and collaborative knowledge sharing.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-cybiont-primary" />
                <span>Verified Provenance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="w-5 h-5 text-cybiont-primary" />
                <span>Federated Networks</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Zap className="w-5 h-5 text-cybiont-primary" />
                <span>AI-Powered Trust</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary group"
                aria-label="Get started with Cybiont"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('features')}
                className="btn btn-secondary group"
                aria-label="Watch Cybiont demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by researchers at:</p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                {/* University logos placeholder - replace with actual logos */}
                <div className="text-gray-400 font-semibold">MIT</div>
                <div className="text-gray-400 font-semibold">Stanford</div>
                <div className="text-gray-400 font-semibold">Harvard</div>
                <div className="text-gray-400 font-semibold">Oxford</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative animate-fade-in">
            {/* Main illustration container */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock interface preview */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-cybiont-primary to-cybiont-accent rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">🦋</span>
                    </div>
                    <span className="font-semibold text-cybiont-dark">Cybiont</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Content preview */}
                <div className="space-y-3">
                  {/* Post with verification badge */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-cybiont-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-cybiont-primary font-semibold text-sm">DR</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-sm">Dr. Research</span>
                          <div className="flex items-center space-x-1 bg-cybiont-accent/20 text-cybiont-accent px-2 py-1 rounded-full text-xs">
                            <Shield className="w-3 h-3" />
                            <span>Verified</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          New findings on quantum computing applications...
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Provenance: arXiv</span>
                          <span>Trust Score: 98%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Trust metrics */}
                  <div className="bg-gradient-to-r from-cybiont-primary/10 to-cybiont-accent/10 rounded-lg p-4">
                    <h4 className="font-medium text-sm mb-3">Trust Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">Peer Review</span>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-16 h-2 bg-cybiont-accent rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600">AI Verification</span>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div className="w-18 h-2 bg-cybiont-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cybiont-accent rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                <span className="text-white text-xs">✓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-cybiont-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-slow">
                <span className="text-white text-xs">🔗</span>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cybiont-primary/20 to-cybiont-accent/20 rounded-2xl blur-3xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
