import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, Globe, Clock, Shield, Github, Linkedin, Twitter } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'Research Partnership',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
            Communication & Inquiries
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
            Get in Touch with CaretCoders
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Direct channels for research collaborations, enterprise product integrations, precision agritech telemetry audits, and creator protection systems.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Office Info & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="apple-card p-6 sm:p-8 space-y-6">
              <div className="border-b border-black/[0.06] pb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                  For Queries
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] mt-1">
                  Reach Us here
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#1D1D1F]">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">Location</span>
                    <span className="font-medium text-[#1D1D1F]">Hyderabad, India</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">Primary Email</span>
                    <a href="mailto:contact@caretcoders.com" className="hover:text-black transition-colors font-medium">
                      contact@caretcoders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">Research Domain</span>
                    <a href="https://caretcoders.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium">
                      caretcoders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">Github</span>
                    <a href="https://github.com/CaretCoders" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium">
                      github.com/CaretCoders
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">LinkedIn</span>
                    <a href="https://www.linkedin.com/company/caretcoders-llp/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium">
                      linkedin.com/company/caretcoders-llp
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">X</span>
                    <a href="https://x.com/caretcoders" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors font-medium">
                      x.com/caretcoders
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">Operational Hours</span>
                    <span className="text-[#6E6E73] font-mono text-xs">Mon–Fri: 09:00 AM–10:00 PM  (GMT+5:30)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#F5F5F7] flex items-center justify-center flex-shrink-0 text-[#1D1D1F]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-[11px] text-[#86868B] uppercase">For Security Inquiries</span>
                    <span className="text-[#6E6E73] text-xs">Leave an email.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 apple-card p-6 sm:p-10 space-y-6">
            <div className="border-b border-black/[0.06] pb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                Direct Message
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] mt-1">
                Send an Inquiry
              </h3>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#86868B] uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Dr. Eleanor Vance"
                      className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl px-3.5 py-2.5 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#86868B] uppercase mb-1.5">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.vance@institution.org"
                      className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl px-3.5 py-2.5 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#86868B] uppercase mb-1.5">
                      Organization / Affiliation
                    </label>
                    <input 
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      placeholder="Frontier Research Lab"
                      className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl px-3.5 py-2.5 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#86868B] uppercase mb-1.5">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl px-3.5 py-2.5 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    >
                      <option value="Research Partnership">Research Partnership</option>
                      <option value="DetailMint Enterprise">Detail Mint Multi-Location Integration</option>
                      <option value="Agritech Telemetry">Precision Agritech Telemetry Audit</option>
                      <option value="InkSquirel Creator">InkSquirel Creator Protection</option>
                      <option value="Press & Speaking">Press & Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#86868B] uppercase mb-1.5">
                    Message Payload *
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Outline your research scope, operational challenge, or integration requirements..."
                    className="w-full bg-[#F5F5F7] border border-black/[0.08] rounded-xl p-3.5 text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full apple-button-primary py-3 text-xs sm:text-sm font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="p-8 bg-[#F5F5F7] rounded-2xl border border-black/[0.06] space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-semibold text-[#1D1D1F]">Inquiry Transmitted</h4>
                  <p className="text-xs sm:text-sm text-[#6E6E73]">
                    Thank you, <strong className="text-[#1D1D1F]">{formData.name}</strong>. Your message regarding <strong className="text-[#1D1D1F]">{formData.inquiryType}</strong> has been received by our engineering desk.
                  </p>
                </div>
                <p className="text-xs font-mono text-[#86868B]">
                  Typical response time: &lt; 24 business hours.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
