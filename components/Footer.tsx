import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Footer: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  // Form status state
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, and Message)'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    try {
      setFormStatus({
        ...formStatus,
        submitting: true,
        error: false,
        message: ''
      });
      
      // Submit form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      // Success response
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: result.message || 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          submitted: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      // Handle error
      const errorMessage = error instanceof Error ? error.message : 'There was an error sending your message. Please try again.';
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: errorMessage
      });
    }
  };

  return (
    <footer
      id="footer"
      className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 py-12 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${8 + Math.random() * 5}s`
            }}
          >
            <div className="w-full h-full rounded-full bg-white/10 blur-3xl" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let's Connect</h2>
          <div className="mt-2 mx-auto w-24 h-1 bg-white/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-1">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm text-white/80 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm text-white/80 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-white/80 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/80 mb-1">How can we help you? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  placeholder="Your message"
                  required
                />
              </div>
              
              {/* Form status messages */}
              {formStatus.message && (
                <div className={`p-3 rounded-lg flex items-center gap-2 ${formStatus.error ? 'bg-red-500/20 text-white' : 'bg-green-500/20 text-white'}`}>
                  {formStatus.error ? (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`px-6 py-3 bg-white text-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors ${formStatus.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus.submitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Get in Touch */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <div className="relative inline-block mb-4">
                <h3 className="text-xl font-bold text-white">Get in Touch</h3>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30" />
              </div>
              
              <div className="space-y-4">
                <a 
                  href="tel:+97150188784"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/70">Call us at</span>
                    <span className="font-medium">+971 50 188 7848</span>
                    <span className="font-medium">+971 55 413 2942</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@z4biz.com"
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-white/70">Email us at</span>
                    <span className="font-medium">info@z4biz.com</span>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Office Locations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <div className="relative inline-block mb-4">
                <h3 className="text-xl font-bold text-white">Our Offices</h3>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <h4 className="font-semibold text-white">UAE</h4>
                  </div>
                  <p className="text-sm text-white/80">
                    Meydan Grandstand, 6th floor, Meydan Road,<br />
                    Nad Al Sheba, Dubai, U.A.E.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <h4 className="font-semibold text-white">USA</h4>
                  </div>
                  <p className="text-sm text-white/80">
                    260 Newport Center Drive,<br />
                    Newport Beach, CA 92660
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-white/80" />
                    <h4 className="font-semibold text-white">INDIA</h4>
                  </div>
                  <p className="text-sm text-white/80">
                    3rd Floor, Cheryl Hills, Vallathol Jn,<br />
                    Seaport – Airport Rd, Vallathol Padi,<br />
                    Vidya Nagar Colony, Thrikkakara,<br />
                    Edappally, Kochi, Kerala 682021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Z4BIZ. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 opacity-30" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent transform -translate-x-16 -translate-y-16 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-indigo-400/20 to-transparent transform translate-x-16 translate-y-16 blur-2xl" />
    </footer>
  );
};

export default Footer;