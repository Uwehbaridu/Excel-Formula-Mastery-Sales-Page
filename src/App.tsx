import React from 'react';
import { BOOK, CHAPTERS, NESTUGE_URL } from './data/bookData.ts';
import { BookCover } from './components/BookCover.tsx';
import { FormulaSheet } from './components/FormulaSheet.tsx';

const BuyButton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <a
    href={NESTUGE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center rounded-md bg-ledger px-6 py-3 text-base font-semibold text-white hover:bg-ledger-dark transition-colors ${className}`}
  >
    Buy on Nestuge
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-ledger-tint">
      <header className="border-b border-grid">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <span className="font-semibold">{BOOK.title}</span>
          <a
            href={NESTUGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ledger hover:text-ledger-dark underline underline-offset-4"
          >
            Buy on Nestuge
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 sm:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:gap-14 items-start">
            <div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.02]">
                Excel Formula Mastery {BOOK.year}
              </h1>
              <p className="mt-5 text-lg text-muted leading-relaxed max-w-xl">{BOOK.subtitle}</p>
              <p className="mt-2 text-base text-muted">By {BOOK.author}</p>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <BuyButton />
                <p className="text-2xl font-semibold">{BOOK.price}</p>
              </div>
              <p className="mt-3 text-sm text-muted">PDF ebook. Checkout and delivery are handled by Nestuge.</p>
            </div>

            <div className="justify-self-start md:justify-self-end pr-2 pb-2">
              <BookCover />
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 border-y border-grid divide-x divide-grid">
            {BOOK.facts.map((fact) => (
              <div key={fact.label} className="py-5 px-4 first:pl-0">
                <dt className="sr-only">{fact.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight">{fact.value}</dd>
                <dd className="text-sm text-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* One formula, shown as a worksheet */}
        <section className="border-t border-grid bg-sheet">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
            <h2 className="text-3xl font-extrabold tracking-tight max-w-xl">
              Every function comes with 6 worked examples and 4 business scenarios.
            </h2>
            <p className="mt-4 text-muted max-w-xl leading-relaxed">
              Instead of explaining syntax and moving on, the book shows each formula on a real
              worksheet, then applies it to the kind of problem you meet at work.
            </p>
            <div className="mt-10">
              <FormulaSheet />
            </div>
          </div>
        </section>

        {/* Contents */}
        <section id="contents" className="border-t border-grid">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
            <h2 className="text-3xl font-extrabold tracking-tight">What is inside</h2>
            <p className="mt-3 text-muted max-w-xl leading-relaxed">
              Twelve chapters, from SUMIFS to LAMBDA and the newest Microsoft 365 functions.
            </p>

            <ol className="mt-10 border-t border-grid">
              {CHAPTERS.map((chapter) => (
                <li
                  key={chapter.number}
                  className="grid grid-cols-[2rem_1fr_auto] gap-x-4 py-4 border-b border-grid"
                >
                  <span className="font-mono text-sm text-muted pt-1">{chapter.number}</span>
                  <div>
                    <h3 className="font-semibold leading-snug">{chapter.title}</h3>
                    <p className="mt-1 font-mono text-sm text-muted">{chapter.functions.join(', ')}</p>
                  </div>
                  <span className="font-mono text-sm text-muted pt-1">p. {chapter.page}</span>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-sm text-muted max-w-xl leading-relaxed">
              Covers Excel 2010 through Microsoft 365. Newer functions that need Microsoft 365 are marked
              with a star in the book, with older alternatives alongside.
            </p>
          </div>
        </section>

        {/* Author */}
        <section className="border-t border-grid bg-sheet">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 grid gap-6 md:grid-cols-[16rem_1fr]">
            <h2 className="text-3xl font-extrabold tracking-tight">About the author</h2>
            <div className="max-w-xl">
              <p className="text-xl font-semibold">{BOOK.author}</p>
              <p className="mt-1 text-muted">{BOOK.authorRole}</p>
              <p className="mt-1 text-muted">{BOOK.authorOrg}</p>
            </div>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="border-t border-grid">
          <div className="mx-auto max-w-5xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Get Excel Formula Mastery {BOOK.year}</h2>
              <p className="mt-2 text-muted">
                {BOOK.price} · {BOOK.pages}-page PDF
              </p>
            </div>
            <BuyButton />
          </div>
        </section>
      </main>

      <footer className="border-t border-grid">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 py-8 text-sm text-muted flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>
            © {BOOK.year} {BOOK.author}. {BOOK.edition}.
          </p>
          <p className="font-mono">ISBN {BOOK.isbn}</p>
        </div>
      </footer>
    </div>
  );
}
