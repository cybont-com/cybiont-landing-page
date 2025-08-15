import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  password: string;
  confirmPassword: string;
  planType: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    password: '',
    confirmPassword: '',
    planType: 'researcher',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password strength calculation
  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/)) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 25;
    return Math.min(strength, 100);
  };

  const getPasswordStrengthLabel = (strength: number): string => {
    if (strength < 25) return 'Very Weak';
    if (strength < 50) return 'Weak';
    if (strength < 75) return 'Fair';
    if (strength < 100) return 'Good';
    return 'Strong';
  };

  const getPasswordStrengthColor = (strength: number): string => {
    if (strength < 25) return 'strength-weak';
    if (strength < 50) return 'strength-weak';
    if (strength < 75) return 'strength-fair';
    if (strength < 100) return 'strength-good';
    return 'strength-strong';
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    // Update password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-cybiont-header to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 animate-fade-in">
            <div className="w-16 h-16 bg-cybiont-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-cybiont-dark mb-4">
              Welcome to Cybiont!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for joining our community. We've sent you a confirmation email with next steps.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  organization: '',
                  password: '',
                  confirmPassword: '',
                  planType: 'researcher',
                  message: ''
                });
                setErrors({});
              }}
              className="btn btn-primary"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-cybiont-header to-white"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-cybiont-dark mb-4"
          >
            Get Started with
            <span className="text-gradient block">Cybiont</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of researchers building trust through federated collaboration. 
            Create your account and start your journey today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-cybiont-dark mb-6">
                Ready to Transform Your Research Community?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're an individual researcher or representing an institution, 
                we're here to help you get started with Cybiont's federated platform.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cybiont-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cybiont-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-cybiont-dark mb-1">Email Us</h4>
                  <p className="text-gray-600">hello@cybiont.com</p>
                  <p className="text-gray-600">support@cybiont.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cybiont-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cybiont-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-cybiont-dark mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-cybiont-dark mb-1">Visit Us</h4>
                  <p className="text-gray-600">123 Research Drive</p>
                  <p className="text-gray-600">Cambridge, MA 02139</p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-cybiont-dark mb-4">Why Choose Cybiont?</h4>
              <div className="space-y-3">
                {[
                  'SOC 2 Type II Certified',
                  'GDPR & CCPA Compliant',
                  '99.9% Uptime SLA',
                  '24/7 Security Monitoring'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-cybiont-accent" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-cybiont-dark mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.firstName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="John"
                    aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="form-error" role="alert">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-cybiont-dark mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.lastName ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Doe"
                    aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="form-error" role="alert">
                      <AlertCircle className="w-4 h-4 inline mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-input ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="john.doe@university.edu"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className={`form-input ${errors.organization ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                  placeholder="University of Research"
                  aria-describedby={errors.organization ? 'organization-error' : undefined}
                  aria-invalid={!!errors.organization}
                />
                {errors.organization && (
                  <p id="organization-error" className="form-error" role="alert">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {errors.organization}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Password *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`form-input pr-12 ${errors.password ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Enter a strong password"
                    aria-describedby={errors.password ? 'password-error' : 'password-help'}
                    aria-invalid={!!errors.password}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                
                {/* Password Strength Meter */}
                {formData.password && (
                  <div className="mt-2">
                    <div className={`password-strength ${getPasswordStrengthColor(passwordStrength)}`} style={{ width: `${passwordStrength}%` }}></div>
                    <p className="text-xs text-gray-600 mt-1">
                      Password strength: {getPasswordStrengthLabel(passwordStrength)}
                    </p>
                  </div>
                )}
                
                {errors.password && (
                  <p id="password-error" className="form-error" role="alert">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {errors.password}
                  </p>
                )}
                {!errors.password && (
                  <p id="password-help" className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters long
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Confirm Password *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`form-input pr-12 ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                    placeholder="Confirm your password"
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                    aria-invalid={!!errors.confirmPassword}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide password confirmation' : 'Show password confirmation'}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p id="confirmPassword-error" className="form-error" role="alert">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Plan Type */}
              <div>
                <label htmlFor="planType" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Plan Type
                </label>
                <select
                  id="planType"
                  name="planType"
                  value={formData.planType}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="researcher">Researcher (Free)</option>
                  <option value="institution">Institution ($99/month)</option>
                  <option value="enterprise">Enterprise ($299/month)</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cybiont-dark mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input resize-none"
                  placeholder="Tell us about your research interests or any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <div>
                {errors.submit && (
                  <p className="form-error mb-4" role="alert">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    {errors.submit}
                  </p>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  aria-label="Create your Cybiont account"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                By creating an account, you agree to our{' '}
                <a href="#" className="text-cybiont-primary hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-cybiont-primary hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
