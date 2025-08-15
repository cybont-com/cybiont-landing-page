import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'features', 'about', 'pricing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.hamburger-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

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
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cybiont-header/95 backdrop-blur-md shadow-lg' 
          : 'bg-cybiont-header'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-cybiont-primary rounded-lg p-2"
              aria-label="Cybiont home"
            >
              {/* Butterfly logo placeholder - replace with actual SVG */}
              <div className="w-10 h-10 bg-gradient-to-br from-cybiont-primary to-cybiont-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦋</span>
              </div>
              <span className="text-2xl font-bold text-cybiont-dark">
                Cybiont
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybiont-primary ${
                  activeSection === item.id
                    ? 'text-cybiont-primary bg-white/50'
                    : 'text-cybiont-dark hover:text-cybiont-primary hover:bg-white/30'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary text-sm px-4 py-2"
              aria-label="Sign in to Cybiont"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-primary text-sm px-4 py-2"
              aria-label="Get started with Cybiont"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className={`md:hidden hamburger-btn p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cybiont-primary transition-all duration-300 ${
              isMenuOpen ? 'hamburger-open' : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="hamburger-line w-6 h-0.5 bg-cybiont-dark block mb-1"></span>
              <span className="hamburger-line w-6 h-0.5 bg-cybiont-dark block mb-1"></span>
              <span className="hamburger-line w-6 h-0.5 bg-cybiont-dark block"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cybiont-primary ${
                  activeSection === item.id
                    ? 'text-cybiont-primary bg-cybiont-primary/10'
                    : 'text-cybiont-dark hover:text-cybiont-primary hover:bg-gray-50'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary w-full justify-center"
                aria-label="Sign in to Cybiont"
              >
                Sign In
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary w-full justify-center"
                aria-label="Get started with Cybiont"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
