import React from 'react';
import { BOOK, COVER_IMAGE_URL } from '../data/bookData.ts';

export const BookCover: React.FC = () => {
  if (COVER_IMAGE_URL) {
    return (
      <img
        src={COVER_IMAGE_URL}
        alt={`Cover of ${BOOK.title} ${BOOK.year} by ${BOOK.author}`}
        className="w-56 sm:w-64 h-auto rounded-sm shadow-[6px_10px_0_var(--color-grid)]"
      />
    );
  }

  // Simple drawn cover, used until the real cover image is added.
  return (
    <div
      role="img"
      aria-label={`Cover of ${BOOK.title} ${BOOK.year} by ${BOOK.author}`}
      className="relative w-56 sm:w-64 aspect-[3/4] rounded-sm bg-ledger text-white p-6 flex flex-col justify-between overflow-hidden shadow-[6px_10px_0_var(--color-grid)]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      <p className="font-mono text-sm text-white/80">=MASTERY()</p>
      <div>
        <p className="text-3xl sm:text-4xl font-extrabold leading-[1.05] tracking-tight">
          Excel
          <br />
          Formula
          <br />
          Mastery
        </p>
        <p className="mt-2 font-mono text-sm text-white/80">{BOOK.year}</p>
      </div>
      <p className="text-sm font-semibold">{BOOK.author}</p>
    </div>
  );
};
