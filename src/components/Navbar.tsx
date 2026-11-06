import React from 'react';
import { FileSpreadsheet, ArrowRight, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: () => void;
  onOpenPreview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenPreview }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-800 transition-colors">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-slate-900 leading-tight">
              Excel Formula Mastery
            </span>
            <span className="text-[11px] font-medium text-emerald-700 leading-none">
              2026 Edition · Uweh Bariduanen
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Overview
          </a>
          <a href="#curriculum" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            What's Inside
          </a>
          <a href="#formula-lab" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            Formula Lab
          </a>
          <a href="#author" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            About the Author
          </a>
          <a href="#faq" className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPreview}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Look Inside</span>
          </button>
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            <span>Get Book — ₦25,000</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
