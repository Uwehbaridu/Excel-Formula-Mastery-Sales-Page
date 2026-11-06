import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface MobileBottomBarProps {
  onOpenCheckout: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenCheckout }) => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg flex items-center justify-between gap-3">
      <div className="flex flex-col">
        <span className="text-[11px] text-slate-500 font-medium">Excel Formula Mastery</span>
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-extrabold text-slate-900 tabular-nums">
            {BOOK_METADATA.priceFormatted}
          </span>
          <span className="text-[10px] text-slate-400 line-through tabular-nums">
            {BOOK_METADATA.originalPriceFormatted}
          </span>
        </div>
      </div>

      <button
        onClick={onOpenCheckout}
        className="py-2 px-4 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Get Book — ₦25,000</span>
      </button>
    </div>
  );
};
