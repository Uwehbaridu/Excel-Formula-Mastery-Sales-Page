import React from 'react';
import { FileSpreadsheet, ShieldCheck, Mail } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface FooterProps {
  onOpenPreview: () => void;
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPreview, onOpenCheckout }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 pb-20 md:pb-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-850">
          
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-md bg-emerald-700 flex items-center justify-center text-white">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">Excel Formula Mastery 2026</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The Complete Guide to 100+ Functions with 600 Hands-On Examples and 400 Real-World Scenarios for Microsoft 365 and AI Copilot. Written by Uweh Bariduanen.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              First Edition: {BOOK_METADATA.firstEdition} · ISBN: {BOOK_METADATA.isbn}
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Book Contents
            </p>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview & Pricing (₦25,000)</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-emerald-400 transition-colors">12 Complete Chapters</a>
              </li>
              <li>
                <a href="#formula-lab" className="hover:text-emerald-400 transition-colors">Interactive Formula Simulator</a>
              </li>
              <li>
                <a href="#author" className="hover:text-emerald-400 transition-colors">About Author Uweh Bariduanen</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Actions & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Direct Access
            </p>
            <button
              onClick={onOpenCheckout}
              className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-600 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Digital Access — ₦25,000</span>
            </button>
            <button
              onClick={onOpenPreview}
              className="w-full py-2 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <span>Preview Sample PDF</span>
            </button>
            <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>uwehbariduanen@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Legal & Trademark notice directly from page 2 of book */}
        <div className="mt-8 pt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            Copyright © 2024–2026 by Uweh Bariduanen. All rights reserved. Data Edge Academy.
          </p>
          <p className="text-center md:text-right">
            Microsoft and Excel are registered trademarks of Microsoft Corporation. This book is an independent publication.
          </p>
        </div>

      </div>
    </footer>
  );
};
