import React from 'react';
import { SHEET_EXAMPLE } from '../data/bookData.ts';

// Columns whose cells the formula reads from (A and C) plus the lookup cell (E).
const READ_COLUMNS = new Set([0, 2, 4]);
const RESULT_COLUMN = 5;

export const FormulaSheet: React.FC = () => {
  const { nameBox, formula, columns, header, rows } = SHEET_EXAMPLE;

  return (
    <figure className="w-full">
      <div className="border border-grid bg-sheet rounded-md overflow-hidden shadow-[0_1px_0_var(--color-grid)]">
        {/* Formula bar */}
        <div className="flex items-stretch border-b border-grid text-sm">
          <div className="w-14 shrink-0 px-3 py-2 border-r border-grid font-mono text-muted text-center">
            {nameBox}
          </div>
          <div className="px-3 py-2 border-r border-grid font-mono italic text-muted" aria-hidden="true">
            fx
          </div>
          <div className="px-3 py-2 font-mono text-ink overflow-x-auto whitespace-nowrap">{formula}</div>
        </div>

        {/* Grid */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="bg-paper text-muted">
                <th className="w-8 border-b border-r border-grid-soft" aria-hidden="true" />
                {columns.map((letter) => (
                  <th
                    key={letter}
                    scope="col"
                    className="py-1 font-mono text-xs font-normal border-b border-r border-grid-soft last:border-r-0"
                  >
                    {letter}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="bg-paper text-muted font-mono text-xs font-normal border-b border-r border-grid-soft">
                  1
                </th>
                {header.map((label) => (
                  <td key={label} className="px-3 py-2 font-semibold border-b border-r border-grid-soft last:border-r-0">
                    {label}
                  </td>
                ))}
              </tr>
              {rows.map((row, r) => (
                <tr key={r}>
                  <th scope="row" className="bg-paper text-muted font-mono text-xs font-normal border-b border-r border-grid-soft">
                    {r + 2}
                  </th>
                  {row.map((cell, c) => {
                    const isResult = r === 0 && c === RESULT_COLUMN;
                    const isRead = READ_COLUMNS.has(c) && (c !== 4 || r === 0);
                    return (
                      <td
                        key={c}
                        className={[
                          'px-3 py-2 border-b border-r border-grid-soft last:border-r-0 whitespace-nowrap',
                          isRead ? 'bg-ledger-tint' : '',
                          isResult ? 'outline outline-2 -outline-offset-2 outline-ledger font-semibold' : '',
                          r === rows.length - 1 ? 'border-b-0' : '',
                        ].join(' ')}
                      >
                        {cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted max-w-prose">
        A formula from Chapter 7. The shaded cells are what it reads; the outlined cell is the answer it returns.
      </figcaption>
    </figure>
  );
};
