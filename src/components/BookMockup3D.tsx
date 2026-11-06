import React from 'react';
import { FileSpreadsheet, Sparkles, BookOpen, Eye } from 'lucide-react';

interface BookMockup3DProps {
  onOpenPreview: () => void;
}

export const BookMockup3D: React.FC<BookMockup3DProps> = ({ onOpenPreview }) => {
  return (
    <div className="relative perspective-1000 flex items-center justify-center py-6 px-4 select-none">
      {/* Background glow subtle */}
      <div className="absolute w-72 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3D Book Container */}
      <div 
        onClick={onOpenPreview}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpenPreview(); }}
        className="book-transform cursor-pointer relative w-[260px] sm:w-[290px] h-[390px] sm:h-[430px] rounded-r-xl rounded-l-sm bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 p-6 text-white flex flex-col justify-between border-r-4 border-b-4 border-emerald-950/80 group"
      >
        {/* Book Spine 3D simulation strip on left edge */}
        <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-emerald-950/90 via-emerald-800/40 to-transparent rounded-l-sm border-r border-emerald-700/30" />
        
        {/* Book Paper Edge Simulation on right side */}
        <div className="absolute -right-3 top-2 bottom-2 w-3 bg-gradient-to-r from-amber-50 via-slate-100 to-amber-100 rounded-r-sm shadow-inner opacity-90" 
             style={{ backgroundImage: 'repeating-linear-gradient(to bottom, #f1f5f9 0px, #f1f5f9 2px, #e2e8f0 2px, #e2e8f0 3px)' }}
        />

        {/* Top Header on Cover */}
        <div className="relative z-10 pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-emerald-300">
              <FileSpreadsheet className="w-5 h-5" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-emerald-300/90">
                Data Edge Press
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-800/60 border border-emerald-600/40 text-emerald-200">
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>2026 EDITION</span>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight font-display">
              Excel Formula <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-100">
                Mastery
              </span>
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 mt-2.5 rounded-full" />
          </div>
        </div>

        {/* Center Cover Graphic - Formula Grid / Matrix Graphic */}
        <div className="relative z-10 pl-3 my-2 bg-emerald-950/70 border border-emerald-700/40 rounded-lg p-3 backdrop-blur-xs shadow-inner">
          <p className="text-[11px] sm:text-xs text-emerald-100/90 leading-snug line-clamp-3">
            The Complete Guide to 100+ Functions with 600 Hands-On Examples and 400 Real-World Scenarios.
          </p>
          <div className="mt-2.5 pt-2 border-t border-emerald-800/60 flex items-center justify-between text-[10px] font-mono text-emerald-300">
            <span>Microsoft 365</span>
            <span>·</span>
            <span>AI Copilot</span>
            <span>·</span>
            <span>REGEX</span>
          </div>
        </div>

        {/* Bottom Author Section */}
        <div className="relative z-10 pl-3 pt-2 border-t border-emerald-800/50 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">Author</p>
            <p className="text-sm font-bold text-white tracking-wide">Uweh Bariduanen</p>
            <p className="text-[9px] text-emerald-300/80 font-mono">ISBN: 9798259116948</p>
          </div>

          <div className="w-9 h-9 rounded-full bg-emerald-800/80 border border-emerald-600/50 flex items-center justify-center text-emerald-200 group-hover:scale-110 group-hover:bg-emerald-700 transition-all shadow-sm">
            <BookOpen className="w-4 h-4" />
          </div>
        </div>

        {/* Hover Hint Overlay Button */}
        <div className="absolute inset-x-4 bottom-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 backdrop-blur-md text-white py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg border border-emerald-500/30">
          <Eye className="w-3.5 h-3.5 text-emerald-400" />
          <span>Click to Look Inside (PDF Preview)</span>
        </div>
      </div>
    </div>
  );
};
