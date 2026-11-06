import React, { useState } from 'react';
import { CHAPTERS } from '../data/bookData.ts';
import { Search, ChevronDown, ChevronUp, BookOpen, Layers, CheckCircle2, Sparkles } from 'lucide-react';

interface CurriculumSectionProps {
  onOpenPreview: () => void;
  onOpenCheckout: () => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onOpenPreview, onOpenCheckout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  const categories = [
    { id: 'all', label: 'All Chapters (12)' },
    { id: 'core', label: 'Core & Math' },
    { id: 'statistical', label: 'Statistical' },
    { id: 'text', label: 'Text & REGEX' },
    { id: 'lookup', label: 'Lookup & XLOOKUP' },
    { id: 'financial', label: 'Financial (IRR, PMT)' },
    { id: 'arrays', label: 'Dynamic Arrays' },
    { id: 'lambda', label: 'LAMBDA & Helpers' },
    { id: 'ai', label: '2026 AI & GROUPBY' },
  ];

  const filteredChapters = CHAPTERS.filter((chap) => {
    const matchesCategory = selectedCategory === 'all' || chap.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesTitle = chap.title.toLowerCase().includes(q);
    const matchesFunctions = chap.functions.some((f) => f.toLowerCase().includes(q));
    const matchesDesc = chap.description.toLowerCase().includes(q);
    return matchesCategory && (matchesTitle || matchesFunctions || matchesDesc);
  });

  const toggleChapter = (num: number) => {
    setExpandedChapter(expandedChapter === num ? null : num);
  };

  return (
    <section id="curriculum" className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Complete Curriculum Breakdown</span>
            <span aria-hidden="true">·</span>
            <span>12 Comprehensive Chapters</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What's Inside Excel Formula Mastery
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Written by Indorama Eleme Fertilizers & Chemicals analyst <strong className="text-slate-900">Uweh Bariduanen</strong>. Every chapter follows a strict formula architecture: syntax definition, parameter breakdown, 6 worked step-by-step examples, and 4 practical corporate scenarios.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search functions (e.g. XLOOKUP, REGEX, GROUPBY, PMT, LAMBDA)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-700 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters Accordion / List */}
        <div className="mt-8 space-y-3.5">
          {filteredChapters.length === 0 ? (
            <div className="p-10 text-center bg-slate-50 border border-dashed border-slate-300 rounded-xl">
              <Layers className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No chapters match "{searchQuery}"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for SUMIFS, VLOOKUP, FILTER, or clear your filters.</p>
            </div>
          ) : (
            filteredChapters.map((chap) => {
              const isExpanded = expandedChapter === chap.number;
              return (
                <div
                  key={chap.number}
                  className={`border rounded-xl transition-all duration-200 ${
                    isExpanded
                      ? 'border-emerald-300 bg-emerald-50/20 shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  {/* Chapter Header row */}
                  <button
                    onClick={() => toggleChapter(chap.number)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 font-bold font-mono text-xs flex items-center justify-center shrink-0 border border-emerald-200">
                        {String(chap.number).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-0.5">
                          <span className="font-semibold text-emerald-800">Chapter {chap.number}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono">Starts on Page {chap.page}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-600">{chap.functions.length} key functions</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {chap.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block text-xs font-mono font-medium text-slate-500">
                        p. {chap.page}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-emerald-100/80 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {chap.description}
                      </p>

                      {/* Functions Covered */}
                      <div>
                        <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                          Functions Detailed with 6 Examples & 4 Scenarios Each:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {chap.functions.map((fn, idx) => {
                            const isM365 = fn.includes('★');
                            return (
                              <span
                                key={idx}
                                className={`text-xs font-mono px-2.5 py-1 rounded border ${
                                  isM365
                                    ? 'bg-amber-50 text-amber-900 border-amber-200 font-semibold'
                                    : 'bg-white text-slate-800 border-slate-200'
                                }`}
                              >
                                {fn}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Chapter Highlight */}
                      <div className="p-3 bg-white rounded-lg border border-emerald-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                        <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-900 font-semibold">Practical Takeaway: </strong>
                          {chap.highlight}
                        </div>
                      </div>

                      {/* Quick Chapter Action */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">
                          (★) Marks modern Microsoft 365 / AI innovations
                        </span>
                        <button
                          onClick={onOpenPreview}
                          className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Preview this chapter in PDF</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Appendix B Callout Banner */}
        <div className="mt-10 p-6 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              <span>Appendix B Included</span>
              <span aria-hidden="true">·</span>
              <span>Pages 193–195</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Includes Structured Practice Datasets & 5 Real-World Industry Challenges
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Never get stuck in theory. Practice inventory variance, CRM cleaning, accounts receivable aging, dynamic executive dashboards, and live stock portfolio tracking with provided answer formulas.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Get Full Access — ₦25,000
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
