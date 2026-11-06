import React from 'react';
import { BookMockup3D } from './BookMockup3D.tsx';
import { ArrowRight, BookOpen, ShieldCheck, Download, CheckCircle2, Award, Zap } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface HeroProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenPreview }) => {
  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50">
      {/* Subtle structural grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#107C41 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy & Primary Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 mb-4 tracking-wide">
              <span>Official 2026 Release</span>
              <span aria-hidden="true">·</span>
              <span>By Uweh Bariduanen</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-mono">ISBN: {BOOK_METADATA.isbn}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Master Modern Excel Formulas. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900">
                From Core Functions to Microsoft 365 & AI Copilot.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-balance">
              The definitive 196-page playbook for data analysts, finance professionals, and business operators. Covers 
              <strong className="text-slate-900 font-semibold"> 100+ functions</strong> with 
              <strong className="text-slate-900 font-semibold"> 600 hands-on examples</strong> and 
              <strong className="text-slate-900 font-semibold"> 400 real-world Nigerian & global business scenarios</strong>.
            </p>

            {/* Editorial Feature Badges List */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100+ Modern Functions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>600 Worked Examples</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>400 Real Scenarios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>2026 REGEX & GROUPBY</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Excel Exercise Files</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant PDF Download</span>
              </div>
            </div>

            {/* Contiguous Purchase Block */}
            <div className="mt-8 p-5 sm:p-6 bg-white rounded-xl border border-emerald-100 shadow-md shadow-emerald-950/5 max-w-xl">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tabular-nums">
                    {BOOK_METADATA.priceFormatted}
                  </span>
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    {BOOK_METADATA.originalPriceFormatted}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Save {BOOK_METADATA.discountPercent}% Today
                  </span>
                </div>
                <div className="text-right text-xs text-slate-500 font-medium">
                  One-time payment · Lifetime access
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenCheckout}
                  className="flex-1 py-3 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Buy Instant Access — ₦25,000</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={onOpenPreview}
                  className="py-3 px-5 text-sm font-semibold text-slate-700 hover:text-emerald-800 bg-slate-50 hover:bg-emerald-50/70 border border-slate-200 hover:border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Preview PDF</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-y-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>14-Day Money-Back Guarantee</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Instant delivery via Paystack & Transfer</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Book Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <BookMockup3D onOpenPreview={onOpenPreview} />

            {/* Quick action beneath book */}
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Includes complete Appendix B practical challenge workbooks</span>
            </div>
          </div>

        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white/70 backdrop-blur-xs rounded-lg border border-slate-200/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">196</p>
            <p className="text-xs font-semibold text-emerald-800 mt-1 uppercase tracking-wider">Pages of Mastery</p>
            <p className="text-xs text-slate-500 mt-0.5">High-res, searchable & printable reference</p>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur-xs rounded-lg border border-slate-200/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">100+</p>
            <p className="text-xs font-semibold text-emerald-800 mt-1 uppercase tracking-wider">Excel Functions</p>
            <p className="text-xs text-slate-500 mt-0.5">From basic SUM to 2026 Copilot & PIVOTBY</p>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur-xs rounded-lg border border-slate-200/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">600</p>
            <p className="text-xs font-semibold text-emerald-800 mt-1 uppercase tracking-wider">Worked Examples</p>
            <p className="text-xs text-slate-500 mt-0.5">6 hands-on code examples per function</p>
          </div>
          <div className="p-4 bg-white/70 backdrop-blur-xs rounded-lg border border-slate-200/60">
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">400</p>
            <p className="text-xs font-semibold text-emerald-800 mt-1 uppercase tracking-wider">Business Scenarios</p>
            <p className="text-xs text-slate-500 mt-0.5">Finance, HR, sales, supply chain & ops</p>
          </div>
        </div>

      </div>
    </section>
  );
};
