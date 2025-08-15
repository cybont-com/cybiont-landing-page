import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cybiont-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cybiont-primary to-cybiont-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🦋</span>
                </div>
                <span className="text-2xl font-bold">Cybiont</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Building trust through federated collaboration in academic and research communities. 
                Join the future of verified knowledge sharing.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/cybiont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cybiont-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary focus:ring-offset-2 focus:ring-offset-cybiont-dark"
                  aria-label="Follow Cybiont on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/cybiont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cybiont-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary focus:ring-offset-2 focus:ring-offset-cybiont-dark"
                  aria-label="Follow Cybiont on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/cybiont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cybiont-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary focus:ring-offset-2 focus:ring-offset-cybiont-dark"
                  aria-label="Follow Cybiont on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@cybiont.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cybiont-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary focus:ring-offset-2 focus:ring-offset-cybiont-dark"
                  aria-label="Email Cybiont"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Platform</h3>
              <nav className="space-y-4" role="navigation" aria-label="Footer platform navigation">
                <button
                  onClick={() => scrollToSection('features')}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Pricing
                </button>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  API Documentation
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Security
                </a>
              </nav>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <nav className="space-y-4" role="navigation" aria-label="Footer support navigation">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Help Center
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Contact Us
                </button>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Community Forum
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Status Page
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                >
                  Changelog
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Cybiont. All rights reserved.
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6" role="navigation" aria-label="Footer legal navigation">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Accessibility
              </a>
            </nav>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cybiont-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary focus:ring-offset-2 focus:ring-offset-cybiont-dark no-print"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
