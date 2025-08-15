import React, { useState } from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Researcher',
      description: 'Perfect for individual researchers and graduate students',
      price: { monthly: 0, annual: 0 },
      features: [
        'Basic provenance tracking',
        'Up to 100 verified papers',
        'Community discussions',
        'Standard trust metrics',
        'Email support'
      ],
      limitations: [
        'Advanced AI verification',
        'Custom integrations',
        'Priority support'
      ],
      popular: false,
      cta: 'Get Started Free'
    },
    {
      name: 'Institution',
      description: 'Ideal for universities and research institutions',
      price: { monthly: 99, annual: 990 },
      features: [
        'Everything in Researcher',
        'Unlimited verified papers',
        'Advanced AI verification',
        'Custom branding',
        'API access',
        'Analytics dashboard',
        'Priority support',
        'SSO integration'
      ],
      limitations: [
        'White-label solution'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and consortiums',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Everything in Institution',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'Custom training',
        'Multi-tenant architecture'
      ],
      limitations: [],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="pricing" 
      className="py-20 bg-white"
      role="region"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="pricing-heading"
            className="text-3xl md:text-4xl font-bold text-cybiont-dark mb-4"
          >
            Simple, Transparent
            <span className="text-gradient block">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your research community's needs. 
            All plans include our core trust and provenance features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-white text-cybiont-primary shadow-sm'
                  : 'text-gray-600 hover:text-cybiont-primary'
              }`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isAnnual
                  ? 'bg-white text-cybiont-primary shadow-sm'
                  : 'text-gray-600 hover:text-cybiont-primary'
              }`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
            >
              Annual
              <span className="ml-2 bg-cybiont-accent text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                plan.popular
                  ? 'border-cybiont-primary shadow-lg scale-105'
                  : 'border-gray-200 hover:border-cybiont-primary/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-cybiont-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-cybiont-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cybiont-dark">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-600 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && plan.price.monthly > 0 && (
                      <div className="text-sm text-gray-500 mt-1">
                        ${Math.round(plan.price.annual / 12)}/month billed annually
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full mb-8 ${
                      plan.popular
                        ? 'btn btn-primary'
                        : 'btn btn-secondary'
                    }`}
                    aria-label={`${plan.cta} for ${plan.name} plan`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-cybiont-dark">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-cybiont-accent mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-500 mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <li key={limitationIndex} className="flex items-start">
                            <X className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-500 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-cybiont-dark text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'Can I switch plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! Institution and Enterprise plans come with a 30-day free trial. No credit card required to get started.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and can accommodate institutional purchase orders for annual plans.'
              },
              {
                question: 'How does federated data work?',
                answer: 'Your institution maintains full control over your data while participating in the federated network. You decide what to share and with whom.'
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-semibold text-cybiont-dark">{faq.question}</h4>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help.
            </p>
            <button
              onClick={scrollToContact}
              className="btn btn-primary"
              aria-label="Contact our sales team"
            >
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
