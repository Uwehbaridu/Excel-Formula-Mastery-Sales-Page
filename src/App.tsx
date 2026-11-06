import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { InteractiveFormulaLab } from './components/InteractiveFormulaLab.tsx';
import { CurriculumSection } from './components/CurriculumSection.tsx';
import { AuthorSection } from './components/AuthorSection.tsx';
import { PricingPackageSection } from './components/PricingPackageSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { PdfPreviewModal } from './components/PdfPreviewModal.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation */}
      <Navbar
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenPreview={() => setIsPreviewOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with 3D Book Mockup & Contiguous Purchase Card */}
        <Hero
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Live Interactive Formula Lab */}
        <InteractiveFormulaLab
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Complete Curriculum & Chapter Explorer */}
        <CurriculumSection
          onOpenPreview={() => setIsPreviewOpen(true)}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Meet Author Uweh Bariduanen */}
        <AuthorSection
          onOpenPreview={() => setIsPreviewOpen(true)}
        />

        {/* Value Package & Investment (₦25,000) */}
        <PricingPackageSection
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />

        {/* Testimonials & Industry Results */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={() => setIsCheckoutOpen(true)}
        onOpenPreview={() => setIsPreviewOpen(true)}
      />

      {/* Sticky Mobile Buy Bar */}
      <MobileBottomBar
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Interactive PDF Preview Modal */}
      <PdfPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        onOpenCheckout={() => {
          setIsPreviewOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Secure Order & Download Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
}
