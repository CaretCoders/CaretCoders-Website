import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Layers, 
  Hammer, 
  FlaskConical, 
  Lightbulb, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const principles = [
    {
      id: '01',
      title: 'Problem First, Technology Second',
      icon: Target,
      content: [
        'We don’t begin by asking, "What technology should we use?"',
        'We begin by understanding the problem, the people, and the workflow behind it. Then we build technology that actually fits.'
      ]
    },
    {
      id: '02',
      title: 'Ideas Into Working Products',
      icon: Layers,
      content: [
        'An idea is only valuable when it can be tested in the real world.',
        'We take concepts beyond discussions and prototypes, turning them into usable products that can be experienced, tested, and improved.'
      ]
    },
    {
      id: '03',
      title: 'Learn by Building',
      icon: Hammer,
      content: [
        'We are a team of young builders who believe experience comes from doing.',
        'Every project is an opportunity to experiment, learn something new, and improve how we build.'
      ]
    },
    {
      id: '04',
      title: 'Built Through Experimentation',
      icon: FlaskConical,
      content: [
        'Not every idea works on the first attempt.',
        'We embrace experimentation, test assumptions, learn from failures, and continuously improve until we find what works.'
      ]
    },
    {
      id: '05',
      title: 'Technology With Purpose',
      icon: Lightbulb,
      content: [
        'We use technology as a tool to solve problems, not as the solution itself.',
        'From software to AI and emerging technologies, we choose what makes sense for the problem.'
      ]
    },
    {
      id: '06',
      title: 'Building What Comes Next',
      icon: TrendingUp,
      content: [
        'Caretcoders is not just focused on delivering projects.',
        'We are building products, exploring new ideas, and creating a team capable of turning difficult problems into meaningful solutions.'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#F5F5F7] border-b border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header & Manifesto Intro */}
        <div className="max-w-3xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
              Why Choose Caretcoders?
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-tight">
              We Learn by Building. <br className="hidden sm:inline" />
              We Build to Solve.
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#6E6E73] leading-relaxed">
            <p className="font-medium text-[#1D1D1F]">
              Caretcoders is a young, ambitious technology company built around one simple belief—the best way to learn is to solve real problems.
            </p>
            <p>
              We explore ideas, understand how people actually work, experiment with technology, and turn promising ideas into working products. We may start with a question, but we aim to end with something real.
            </p>
          </div>
        </div>

        {/* 6 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#86868B]">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm text-[#6E6E73] leading-relaxed">
                    {item.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1D1D1F] flex items-center justify-center text-white flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-base sm:text-lg font-medium text-[#1D1D1F] leading-snug">
              We don't just write code. We explore, experiment, build, and learn—one real problem at a time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

