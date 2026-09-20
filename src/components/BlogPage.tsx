import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPostsData } from '../data/blogPosts';
import { BlogPost } from '../types';
import { Search, Clock, Calendar, ChevronRight, X, ArrowLeft, BookOpen, Share2, Check } from 'lucide-react';
import Markdown from 'react-markdown';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ['All', 'Software Engineering', 'AI & Automation', 'SaaS Development', 'Mobile Development', 'Startup Insights'];

  const filteredPosts = blogPostsData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPostsData.find(p => p.featured) || blogPostsData[0];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] py-16 sm:py-24 text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
            Research, Engineering & Whitepapers
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#1D1D1F]">
            CaretCoders Publications
          </h1>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            In-depth technical architecture breakdowns, field research findings, zero-knowledge cryptography implementations, and startup operating memos.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#86868B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research papers, algorithms, tags..."
              className="w-full bg-white border border-black/[0.08] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#1D1D1F] focus:outline-none focus:ring-2 focus:ring-black/[0.1] shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-black/[0.04] self-start md:self-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-[#1D1D1F] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                    : 'text-[#6E6E73] hover:text-[#1D1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Publication Hero Banner */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="apple-card p-8 sm:p-12 lg:p-14 bg-white space-y-6 group cursor-pointer"
            onClick={() => setSelectedPost(featuredPost)}
          >
            <div className="flex items-center space-x-3 text-xs font-mono text-[#86868B]">
              <span className="px-2.5 py-1 rounded-full bg-[#1D1D1F] text-white text-[10px] font-semibold tracking-wider uppercase">
                FEATURED RESEARCH
              </span>
              <span>•</span>
              <span>{featuredPost.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
            </div>

            <div className="space-y-3 max-w-4xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed line-clamp-3">
                {featuredPost.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/[0.06]">
              <div className="flex items-center space-x-3">
                <img 
                  src={featuredPost.author.avatar} 
                  alt={featuredPost.author.name}
                  className="w-8 h-8 rounded-full object-cover border border-black/[0.08]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="font-medium text-xs text-[#1D1D1F] block">{featuredPost.author.name}</span>
                  <span className="text-[11px] text-[#86868B] block">{featuredPost.author.role}</span>
                </div>
              </div>

              <span className="apple-link text-xs sm:text-sm font-medium">
                <span>Read Full Research Paper</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </span>
            </div>
          </motion.div>
        )}

        {/* Publications Grid or Empty State */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedPost(post)}
                className="apple-card p-6 sm:p-8 flex flex-col justify-between space-y-6 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#86868B] border-b border-black/[0.04] pb-3">
                    <span className="uppercase text-[11px] font-semibold text-[#1D1D1F]">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.04] text-xs">
                  <div className="flex items-center space-x-2">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] text-[#86868B]">{post.author.name}</span>
                  </div>

                  <span className="apple-link font-medium text-xs">
                    <span>Read Paper</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="apple-card p-12 sm:p-16 text-center bg-white space-y-4 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mx-auto text-[#86868B]">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] tracking-tight">
                No Publications Available
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] max-w-md mx-auto leading-relaxed">
                Research papers, technical whitepapers, and engineering memos will be published here as projects conclude their respective review cycles.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Full Paper Reading View Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-black/[0.08] max-w-3xl w-full p-6 sm:p-12 space-y-8 max-h-[90vh] overflow-y-auto shadow-2xl text-[#1D1D1F]"
            >
              {/* Top Controls */}
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center space-x-1.5 text-xs text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Publications</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full hover:bg-black/[0.05] text-[#86868B] hover:text-[#1D1D1F] transition-colors text-xs flex items-center gap-1"
                  >
                    {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                    <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 rounded-full hover:bg-black/[0.05] text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs font-mono text-[#86868B]">
                  <span className="uppercase text-[#1D1D1F] font-semibold">{selectedPost.category}</span>
                  <span>•</span>
                  <span>{selectedPost.publishDate}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F]">
                  {selectedPost.title}
                </h1>

                {/* Author Card */}
                <div className="flex items-center space-x-3 p-4 bg-[#F5F5F7] rounded-2xl border border-black/[0.04]">
                  <img 
                    src={selectedPost.author.avatar} 
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-black/[0.08]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-semibold text-xs text-[#1D1D1F] block">{selectedPost.author.name}</span>
                    <span className="text-[11px] text-[#86868B] block">{selectedPost.author.role}</span>
                  </div>
                </div>
              </div>

              {/* Markdown Content */}
              <div className="text-sm sm:text-base text-[#1D1D1F] leading-relaxed space-y-4 font-normal">
                <div className="markdown-body">
                  <Markdown>{selectedPost.content}</Markdown>
                </div>
              </div>

              {/* Tags & Footer */}
              <div className="pt-6 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedPost.tags.map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-[#F5F5F7] text-[#6E6E73] rounded-full">
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="apple-button-primary px-5 py-2 text-xs"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
