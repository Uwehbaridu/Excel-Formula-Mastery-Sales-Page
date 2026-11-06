import React from 'react';
import { PACKAGE_INCLUSIONS, BOOK_METADATA } from '../data/bookData.ts';
import { Check, ShieldCheck, Download, Sparkles, CreditCard, Building } from 'lucide-react';

interface PricingPackageSectionProps {
  onOpenCheckout: () => void;
}

export const PricingPackageSection: React.FC<PricingPackageSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Complete Practical Bundle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Invest in Your Excel Mastery Today
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            One comprehensive package. No subscriptions or hidden fees. Get lifetime access to the 196-page playbook and all companion spreadsheets.
          </p>
        </div>

        {/* Pricing Card Box */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl border-2 border-emerald-600/30 shadow-xl overflow-hidden">
          
          {/* Top Banner on Card */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Official Digital Bundle
              </span>
              <span className="text-slate-300 text-xs">·</span>
              <span className="text-xs text-slate-200">Instant PDF & XLSX Delivery</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-700/80 border border-emerald-500/40 text-emerald-100">
              Save ₦40,000 Today
            </span>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Inclusions List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                Everything Included in Your Download:
              </h3>

              <div className="space-y-3.5">
                {PACKAGE_INCLUSIONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-slate-900">{item.title}</span>
                        <span className="text-[11px] font-mono text-emerald-700 font-medium">({item.format})</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Price Lockup & Checkout Button (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-6 border border-slate-200 text-center flex flex-col justify-between h-full">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Total Bundle Investment
                </p>
                <div className="mt-2 flex items-baseline justify-center gap-2.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tabular-nums">
                    {BOOK_METADATA.priceFormatted}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <span className="line-through tabular-nums">{BOOK_METADATA.originalPriceFormatted}</span>
                  <span className="font-semibold text-emerald-700">62% Off Launch Discount</span>
                </div>

                <div className="mt-3 text-[11px] text-slate-500">
                  Single one-time payment in Nigerian Naira (₦). No recurring fees.
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3.5 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Get Instant Access — ₦25,000</span>
                </button>

                {/* Accepted Payment Badges */}
                <div className="text-[11px] text-slate-500 space-y-1">
                  <p className="font-medium text-slate-700">Accepted Nigerian Payment Methods:</p>
                  <div className="flex items-center justify-center gap-3 text-slate-600 pt-1">
                    <span className="flex items-center gap-1">
                      <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                      <span>Debit Cards (Mastercard / Visa / Verve)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-slate-600">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>Instant Bank Transfer</span>
                    </span>
                    <span>·</span>
                    <span>USSD</span>
                  </div>
                </div>

                {/* Guarantee */}
                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-center gap-1.5 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-medium">100% 14-Day Money-Back Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
