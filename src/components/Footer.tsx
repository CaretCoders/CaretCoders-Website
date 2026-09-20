import React from 'react';
import { NavigationPage, HomeSection } from '../types';
import { ChevronRight, ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import logoImg from '../assets/images/caretcoders_logo.png';

interface FooterProps {
  onNavigatePage: (page: NavigationPage) => void;
  onScrollSection: (sectionId: HomeSection) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigatePage,
  onScrollSection
}) => {
  const handleNav = (page: NavigationPage) => {
    onNavigatePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSec = (sec: HomeSection) => {
    onScrollSection(sec);
  };

  return (
    <footer className="bg-[#F5F5F7] border-t border-black/[0.08] text-[#1D1D1F] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid: Brand & Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Col (2 cols on small, 2 on lg) */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-white shadow-sm border border-black/[0.08] p-1 flex items-center justify-center">
                <img 
                  src={logoImg} 
                  alt="CaretCoders Logo" 
                  className="w-full h-full object-contain block"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-semibold text-base tracking-tight text-[#1D1D1F]">
                CaretCoders
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#6E6E73] max-w-sm leading-relaxed">
              Modern platforms, agricultural telemetry meshes, and creator provenance systems.
            </p>
          </div>

          {/* Directory: Products */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
              Products
            </span>
            <ul className="space-y-2 text-xs text-[#6E6E73]">
              <li>
                <button onClick={() => handleSec('products')} className="hover:text-[#1D1D1F] transition-colors">
                  Vashudha
                </button>
              </li>
              <li>
                <button onClick={() => handleSec('products')} className="hover:text-[#1D1D1F] transition-colors">
                  InkSquirel
                </button>
              </li>
              <li>
                <button onClick={() => handleSec('products')} className="hover:text-[#1D1D1F] transition-colors">
                  Detail mint
                </button>
              </li>
              <li>
                <button onClick={() => handleSec('tech-stack')} className="hover:text-[#1D1D1F] transition-colors">
                  Technology Matrix
                </button>
              </li>
            </ul>
          </div>

          {/* Directory: Organization */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
              Organization
            </span>
            <ul className="space-y-2 text-xs text-[#6E6E73]">
              <li>
                <button onClick={() => handleSec('why-us')} className="hover:text-[#1D1D1F] transition-colors">
                  Engineering Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleSec('journey')} className="hover:text-[#1D1D1F] transition-colors">
                  Startup Chronicle
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#1D1D1F] transition-colors">
                  Research Papers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-[#1D1D1F] transition-colors">
                  Careers & Fellowships
                </button>
              </li>
            </ul>
          </div>

          {/* Directory: Developers & Legal */}
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
              Developers
            </span>
            <ul className="space-y-2 text-xs text-[#6E6E73]">
              <li>
                <button onClick={() => handleNav('docs')} className="hover:text-[#1D1D1F] transition-colors">
                  API Documentation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('docs')} className="hover:text-[#1D1D1F] transition-colors">
                  Client SDKs
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('docs')} className="hover:text-[#1D1D1F] transition-colors">
                  Sandbox Key
                </button>
              </li>
              <li>
                <button onClick={() => handleSec('contact')} className="hover:text-[#1D1D1F] transition-colors">
                  Security Inquiries
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p>
            Copyright © {new Date().getFullYear()} CaretCoders Systems Inc. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleSec('contact')} className="hover:text-[#1D1D1F] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleSec('contact')} className="hover:text-[#1D1D1F] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => handleSec('contact')} className="hover:text-[#1D1D1F] transition-colors">
              Security Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
