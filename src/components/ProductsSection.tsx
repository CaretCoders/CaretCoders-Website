import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { productsData } from '../data/products';
import { Product } from '../types';
import { 
  ShieldCheck, 
  Sprout, 
  FileText, 
  ChevronRight, 
  Check, 
  X, 
  Layers, 
  Cpu, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'AgriTech & Machine Learning', label: 'Agritech & ML' },
    { id: 'Creator Protection & Web Platform', label: 'Creator Platform' },
    { id: 'Automotive & Multi-Location Management', label: 'Multi-Location Operations' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeCategory);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Sprout': return Sprout;
      case 'FileText': return FileText;
      default: return Layers;
    }
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-white border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/[0.06]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Ecosystem & Architectures
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F]">
              Products Built with Intent
            </h2>
            <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
              Purpose-built platforms solving systemic problems across multi-location commerce, precision agriculture, and digital intellectual property.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-black/[0.04] self-start md:self-end">
            {categories.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#1D1D1F] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Bento Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => {
            const Icon = getProductIcon(product.iconName);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="apple-card p-6 sm:p-8 flex flex-col justify-between space-y-8 group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="space-y-6">
                  {/* Top Product Meta */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-[#6E6E73]">
                      {product.type}
                    </span>
                  </div>

                  {/* Title & Hook */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#86868B]">
                      "{product.hook}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3">
                    {product.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-black/[0.04]">
                    {(product.highlights || []).slice(0, 3).map((feature: string, i: number) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-[#1D1D1F]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Spec Footer */}
                <div className="pt-4 border-t border-black/[0.04] flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-[#86868B]">
                    {product.status}
                  </span>

                  <div className="flex items-center space-x-3">
                    {product.url && (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-[#1D1D1F] hover:text-black transition-colors"
                      >
                        <span>Explore</span>
                        <ExternalLink className="w-3 h-3 text-[#1D1D1F]" />
                      </a>
                    )}
                    <span className="apple-link font-medium text-xs">
                      <span>Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-black/[0.08] max-w-2xl w-full p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl text-[#1D1D1F]"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-black/[0.06] pb-5">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6E73] font-medium italic">
                    "{selectedProduct.hook}"
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full hover:bg-black/[0.05] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="space-y-6 text-sm text-[#6E6E73]">
                <p className="leading-relaxed text-[#1D1D1F]">
                  {selectedProduct.fullDesc || selectedProduct.shortDesc}
                </p>

                {/* Architectural Highlights */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                    Key Architectural Capabilities
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {(selectedProduct.highlights || []).map((highlight: string, idx: number) => (
                      <div key={idx} className="p-3 bg-[#F5F5F7] rounded-xl border border-black/[0.04] flex items-start space-x-2.5 text-xs sm:text-sm text-[#1D1D1F]">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Table */}
                {selectedProduct.metrics && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                      Operational Specifications
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedProduct.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 bg-[#F5F5F7] rounded-xl border border-black/[0.04] text-center">
                          <span className="text-[11px] text-[#86868B] block">{m.label}</span>
                          <span className="text-xs font-semibold text-[#1D1D1F] block mt-0.5">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology Stack Tags */}
                {selectedProduct.techStack && (
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block">
                      Core Stack Components
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.techStack.map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white border border-black/[0.08] rounded-full text-xs font-mono text-[#1D1D1F]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <span className="font-mono text-xs text-[#86868B]">
                  Launch Timeline: {selectedProduct.launchYear}
                </span>
                <div className="flex items-center space-x-3">
                  {selectedProduct.url && (
                    <a
                      href={selectedProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-button-primary px-4 py-2 text-xs inline-flex items-center space-x-1.5"
                    >
                      <span>Explore {selectedProduct.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="apple-button-secondary px-5 py-2 text-xs"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
