import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jobPositionsData, cultureValues, internshipProgramInfo } from '../data/careers';
import { JobPosition } from '../types';
import { MapPin, Briefcase, Clock, ChevronRight, X, Check, Send, Award, Sparkles, Heart } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    portfolio: '',
    coverNote: ''
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-16 sm:py-24 text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
            Work with CaretCoders
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#1D1D1F]">
            Careers & Fellowships
          </h1>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            Join a lean, high-autonomy research and engineering group solving systemic operational challenges across high-throughput platforms, agriculture, and developer tooling.
          </p>
        </div>

        {/* Culture & Operating Principles */}
        <div className="space-y-6">
          <div className="border-b border-black/[0.06] pb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Core Team Principles
            </span>
            <span className="text-xs font-mono text-[#86868B]">HOW WE WORK</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureValues.map((val, idx) => (
              <div key={idx} className="apple-card p-6 space-y-3 bg-white">
                <div className="w-8 h-8 rounded-xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-semibold text-base text-[#1D1D1F] tracking-tight">{val.title}</h3>
                <p className="text-xs font-medium text-[#86868B]">{val.tagline}</p>
                <p className="text-xs text-[#6E6E73] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-6">
          <div className="border-b border-black/[0.06] pb-3 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Open Positions ({jobPositionsData.length})
            </span>
            <span className="text-xs font-mono text-[#86868B]">REMOTE / HYBRID</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobPositionsData.map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  setSelectedJob(job);
                  setApplicationSubmitted(false);
                }}
                className="apple-card p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer bg-white"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#86868B] border-b border-black/[0.04] pb-3">
                    <span className="uppercase text-[#1D1D1F] font-semibold">{job.department}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs font-mono text-[#86868B]">{job.type} • {job.experience}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3">
                    {job.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] text-xs">
                  <span className="text-[11px] font-mono text-[#86868B]">
                    {job.perks[0]}
                  </span>
                  <span className="apple-link font-medium text-xs">
                    <span>View Role & Apply</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cyber-Fellowship Banner */}
        <div className="apple-card p-8 sm:p-12 bg-white space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono text-[#86868B]">
            <span className="px-2.5 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-semibold tracking-wider uppercase">
              ANNUAL PROGRAM
            </span>
            <span>•</span>
            <span>{internshipProgramInfo.duration}</span>
            <span>•</span>
            <span>{internshipProgramInfo.stipend}</span>
          </div>

          <div className="space-y-2 max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
              {internshipProgramInfo.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              {internshipProgramInfo.eligibility}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {internshipProgramInfo.highlights.map((h, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-[#1D1D1F]">
                <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Job Details & Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-black/[0.08] max-w-2xl w-full p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl text-[#1D1D1F]"
            >
              <div className="flex items-start justify-between border-b border-black/[0.06] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#86868B] block">{selectedJob.department} • {selectedJob.location}</span>
                  <h3 className="text-2xl font-semibold tracking-tight mt-1">{selectedJob.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="p-2 rounded-full hover:bg-black/[0.05] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!applicationSubmitted ? (
                <div className="space-y-6 text-xs sm:text-sm text-[#6E6E73]">
                  <p className="leading-relaxed text-[#1D1D1F]">
                    {selectedJob.description}
                  </p>

                  {/* Requirements */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                      Core Prerequisites
                    </span>
                    <div className="space-y-1.5">
                      {selectedJob.requirements.map((req, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[#1D1D1F]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                      Primary Responsibilities
                    </span>
                    <div className="space-y-1.5">
                      {selectedJob.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start space-x-2 text-[#1D1D1F]">
                          <ChevronRight className="w-3.5 h-3.5 text-[#86868B] mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Application Form */}
                  <form onSubmit={handleApply} className="p-5 bg-[#F5F5F7] rounded-2xl border border-black/[0.06] space-y-3 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] block">
                      Submit Candidacy
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input 
                        type="text" 
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white border border-black/[0.08] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                      />
                      <input 
                        type="email" 
                        required
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white border border-black/[0.08] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                      />
                    </div>

                    <input 
                      type="text" 
                      placeholder="GitHub / Portfolio URL"
                      value={formData.github}
                      onChange={(e) => setFormData({...formData, github: e.target.value})}
                      className="w-full bg-white border border-black/[0.08] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    />

                    <textarea 
                      rows={2}
                      placeholder="Brief note on your work and alignment..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({...formData, coverNote: e.target.value})}
                      className="w-full bg-white border border-black/[0.08] rounded-xl p-3 text-xs focus:outline-none focus:ring-2 focus:ring-black/[0.1]"
                    />

                    <button
                      type="submit"
                      className="w-full apple-button-primary py-2.5 text-xs font-medium"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      <span>Transmit Application</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-8 bg-[#F5F5F7] rounded-2xl border border-black/[0.06] space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl font-semibold text-[#1D1D1F]">Application Transmitted</h4>
                    <p className="text-xs sm:text-sm text-[#6E6E73]">
                      Thank you, <strong className="text-[#1D1D1F]">{formData.name}</strong>. Your dossier for <strong className="text-[#1D1D1F]">{selectedJob.title}</strong> has been placed in our review queue.
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="apple-button-primary px-5 py-2 text-xs"
                  >
                    Close Dialog
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
