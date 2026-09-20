import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { storyLevelsData, partyMembersData, StoryLevel } from '../data/journey';
import { Calendar, ChevronRight, X, Award, Check } from 'lucide-react';

export const StartupJourneySection: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryLevel | null>(null);
  const [filterBadge, setFilterBadge] = useState<string>('all');

  const badges = ['all', 'PRESS START', 'SIDE QUEST', 'PARTY ASSEMBLED', 'BOSS BATTLE', 'NEW QUEST ACCEPTED'];

  const filteredStories = filterBadge === 'all'
    ? storyLevelsData
    : storyLevelsData.filter(s => s.badge.toUpperCase() === filterBadge.toUpperCase());

  return (
    <section id="journey" className="py-20 sm:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Origins & Milestones
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
              Startup Journey & Chronicle
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
              From early operational accounting insights in automotive detailing to 12 pilot deployments, Startup India recognition, and precision agritech research.
            </p>
          </div>

          {/* Badge Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-black/[0.04] self-start md:self-end">
            {badges.map(badge => (
              <button
                key={badge}
                onClick={() => setFilterBadge(badge)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filterBadge === badge 
                    ? 'bg-white text-[#1D1D1F] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                {badge === 'all' ? 'All Milestones' : badge}
              </button>
            ))}
          </div>
        </div>

        {/* Apple-style Vertical Timeline */}
        <div className="relative border-l border-black/[0.08] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {filteredStories.map((story, index) => (
            <motion.div 
              key={story.level}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedStory(story)}
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-4 w-3.5 h-3.5 bg-white border-2 border-[#1D1D1F] rounded-full group-hover:scale-125 transition-transform" />

              <div className="apple-card p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#86868B] border-b border-black/[0.04] pb-3 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-[#1D1D1F]">{story.level}</span>
                    <span>•</span>
                    <span className="uppercase text-[#6E6E73]">{story.badge}</span>
                  </div>
                  {story.date && (
                    <div className="flex items-center space-x-1.5 text-[#86868B]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{story.date}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
                    {story.title}
                  </h3>
                  {story.subtitle && (
                    <p className="text-xs sm:text-sm text-[#86868B] font-medium italic">
                      {story.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3">
                  {story.description}
                </p>

                {/* Level 03 Party Members Callout */}
                {story.level === 'LEVEL 03' && partyMembersData.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-black/[0.04]">
                    {partyMembersData.map((member, i) => (
                      <div key={i} className="p-3.5 bg-[#F5F5F7] rounded-xl border border-black/[0.04] space-y-1">
                        <span className="font-semibold text-xs text-[#1D1D1F] block">{member.name}</span>
                        <div className="space-y-0.5">
                          <span className="text-[11px] text-[#86868B] font-medium block">
                            <span className="text-[#86868B]">Role: </span>{member.role || member.designation}
                          </span>
                          {member.specialization && member.specialization !== (member.role || member.designation) && (
                            <span className="text-[11px] text-[#424245] block">
                              {member.specialization}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-black/[0.04]">
                  <span className="apple-link text-xs">
                    <span>Inspect Milestone Chronicle</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                  <span className="font-mono text-[10px] text-[#86868B] uppercase">
                    {story.achievement || 'CHRONICLED'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Milestone Modal */}
      <AnimatePresence>
        {selectedStory && (
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
                  <span className="text-xs font-mono text-[#86868B] block">{selectedStory.level} — {selectedStory.badge}</span>
                  <h3 className="text-2xl font-semibold tracking-tight mt-1">{selectedStory.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedStory(null)}
                  className="p-2 rounded-full hover:bg-black/[0.05] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#6E6E73]">
                {selectedStory.subtitle && (
                  <p className="text-base font-medium text-[#1D1D1F] italic">{selectedStory.subtitle}</p>
                )}
                <p className="leading-relaxed text-[#1D1D1F]">{selectedStory.description}</p>

                {selectedStory.level === 'LEVEL 03' && partyMembersData.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] block">
                      Core Team & Roster
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {partyMembersData.map((member, i) => (
                        <div key={i} className="p-4 bg-[#F5F5F7] rounded-2xl border border-black/[0.06] space-y-1.5">
                          <span className="font-semibold text-sm text-[#1D1D1F] block">{member.name}</span>
                          <div className="text-xs space-y-0.5">
                            <div className="font-medium text-[#1D1D1F]">
                              <span className="text-[#86868B]">Role: </span>{member.role || member.designation}
                            </div>
                            {member.specialization && (
                              <div className="text-[#6E6E73]">
                                {member.specialization}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedStory.bossEncounter && (
                  <div className="p-4 bg-[#F5F5F7] rounded-2xl border border-black/[0.06] space-y-1.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] block">
                      Strategic Pivot & Execution
                    </span>
                    <p className="text-xs text-[#6E6E73] leading-relaxed">
                      Declined traditional VC funding due to narrow single-market constraints. Pivoted focus toward high-impact multi-domain engineering and sustainable precision agritech.
                    </p>
                  </div>
                )}

                {selectedStory.achievement && (
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/60 flex items-center space-x-3 text-xs text-emerald-900 font-medium">
                    <Award className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                    <span>MILESTONE VERIFIED: {selectedStory.achievement}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-black/[0.06] flex justify-end">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="apple-button-primary px-5 py-2 text-xs"
                >
                  Close Chronicle View
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
