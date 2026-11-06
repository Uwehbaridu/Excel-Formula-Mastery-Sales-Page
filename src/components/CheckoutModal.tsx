import React, { useState } from 'react';
import { X, Check, ShieldCheck, Download, CreditCard, Building2, Smartphone, ArrowRight, CheckCircle2, Copy, FileSpreadsheet } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData.ts';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'details' | 'payment' | 'processing' | 'confirmed'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer' | 'ussd'>('card');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [copiedAccount, setCopiedAccount] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const errs: { name?: string; email?: string; phone?: string } = {};
    if (!fullName.trim()) errs.name = 'Please enter your full name';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required for download delivery';
    if (!phone.trim()) errs.phone = 'Phone number is required for transaction SMS';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('payment');
    }
  };

  const handleConfirmPayment = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('confirmed');
    }, 1800);
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('0124893712');
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const resetAndClose = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                {step === 'confirmed' ? 'Order Confirmed!' : 'Secure Order Checkout'}
              </h3>
              <p className="text-[11px] text-emerald-400 font-mono">
                Excel Formula Mastery 2026 · {BOOK_METADATA.priceFormatted}
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Customer Details */}
        {step === 'details' && (
          <form onSubmit={handleProceedToPayment} className="p-6 sm:p-8 space-y-5">
            
            {/* Order Summary Strip */}
            <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                <span className="font-semibold text-slate-900">Digital Edition + 600 Datasets</span>
              </div>
              <span className="font-bold text-emerald-800 font-mono text-sm">
                {BOOK_METADATA.priceFormatted}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ngozi Adeleke"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-slate-900"
                />
                {errors.name && <p className="text-xs text-rose-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address (For Instant Download Link)
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-slate-900"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
                <p className="text-[11px] text-slate-500 mt-1">Your 196-page PDF download link will be dispatched here immediately.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0803 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white text-slate-900"
                />
                {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Continue to Payment Method</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted & Bank-Grade Security</span>
            </div>
          </form>
        )}

        {/* Step 2: Payment Selection */}
        {step === 'payment' && (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Choose Payment Method
              </span>
              <button
                onClick={() => setStep('details')}
                className="text-xs text-emerald-700 font-semibold hover:underline"
              >
                Edit Details
              </button>
            </div>

            {/* Methods selector */}
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'card'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <CreditCard className="w-5 h-5 text-emerald-700" />
                <span className="text-xs">Debit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('transfer')}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'transfer'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Building2 className="w-5 h-5 text-emerald-700" />
                <span className="text-xs">Bank Transfer</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('ussd')}
                className={`p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                  paymentMethod === 'ussd'
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Smartphone className="w-5 h-5 text-emerald-700" />
                <span className="text-xs">USSD / QR</span>
              </button>
            </div>

            {/* Card Form Mockup */}
            {paymentMethod === 'card' && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold">Pay with Paystack Secured Gateway</span>
                  <span className="font-mono text-[11px] text-emerald-700">Mastercard / Visa / Verve</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payer Name:</span>
                    <span className="font-semibold text-slate-900">{fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Payer Email:</span>
                    <span className="font-mono text-slate-900">{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Amount to Charge:</span>
                    <span className="font-bold text-emerald-800 font-mono text-sm">₦25,000.00</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bank Transfer Instructions */}
            {paymentMethod === 'transfer' && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="text-xs font-semibold text-slate-700">
                  Transfer exactly ₦25,000 to this dedicated account:
                </div>
                <div className="p-3.5 bg-white rounded-lg border border-slate-300 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Bank Name:</span>
                    <span className="font-bold text-slate-900">Wema Bank / ALAT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Account Number:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-slate-900 text-sm">0124893712</span>
                      <button
                        type="button"
                        onClick={handleCopyAccount}
                        className="p-1 text-emerald-700 hover:bg-emerald-50 rounded"
                        title="Copy account number"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  {copiedAccount && (
                    <p className="text-[10px] text-emerald-600 font-semibold text-right">Account copied!</p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Beneficiary:</span>
                    <span className="font-semibold text-slate-900">Data Edge Academy - Book Sales</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                    <span className="text-slate-500">Amount:</span>
                    <span className="font-mono font-bold text-emerald-800 text-sm">₦25,000.00</span>
                  </div>
                </div>
              </div>
            )}

            {/* USSD */}
            {paymentMethod === 'ussd' && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <p className="text-slate-700 font-semibold">Select your bank for USSD code string:</p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-center text-sm font-bold text-slate-900">
                  *737*2*25000*0124893712#
                </div>
                <p className="text-[11px] text-slate-500 text-center">Dial on your registered bank phone number to authenticate.</p>
              </div>
            )}

            <button
              type="button"
              onClick={handleConfirmPayment}
              className="w-full py-3.5 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>
                {paymentMethod === 'transfer' ? 'I Have Completed Transfer (₦25,000)' : 'Pay ₦25,000 Now'}
              </span>
            </button>
          </div>
        )}

        {/* Step 3: Processing Animation */}
        {step === 'processing' && (
          <div className="p-12 text-center space-y-4">
            <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <h4 className="text-base font-bold text-slate-900">Verifying Transaction...</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Connecting with settlement gateway and generating your personal license key for Excel Formula Mastery 2026.
            </p>
          </div>
        )}

        {/* Step 4: Order Confirmed & Instant Download */}
        {step === 'confirmed' && (
          <div className="p-6 sm:p-8 space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-xl font-extrabold text-slate-900">
                Payment Successful!
              </h3>
              <p className="text-xs text-slate-600">
                Thank you, <strong className="text-slate-900">{fullName || 'Valued Reader'}</strong>. Your order is confirmed and your digital package is unlocked.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-mono font-bold text-slate-900">EFM-2026-8941</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivered To:</span>
                <span className="font-mono text-slate-900">{email || 'your email'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Paid:</span>
                <span className="font-mono font-bold text-emerald-800">₦25,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">License Status:</span>
                <span className="font-semibold text-emerald-700">Verified & Active</span>
              </div>
            </div>

            {/* Instant Download Action */}
            <div className="space-y-2.5 pt-1">
              <a
                href={BOOK_METADATA.pdfAssetPath}
                download="Excel_Formula_Mastery_2026_Uweh_Bariduanen.pdf"
                className="w-full py-3.5 px-6 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete 196-Page PDF</span>
              </a>

              <a
                href={BOOK_METADATA.pdfAssetPath}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-emerald-800 bg-white border border-slate-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open in New Browser Tab</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={resetAndClose}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                Close this window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
