// Where the "Buy on Nestuge" buttons send people.
export const NESTUGE_URL = 'https://nestuge.com/vwl0vk3tr';

// Optional: path or URL of the real book cover image (e.g. '/cover.jpg' after
// adding the file to /public). When empty, a simple drawn cover is shown.
export const COVER_IMAGE_URL = '';

export const BOOK = {
  title: 'Excel Formula Mastery',
  year: '2026',
  subtitle:
    'The complete guide to 100+ functions, with 600 hands-on examples and 400 real-world scenarios for Microsoft 365 and AI Copilot.',
  author: 'Uweh Bariduanen',
  authorRole: 'Data analyst and professional Excel trainer',
  authorOrg: 'Indorama Eleme Fertilizers & Chemicals · Training Director at Data Edge Academy',
  price: '₦25,000',
  isbn: '9798259116948',
  edition: 'First edition, July 2026',
  pages: 196,
  facts: [
    { value: '196', label: 'pages' },
    { value: '100+', label: 'functions' },
    { value: '600', label: 'worked examples' },
    { value: '400', label: 'business scenarios' },
  ],
};

export interface Chapter {
  number: number;
  title: string;
  page: number;
  functions: string[];
}

export const CHAPTERS: Chapter[] = [
  { number: 1, title: 'Introduction to Excel Functions & Best Practices', page: 1, functions: ['Table references', 'Formula best practices', 'Dynamic array principles'] },
  { number: 2, title: 'Mathematical and Trigonometric Functions', page: 2, functions: ['SUM', 'SUMIF', 'SUMIFS', 'ROUND', 'ABS', 'CEILING.MATH'] },
  { number: 3, title: 'Statistical Functions', page: 15, functions: ['AVERAGEIFS', 'COUNTIFS', 'CORREL', 'STDEV.S', 'VAR.P'] },
  { number: 4, title: 'Logical Functions', page: 33, functions: ['IF', 'IFS', 'AND', 'IFERROR'] },
  { number: 5, title: 'Text Functions & Modern REGEX', page: 42, functions: ['TRIM', 'TEXTJOIN', 'TEXTSPLIT', 'REGEXEXTRACT', 'REGEXREPLACE', 'REGEXTEST'] },
  { number: 6, title: 'Date and Time Functions', page: 77, functions: ['DATE', 'TODAY', 'NOW', 'NETWORKDAYS'] },
  { number: 7, title: 'Lookup and Reference Functions', page: 87, functions: ['XLOOKUP', 'XMATCH', 'INDEX', 'MATCH', 'VLOOKUP', 'CHOOSECOLS'] },
  { number: 8, title: 'Financial Functions', page: 105, functions: ['PMT', 'PV', 'FV', 'IRR', 'NPV', 'ACCRINT'] },
  { number: 9, title: 'Dynamic Array Functions', page: 118, functions: ['FILTER', 'SORT', 'UNIQUE', 'SEQUENCE', 'HSTACK', 'VSTACK'] },
  { number: 10, title: 'LAMBDA & Advanced Array Helper Functions', page: 140, functions: ['LAMBDA', 'BYROW', 'MAP', 'SCAN', 'REDUCE', 'MAKEARRAY'] },
  { number: 11, title: 'Advanced Summary and Grouping Functions', page: 159, functions: ['GROUPBY', 'PIVOTBY', 'PERCENTOF'] },
  { number: 12, title: 'Web, Media, and AI Functions', page: 171, functions: ['IMAGE', 'STOCKHISTORY', 'FIELDVALUE', 'COPILOT'] },
];

// One formula from Chapter 7, shown as a small worksheet in the hero.
export const SHEET_EXAMPLE = {
  nameBox: 'F2',
  formula: '=XLOOKUP(E2, A2:A5, C2:C5, "Not found")',
  columns: ['A', 'B', 'C', 'D', 'E', 'F'],
  header: ['ID', 'Employee', 'Department', 'Salary', 'Look up', 'Result'],
  rows: [
    ['EMP-101', 'Amina Bello', 'Finance', '₦650,000', 'EMP-102', 'Data Analytics'],
    ['EMP-102', 'Chidi Okonkwo', 'Data Analytics', '₦820,000', '', ''],
    ['EMP-103', 'Folake Adebayo', 'Supply Chain', '₦540,000', '', ''],
    ['EMP-104', 'Tariq Ibrahim', 'Engineering', '₦910,000', '', ''],
  ],
};
