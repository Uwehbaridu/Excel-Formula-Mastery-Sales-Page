import React from 'react';
import { Award, Briefcase, GraduationCap, Building2, Quote, BookOpen } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface AuthorSectionProps {
  onOpenPreview: () => void;
}

export const AuthorSection: React.FC<AuthorSectionProps> = ({ onOpenPreview }) => {
  return (
    <section id="author" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Author Profile Visual & Trust Badges (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative">
              {/* Profile Card Mockup */}
              <div className="w-64 sm:w-72 bg-white rounded-2xl p-6 shadow-xl border border-slate-200 text-center relative z-10">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-emerald-800 to-teal-700 flex items-center justify-center text-white text-3xl font-extrabold shadow-md mb-4">
                  UB
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">{BOOK_METADATA.author}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1">Data Analyst & Corporate Trainer</p>
                <p className="text-xs text-slate-500 mt-0.5">Indorama Eleme Fertilizers & Chemicals</p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-around text-center">
                  <div>
                    <span className="text-base font-extrabold text-slate-900 tabular-nums">10+</span>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Years Exp</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div>
                    <span className="text-base font-extrabold text-slate-900 tabular-nums">2,500+</span>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Trained</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200" />
                  <div>
                    <span className="text-base font-extrabold text-slate-900 tabular-nums">196</span>
                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Pages</span>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    onClick={onOpenPreview}
                    className="w-full py-2 px-3 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/80 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Author's Preface</span>
                  </button>
                </div>
              </div>

              {/* Decorative background geometry */}
              <div className="absolute -bottom-4 -right-4 w-64 h-72 rounded-2xl bg-emerald-800/10 -z-0" />
            </div>
          </div>

          {/* Right Column: Bio & Teaching Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              <span>Meet the Author</span>
              <span aria-hidden="true">·</span>
              <span>Practitioner-Led Instruction</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              "Excel is more than just a tool. It is the engine for career advancement and business efficiency."
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong className="text-slate-900 font-semibold">{BOOK_METADATA.author}</strong> is a seasoned Data Analyst and professional Excel Trainer currently serving at <strong>Indorama Eleme Fertilizers & Chemicals</strong>. With a career deeply rooted in the practical application of data science and corporate workforce training, he bridges the gap between complex analytical workflows and everyday workplace productivity.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In addition to his corporate role, he serves as the <strong>Training Director at Data Edge Academy</strong>, where he leads the mission to equip students and working professionals with essential data analysis skills. As an educator, he specializes in structured training programs that prioritize real-world application over textbook theory.
            </p>

            {/* Philosophy Box */}
            <div className="p-4 sm:p-5 bg-white rounded-xl border border-slate-200/90 shadow-xs relative">
              <Quote className="w-8 h-8 text-emerald-200 absolute right-4 top-4 pointer-events-none" />
              <p className="text-xs uppercase tracking-wider font-bold text-emerald-800 mb-1">
                Core Teaching Philosophy:
              </p>
              <p className="text-sm font-semibold text-slate-900 italic">
                "Clarity through structure — helping teams and students move from foundational data entry to the execution of sophisticated analytical models with immediate, measurable results."
              </p>
            </div>

            {/* Credential Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <Building2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Indorama Eleme Fertilizers</h4>
                  <p className="text-[11px] text-slate-500">Corporate Data Analytics & Industrial Operations</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                <GraduationCap className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Data Edge Academy</h4>
                  <p className="text-[11px] text-slate-500">Training Director & Curriculum Developer</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
