import React, { useState } from 'react';
import { techStackData } from '../data/techStack';
import { TechItem } from '../types';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TechItem['category'] | 'ALL'>('ALL');

  const categories: (TechItem['category'] | 'ALL')[] = [
    'ALL',
    'Frontend',
    'Backend',
    'Mobile',
    'Cloud & DevOps',
    'Database',
    'AI & Automation'
  ];

  const filteredItems = activeCategory === 'ALL' 
    ? techStackData 
    : techStackData.filter(t => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 sm:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Core Infrastructure & Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
              Technology Stack Matrix
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
              Modern languages, reactive frameworks, and telemetry protocols powering CaretCoders applications and microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-black/[0.04] self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-white text-[#1D1D1F] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Logo Directory Wall */}
        <div className="apple-card p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#86868B] border-b border-black/[0.06] pb-3">
            <span>OFFICIAL SUITE ({filteredItems.length} TECHNOLOGIES)</span>
            <span className="hidden sm:inline">PRODUCTION STANDARDS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.name}
                className="p-3 sm:p-4 rounded-2xl bg-[#F5F5F7]/80 hover:bg-white border border-black/[0.04] hover:border-black/[0.08] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-200 flex flex-col items-center justify-center text-center space-y-2.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-black/[0.04] shadow-sm group-hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-1">
                    {item.logoUrls.map((url, uIdx) => (
                      <img 
                        key={uIdx}
                        src={url}
                        alt={`${item.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="font-semibold text-xs text-[#1D1D1F] block">{item.name}</span>
                  <span className="text-[10px] font-mono text-[#86868B] block">v{item.version}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
