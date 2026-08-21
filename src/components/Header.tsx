import React, { useState, useEffect } from 'react';
import { NavigationPage, HomeSection } from '../types';
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentPage: NavigationPage;
  setCurrentPage: (page: NavigationPage) => void;
  activeHomeSection: HomeSection;
  scrollToHomeSection: (sectionId: HomeSection) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, activeHomeSection, scrollToHomeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 10); window.addEventListener('scroll', handleScroll, { passive: true }); return () => window.removeEventListener('scroll', handleScroll); }, []);
  const handleNavClick = (page: NavigationPage) => { setCurrentPage(page); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleSectionClick = (section: HomeSection) => { if (currentPage !== 'home') { setCurrentPage('home'); setTimeout(() => scrollToHomeSection(section), 100); } else { scrollToHomeSection(section); } setMobileMenuOpen(false); };
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_1px_8px_rgba(0,0,0,0.03)]' : 'bg-[#F5F5F7]/85 backdrop-blur-md border-b border-black/[0.04]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <button onClick={() => handleNavClick('home')} className="flex items-center space-x-2.5 group text-left cursor-pointer focus:outline-none">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white shadow-sm border border-black/[0.08] p-1 flex items-center justify-center transition-transform group-hover:scale-105">
            <img src="/caretcoders_logo.png" alt="CaretCoders Logo" className="w-full h-full object-contain block" />
          </div>
          <div className="flex flex-col"><span className="font-semibold text-sm sm:text-base tracking-[-0.015em] text-[#1D1D1F] group-hover:text-black transition-colors">CaretCoders</span></div>
        </button>
        <nav className="hidden lg:flex items-center space-x-1 font-normal text-[13px] text-[#1D1D1F]/70">
          <button onClick={() => handleNavClick('home')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'home' && activeHomeSection === 'hero' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Overview</button>
          <button onClick={() => handleSectionClick('products')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'home' && activeHomeSection === 'products' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Products</button>
          <button onClick={() => handleSectionClick('why-us')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'home' && activeHomeSection === 'why-us' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Philosophy</button>
          <button onClick={() => handleSectionClick('journey')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'home' && activeHomeSection === 'journey' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Chronicle</button>
          <button onClick={() => handleNavClick('blog')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'blog' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Publications</button>
          <button onClick={() => handleNavClick('careers')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'careers' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>Careers</button>
          <button onClick={() => handleNavClick('docs')} className={`px-3 py-1.5 rounded-full transition-all hover:text-[#1D1D1F] hover:bg-black/[0.04] ${currentPage === 'docs' ? 'text-[#1D1D1F] font-medium bg-black/[0.05]' : ''}`}>API Docs</button>
        </nav>
        <div className="flex items-center space-x-3">
          <button onClick={() => handleSectionClick('contact')} className="apple-button-primary text-xs sm:text-[13px] px-3.5 sm:px-4 py-1.5 shadow-sm"><span>Contact</span><ChevronRight className="w-3.5 h-3.5 ml-1 opacity-70" /></button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-1.5 rounded-lg text-[#1D1D1F] hover:bg-black/[0.05] transition-colors" aria-label="Toggle menu">{mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
        </div>
      </div>
      {mobileMenuOpen && (<div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl"><div className="flex flex-col space-y-2 text-base font-normal text-[#1D1D1F]">
        <button onClick={() => handleNavClick('home')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Overview</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleSectionClick('products')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Products & Ecosystem</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleSectionClick('why-us')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Engineering Philosophy</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleSectionClick('journey')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Startup Chronicle</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleNavClick('blog')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Publications & Papers</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleNavClick('careers')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>Careers & Fellowships</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
        <button onClick={() => handleNavClick('docs')} className="text-left py-2 px-3 rounded-xl hover:bg-black/[0.04] transition-colors flex items-center justify-between"><span>API Reference</span><ChevronRight className="w-4 h-4 text-[#86868B]" /></button>
      </div><div className="pt-3 border-t border-black/[0.06]"><button onClick={() => handleSectionClick('contact')} className="w-full apple-button-primary py-3 text-xs font-medium"><span>Initiate Institutional Inquiry</span></button></div></div>)}
    </header>
  );
};
