import React from 'react';
import { TESTIMONIALS } from '../data/bookData.ts';
import { Star, Building2, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Corporate Impact & Reader Reviews</span>
            <span aria-hidden="true">·</span>
            <span>Real Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Professionals Across Nigeria & Globally
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            See how analysts, finance leads, and engineers use the formulas in this book to automate manual tasks and accelerate reporting.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-emerald-200/60 absolute top-5 right-5 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-emerald-700 font-medium">
                    {t.role} · {t.company}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {t.location}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Real-World Industry Application Row */}
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-sm font-bold text-slate-900 block">Banking & Finance</span>
            <span className="text-[11px] text-slate-500">Loan Amortization, IRR & Cashflow</span>
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 block">Energy & Chemicals</span>
            <span className="text-[11px] text-slate-500">Production Tolerances & Shifts</span>
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 block">FMCG & Supply Chain</span>
            <span className="text-[11px] text-slate-500">Inventory Sizing & Pallet Rounding</span>
          </div>
          <div>
            <span className="text-sm font-bold text-slate-900 block">HR & Corporate Ops</span>
            <span className="text-[11px] text-slate-500">CRM Cleaning & Headcount Models</span>
          </div>
        </div>

      </div>
    </section>
  );
};
