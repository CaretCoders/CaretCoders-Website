import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationPage, HomeSection } from '../types';
import { ChevronRight, ArrowUpRight, ShieldCheck, Sprout, FileText, Cpu, Sparkles, Layers } from 'lucide-react';

interface HeroSectionProps {
  onNavigatePage: (page: NavigationPage) => void;
  onScrollSection: (sectionId: HomeSection) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigatePage,
  onScrollSection
}) => {
  const [activeTab, setActiveTab] = useState<'agritech' | 'inksquirel' | 'detailmint'>('agritech');

  const productsPreview: Record<'agritech' | 'inksquirel' | 'detailmint', {
    name: string;
    badge: string;
    tagline: string;
    url?: string;
    description: string;
    stats: { label: string; value: string }[];
    icon: typeof ShieldCheck;
    accent: string;
  }> = {
    agritech: {
      name: 'Vashudha',
      badge: 'Machine Learning & IoT',
      tagline: 'Cultivating Tomorrow with Telemetry',
      url: 'https://vashudha.in/',
      description: 'Combining custom IoT mesh sensors with machine learning to help agricultural producers achieve identical yields with over 60% reduced chemical inputs.',
      stats: [
        { label: 'Technology', value: 'IoT Mesh + PyTorch' },
        { label: 'Target', value: '60%+ Less Chemical Inputs' },
        { label: 'Status', value: 'Experimental 2027-28' }
      ],
      icon: Sprout,
      accent: '#2D6A4F'
    },
    inksquirel: {
      name: 'InkSquirel',
      badge: 'Creator Protection Platform',
      tagline: 'Where Ideas Find Ink',
      url: '/inksquirrel.html',
      description: 'Affordable web platform enabling independent creators to anchor immutable proof of creation, organize project vaults, and share controlled pitch decks securely.',
      stats: [
        { label: 'Platform', value: 'Web Application' },
        { label: 'Core Mechanism', value: 'Proof of Creation' },
        { label: 'Status', value: '2028 - 2029' }
      ],
      icon: FileText,
      accent: '#C25E38'
    },
    detailmint: {
      name: 'Detail mint',
      badge: 'Multi-Location Platform',
      tagline: 'Because Every Detailer Needs Detailing',
      description: 'Streamlined multi-platform operations for automotive care businesses: automated employee scheduling, material processing, and real-time multi-branch revenue tracking.',
      stats: [
        { label: 'Architecture', value: 'Multi-Platform App' },
        { label: 'Scope', value: 'Multi-Location Operations' },
        { label: 'Status', value: '2027 Planned' }
      ],
      icon: ShieldCheck,
      accent: '#1D1D1F'
    }
  };

  const currentPreview = productsPreview[activeTab];
  const IconComponent = currentPreview.icon;

  return (
    <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 overflow-hidden bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Keynote-Grade Hero Introduction */}
        <div className="text-center max-w-4xl mx-auto space-y-6">

          {/* Semi-Transparent Glass Title Container with Smooth Animations */}
          <div className="relative inline-block mx-auto">
            {/* Ambient Multi-Layer Glow Orbs behind the Glass */}
            <motion.div 
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.55, 0.35],
                rotate: [0, 45, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#E5E5EA]/80 via-white/70 to-[#D1D1D6]/70 rounded-[2.5rem] blur-2xl -z-10 pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: [0, -5, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
              }}
              className="relative px-6 py-4 sm:px-12 sm:py-7 rounded-[2rem] sm:rounded-[2.75rem] backdrop-blur-2xl bg-white/55 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.95)] overflow-hidden inline-flex items-center justify-center group"
            >
              {/* Animated Specular Glass Shimmer Beam */}
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '250%' }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] pointer-events-none"
              />

              {/* Large Confident Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#1D1D1F] leading-[1.04] relative z-10 select-none">
                Somehow it works<motion.span 
                  animate={{ 
                    rotate: [0, 10, -8, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3
                  }}
                  className="inline-block origin-bottom text-[#1D1D1F]"
                >!</motion.span>
              </h1>
            </motion.div>
          </div>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#6E6E73] font-normal max-w-2xl mx-auto leading-relaxed tracking-tight"
          >
            CaretCoders constructs high-throughput operational software, agricultural IoT telemetry meshes, and creator provenance systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm font-medium"
          >
            <button
              onClick={() => onScrollSection('products')}
              className="apple-button-primary px-6 py-3 text-sm shadow-md"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
            </button>

            <button
              onClick={() => onNavigatePage('blog')}
              className="apple-button-secondary px-6 py-3 text-sm"
            >
              <span>Read Publications</span>
            </button>

            <button
              onClick={() => onNavigatePage('docs')}
              className="apple-link text-sm px-3 py-3"
            >
              <span>API Reference</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Interactive Product Showcase Surface */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 max-w-5xl mx-auto"
        >
          {/* Segmented Control Bar */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex p-1 rounded-full bg-black/[0.05] border border-black/[0.04]">
              {(['agritech', 'inksquirel', 'detailmint'] as const).map((key) => {
                const isSelected = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                      isSelected
                        ? 'bg-white text-[#1D1D1F] shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
                        : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                    }`}
                  >
                    {productsPreview[key].name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Showcase Surface */}
          <div className="bg-white rounded-3xl border border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-6 sm:p-10 lg:p-12 transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Information Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                      {currentPreview.badge}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F]">
                      {currentPreview.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-[#6E6E73]">
                      {currentPreview.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                    {currentPreview.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-2 border-t border-black/[0.06]">
                    {currentPreview.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-[11px] text-[#86868B] block">{stat.label}</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1F] block">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center space-x-4">
                    {currentPreview.url ? (
                      <a
                        href={currentPreview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button-primary px-4 py-2 text-xs inline-flex items-center space-x-1.5"
                      >
                        <span>Explore {currentPreview.name}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                    <button
                      onClick={() => onScrollSection('products')}
                      className="apple-link text-sm font-medium"
                    >
                      <span>Explore full specifications</span>
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Right Visual / Metric Representation */}
                <div className="lg:col-span-5 bg-[#F5F5F7] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-black/[0.04]">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-[#1D1D1F]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#86868B]">SYSTEM METRIC</span>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-medium text-[#6E6E73]">Execution Environment</div>
                    <div className="p-3 bg-white rounded-xl border border-black/[0.04] space-y-1 font-mono text-xs text-[#1D1D1F]">
                      <div className="flex justify-between">
                        <span className="text-[#86868B]">Engine</span>
                        <span>{activeTab === 'detailmint' ? 'React Native / Node' : activeTab === 'agritech' ? 'PyTorch / LoRaWAN' : 'TypeScript / Gemini'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#86868B]">Telemetry</span>
                        <span className="text-emerald-700">Online 99.98%</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#86868B] text-center">
                    Designed and audited according to CaretCoders structural standards.
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Three Value Pillars Summary Strip */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-black/[0.06] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#1D1D1F] block">Multi-Branch Operations</span>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Unified resource telemetry, employee scheduling, and revenue synchronization for automotive businesses.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#1D1D1F] block">Agritech Ecological Sensing</span>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Continuous soil health monitoring with machine learning to drastically reduce agricultural chemical inputs.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#1D1D1F] block">Creator Work Protection</span>
            <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
              Immutable proof of creation and controlled pitch sharing built for independent creators and inventors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
