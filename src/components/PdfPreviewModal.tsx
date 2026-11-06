import React, { useState } from 'react';
import { X, Download, ExternalLink, BookOpen, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface PdfPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const PdfPreviewModal: React.FC<PdfPreviewModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [activeTab, setActiveTab] = useState<'reader' | 'excerpts'>('reader');
  const [selectedExcerpt, setSelectedExcerpt] = useState<number>(0);

  if (!isOpen) return null;

  const excerpts = [
    {
      title: "Cover & Title Page",
      page: "Page 1",
      previewText: "Excel Formula Mastery 2026: The Complete Guide to 100+ Functions with 600 Hands-On Examples and 400 Real-World Scenarios for Microsoft 365 and AI Copilot. Author: Uweh Bariduanen.",
      points: [
        "First Edition (07-2026)",
        "ISBN: 9798259116948",
        "Author: Uweh Bariduanen (Indorama / Data Edge Academy)"
      ]
    },
    {
      title: "Preface: Hands-On Philosophy",
      page: "Page 7",
      previewText: "This book was created with one clear goal: to make Excel simple, practical, and accessible for everyone especially beginners and intermediate users who want to move beyond basic usage and truly understand how Excel works. Rather than overwhelming you with theory, this book focuses on hands-on learning: Clear explanations, step-by-step examples you can follow easily, and real-life scenarios.",
      points: [
        "Structured for students, entrepreneurs, job seekers, and corporate professionals",
        "Zero fluff or pure theory — every formula has 6 examples + 4 scenarios",
        "Confidence to automate tasks and improve workplace productivity"
      ]
    },
    {
      title: "Chapter 5: REGEXEXTRACT & Text Cleaning",
      page: "Page 80",
      previewText: "Syntax: =REGEXEXTRACT(text, regex, [instance_num])\n\nExample 1: Extract an email address from a block of text\nContext: Column A holds free-text CRM notes like 'Spoke to Jane at jane.smith@acme.com about the Q2 order.'\nFormula: =REGEXEXTRACT(A2, \"[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\\.[A-Za-z]{2,}\")\nResult: 'jane.smith@acme.com'\n\nWhat this means: The regex pattern describes what an email looks like. REGEXEXTRACT finds the first match and returns it — no matter where in the text it appears. This would take 10+ nested formulas to replicate with legacy MID and FIND.",
      points: [
        "Replaces fragile combinations of MID, FIND, and SEARCH",
        "Includes REGEXEXTRACT, REGEXREPLACE, and REGEXTEST",
        "Tested for GDPR scrubbing, phone cleaning, and CRM normalization"
      ]
    },
    {
      title: "Chapter 7: XLOOKUP vs VLOOKUP",
      page: "Page 106",
      previewText: "Microsoft 365 only: XLOOKUP is the modern, superior replacement for VLOOKUP, HLOOKUP, and INDEX+MATCH combined. It can look in any direction (including looking left), return entire arrays without multi-column formula copying, has native if_not_found error handling, and eliminates fragile column-index counting.",
      points: [
        "Bi-directional matching: Look left without helper columns",
        "Built-in 'Not Found' error handling without nested IFERROR",
        "Multi-column spill arrays for instant master-detail views"
      ]
    },
    {
      title: "Chapter 11: GROUPBY & PIVOTBY",
      page: "Page 168",
      previewText: "Advanced Summary and Grouping functions are the crown jewels of Microsoft 365's 2025/2026 updates. For the first time in Excel history, you can create full PivotTable-style summary reports directly inside formulas with zero manual Refresh buttons.\n\n=GROUPBY(Table1[Region], Table1[Sales], 1)\nResult: Live two-column summary of total sales per region, auto-updating as transactions arrive.",
      points: [
        "Replaces 90% of traditional PivotTables with live, self-updating formulas",
        "Two-dimensional crosstabs with PIVOTBY",
        "Combine with PERCENTOF for automated market share analysis"
      ]
    },
    {
      title: "Appendix B: Real-World Challenge Workbooks",
      page: "Page 193",
      previewText: "Provides structured datasets and challenges based on the Real-World Scenarios in the book. Part 1: Inventory & Sales Variance (ABS, CEILING.MATH, AVERAGEIF). Part 2: CRM Data Normalization (PROPER, TRIM, CLEAN, TEXTAFTER, AND). Part 3: Accounts Receivable Aging (TODAY, XLOOKUP, PMT). Part 4: Executive Dashboard (UNIQUE, FILTER, PIVOTBY). Part 5: Live Portfolio Tracking (FIELDVALUE, IMAGE).",
      points: [
        "5 multi-stage corporate challenge scenarios",
        "Exact target formulas provided for self-auditing",
        "Build portfolio-ready spreadsheets for job interviews"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-emerald-700 flex items-center justify-center text-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                Look Inside: Excel Formula Mastery 2026
              </h3>
              <p className="text-[11px] text-emerald-400 font-mono">
                By Uweh Bariduanen · 196 Total Pages · ₦25,000 Complete Edition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={BOOK_METADATA.pdfAssetPath}
              download="Excel_Formula_Mastery_Sample.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle Sub-bar */}
        <div className="px-5 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('reader')}
              className={`px-3 py-1.5 font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'reader'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Direct PDF Reader (All 196 Pages)
            </button>
            <button
              onClick={() => setActiveTab('excerpts')}
              className={`px-3 py-1.5 font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'excerpts'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Key Chapter Excerpts
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-500 text-xs">
            <span>Official Training Material PDF</span>
            <a 
              href={BOOK_METADATA.pdfAssetPath} 
              target="_blank" 
              rel="noreferrer"
              className="text-emerald-700 hover:underline flex items-center gap-0.5"
            >
              <span>Full Screen</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="flex-1 overflow-hidden bg-slate-50 relative">
          {activeTab === 'reader' ? (
            <div className="w-full h-full flex flex-col">
              <iframe
                src={`${BOOK_METADATA.pdfAssetPath}#view=FitH`}
                title="Excel Formula Mastery PDF Preview"
                className="w-full flex-1 border-0"
              />
            </div>
          ) : (
            <div className="w-full h-full p-4 sm:p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Excerpt Selector Sidebar (4 cols) */}
                <div className="md:col-span-4 space-y-2">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                    Curated Sample Sections
                  </span>
                  {excerpts.map((ex, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedExcerpt(idx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                        selectedExcerpt === idx
                          ? 'bg-emerald-50 border-emerald-300 shadow-xs text-slate-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] text-emerald-700 font-mono mb-1">
                        <span>{ex.page}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-sm font-bold text-slate-900">{ex.title}</div>
                    </button>
                  ))}
                </div>

                {/* Excerpt Viewer (8 cols) */}
                <div className="md:col-span-8 bg-white rounded-xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono text-emerald-700 font-semibold">
                        {excerpts[selectedExcerpt].page}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                        {excerpts[selectedExcerpt].title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      Verified Excerpt
                    </span>
                  </div>

                  {/* Text Quote */}
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 font-mono text-xs text-slate-800 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                    {excerpts[selectedExcerpt].previewText}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                      Key Takeaways:
                    </span>
                    {excerpts[selectedExcerpt].points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-slate-900 tabular-nums">₦25,000</span>
            <span className="text-xs text-slate-500">
              Includes full 196-page PDF + 600 Excel exercise workbooks
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="flex-1 sm:flex-initial py-2.5 px-5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              Buy Full Edition — ₦25,000
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
