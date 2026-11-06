import React, { useState } from 'react';
import { FORMULA_PLAYGROUND_ITEMS } from '../data/bookData.ts';
import { Play, Sparkles, HelpCircle, Check, ArrowRight } from 'lucide-react';

interface InteractiveFormulaLabProps {
  onOpenPreview: () => void;
}

export const InteractiveFormulaLab: React.FC<InteractiveFormulaLabProps> = ({ onOpenPreview }) => {
  const [activeTab, setActiveTab] = useState(0);
  const current = FORMULA_PLAYGROUND_ITEMS[activeTab];

  // Interactive state for PMT loan simulator
  const [loanAmount, setLoanAmount] = useState(15000000);
  const [interestRate, setInterestRate] = useState(18);
  const [loanTenure, setLoanTenure] = useState(36);

  // Dynamic PMT calculation
  const monthlyRate = interestRate / 100 / 12;
  const pmtValue =
    monthlyRate > 0
      ? (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTenure))
      : loanAmount / loanTenure;

  // Interactive state for XLOOKUP
  const [selectedEmpId, setSelectedEmpId] = useState('EMP-102');

  const getEmpLookupResult = (id: string) => {
    const map: Record<string, { name: string; dept: string; salary: string }> = {
      'EMP-101': { name: 'Amina Bello', dept: 'Finance & Accounts', salary: '₦650,000' },
      'EMP-102': { name: 'Chidi Okonkwo', dept: 'Data Analytics', salary: '₦820,000' },
      'EMP-103': { name: 'Folake Adebayo', dept: 'Supply Chain Logistics', salary: '₦540,000' },
      'EMP-104': { name: 'Tariq Ibrahim', dept: 'Engineering & Maintenance', salary: '₦910,000' },
    };
    return map[id] || { name: 'Unknown', dept: 'Not Found', salary: '₦0' };
  };

  return (
    <section id="formula-lab" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <span>Interactive Formula Lab</span>
            <span aria-hidden="true">·</span>
            <span>Real Functions from the Book</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            See the Power of Modern Excel in Action
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            In <span className="text-emerald-400 font-medium">Excel Formula Mastery 2026</span>, every single formula is explained with real corporate data, syntax breakdown, and the exact business problem it solves. Test a few flagship functions below:
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-slate-950/70 border border-slate-800 rounded-xl">
          {FORMULA_PLAYGROUND_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === idx
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Interactive Lab Workspace Container */}
        <div className="mt-6 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl overflow-hidden">
          
          {/* Excel-style Formula Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center gap-3">
            <div className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded text-xs font-mono font-semibold text-emerald-400 w-16 text-center">
              fx
            </div>
            <div className="flex-1 font-mono text-xs sm:text-sm text-emerald-300 bg-slate-950 px-3 py-1.5 rounded border border-slate-800 select-all overflow-x-auto whitespace-nowrap">
              {current.id === 'pmt'
                ? `=PMT(${interestRate}%/12, ${loanTenure}, ${loanAmount})`
                : current.id === 'xlookup'
                ? `=XLOOKUP("${selectedEmpId}", A2:A5, C2:C5, "Not Found")`
                : current.formula}
            </div>
            <div className="text-xs text-slate-400 font-mono hidden sm:block">
              {current.chapter}
            </div>
          </div>

          {/* Main Lab Content Grid */}
          <div className="p-5 sm:p-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Parameters & Data Table (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-normal">
                    [{current.searchKey}]
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {current.description}
                </p>
              </div>

              {/* Specific interactive control per function */}
              {current.id === 'xlookup' && (
                <div className="p-3.5 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Choose Employee ID to Lookup (Cell E2):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['EMP-101', 'EMP-102', 'EMP-103', 'EMP-104'].map((id) => (
                      <button
                        key={id}
                        onClick={() => setSelectedEmpId(id)}
                        className={`px-3 py-1 text-xs font-mono rounded border transition-colors cursor-pointer ${
                          selectedEmpId === id
                            ? 'bg-emerald-700 border-emerald-500 text-white'
                            : 'bg-slate-950 border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {current.id === 'pmt' && (
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 space-y-3">
                  <div className="text-xs font-semibold text-slate-300">
                    Live Loan Parameters:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">Equipment Amount (₦)</span>
                      <select
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                      >
                        <option value={5000000}>₦5,000,000</option>
                        <option value={15000000}>₦15,000,000</option>
                        <option value={25000000}>₦25,000,000</option>
                        <option value={50000000}>₦50,000,000</option>
                      </select>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">Interest Rate (% p.a.)</span>
                      <select
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                      >
                        <option value={12}>12% Commercial</option>
                        <option value={18}>18% Standard</option>
                        <option value={24}>24% SME Loan</option>
                      </select>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">Tenure (Months)</span>
                      <select
                        value={loanTenure}
                        onChange={(e) => setLoanTenure(Number(e.target.value))}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
                      >
                        <option value={12}>12 Months (1 yr)</option>
                        <option value={24}>24 Months (2 yrs)</option>
                        <option value={36}>36 Months (3 yrs)</option>
                        <option value={60}>60 Months (5 yrs)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Sample Data Table */}
              <div className="overflow-x-auto rounded-lg border border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/90 text-slate-400 font-mono text-[11px] border-b border-slate-800">
                    <tr>
                      {current.tableHeaders.map((h, i) => (
                        <th key={i} className="py-2 px-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-850 bg-slate-950">
                    {current.id === 'pmt' ? (
                      <tr className="hover:bg-slate-900/40">
                        <td className="py-2.5 px-3 font-mono text-slate-300">₦{loanAmount.toLocaleString()}</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">{interestRate}%</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">{loanTenure} mo</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-emerald-400">
                          -₦{Math.round(pmtValue).toLocaleString()}/mo
                        </td>
                      </tr>
                    ) : (
                      current.sampleData.map((row, rIdx) => {
                        const isMatch = current.id === 'xlookup' && row[0] === selectedEmpId;
                        return (
                          <tr
                            key={rIdx}
                            className={`transition-colors ${
                              isMatch
                                ? 'bg-emerald-950/60 font-medium text-emerald-200'
                                : 'hover:bg-slate-900/40 text-slate-300'
                            }`}
                          >
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-2.5 px-3 font-mono text-xs">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Live Result & Book Insight Card (5 cols) */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Formula Output
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                  Calculated Instantly
                </span>
              </div>

              {/* Display Result */}
              <div className="p-4 bg-slate-950 rounded-lg border border-slate-800/80">
                <span className="text-[11px] text-slate-400 block mb-1">Returned Value:</span>
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                  {current.id === 'pmt'
                    ? `-₦${Math.round(pmtValue).toLocaleString()} / month`
                    : current.id === 'xlookup'
                    ? getEmpLookupResult(selectedEmpId).dept
                    : current.result}
                </div>
              </div>

              {/* Author's Explanation from the Book */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Author Note by Uweh Bariduanen:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-950/50 p-3 rounded-lg border border-slate-800/50">
                  "{current.explanation}"
                </p>
              </div>

              {/* Learn 600 more */}
              <div className="pt-2">
                <button
                  onClick={onOpenPreview}
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore this formula in PDF preview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
