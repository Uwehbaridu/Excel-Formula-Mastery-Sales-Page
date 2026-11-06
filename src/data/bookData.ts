export interface ChapterItem {
  number: number;
  title: string;
  page: number;
  category: 'core' | 'statistical' | 'logical' | 'text' | 'date' | 'lookup' | 'financial' | 'arrays' | 'lambda' | 'ai';
  functions: string[];
  description: string;
  highlight: string;
}

export const BOOK_METADATA = {
  title: "Excel Formula Mastery",
  fullTitle: "Excel Formula Mastery 2026",
  subtitle: "The Complete Guide to 100+ Functions with 600 Hands-On Examples and 400 Real-World Scenarios for Microsoft 365 and AI Copilot",
  author: "Uweh Bariduanen",
  authorTitle: "Seasoned Data Analyst & Professional Excel Trainer",
  authorOrg: "Indorama Eleme Fertilizers & Chemicals | Training Director at Data Edge Academy",
  priceNaira: 25000,
  priceFormatted: "₦25,000",
  originalPriceNaira: 65000,
  originalPriceFormatted: "₦65,000",
  discountPercent: 62,
  isbn: "9798259116948",
  firstEdition: "07-2026",
  totalPages: 196,
  pdfAssetPath: "/assets/aistudio/New_Excel_Training_Material_Updated_93a310ac.pdf",
  totalFunctions: "100+",
  totalExamples: "600+",
  totalScenarios: "400+",
};

export const CHAPTERS: ChapterItem[] = [
  {
    number: 1,
    title: "Introduction to Excel Functions & Best Practices",
    page: 1,
    category: "core",
    functions: ["Table References (Ctrl+T)", "Formula Best Practices", "Dynamic Array Principles"],
    description: "Lays the rock-solid foundation: why classic formula habits cause errors, how structured references revolutionize calculations, and key Microsoft 365 prerequisite configurations.",
    highlight: "Why this book matters: every function includes 6 practical examples and 4 real business scenarios."
  },
  {
    number: 2,
    title: "Mathematical and Trigonometric Functions",
    page: 2,
    category: "core",
    functions: ["ABS", "CEILING.MATH", "RAND", "ROUND", "SUM", "SUMIF", "SUMIFS"],
    description: "The mathematical backbone for budgeting, costing, and forecasting. Includes multi-criteria summing, negative numbers management, and psychological pricing rounding.",
    highlight: "Master SUMIFS with date bounds, partial text wildcards (*Apple*), and dynamic cell criteria."
  },
  {
    number: 3,
    title: "Statistical Functions",
    page: 15,
    category: "statistical",
    functions: ["AVERAGE", "AVERAGEIF", "AVERAGEIFS", "CORREL", "COUNT", "COUNTA", "COUNTIF", "COUNTIFS", "MAX", "MIN", "STDEV.S", "STDEV.P", "VAR.S", "VAR.P"],
    description: "Transform raw transactions into decisive executive metrics. Central tendency, dispersion, correlation between marketing spend and revenue, and quality control tolerances.",
    highlight: "Learn when to pick STDEV.S (sample) vs STDEV.P (population) to eliminate costly statistical errors."
  },
  {
    number: 4,
    title: "Logical Functions",
    page: 33,
    category: "logical",
    functions: ["AND", "IF", "IFS", "IFERROR"],
    description: "The decision-makers in Excel. Replace messy nested IF statements with modern IFS, create error-proof dashboards with IFERROR, and implement multi-gate business approval logic.",
    highlight: "How 4 logical functions power 80% of all advanced enterprise workflows."
  },
  {
    number: 5,
    title: "Text Functions & Modern REGEX",
    page: 42,
    category: "text",
    functions: ["CLEAN", "TRIM", "UPPER", "LOWER", "PROPER", "LEFT", "RIGHT", "MID", "LEN", "FIND", "SEARCH", "SUBSTITUTE", "CONCAT", "TEXTJOIN", "TEXTSPLIT ★", "TEXTAFTER ★", "TEXTBEFORE ★", "VALUE", "VALUETOTEXT ★", "ARRAYTOTEXT ★", "CHAR", "REGEXEXTRACT ★", "REGEXREPLACE ★", "REGEXTEST ★"],
    description: "Solve 70% of real-world Excel work: messy CSV imports, CRM clean-up, phone and email extraction, plus Microsoft 365's new built-in regular expression powerhouses.",
    highlight: "Parse complex phone patterns and emails with REGEXEXTRACT without writing a single line of VBA."
  },
  {
    number: 6,
    title: "Date and Time Functions",
    page: 77,
    category: "date",
    functions: ["DATE", "TODAY", "NOW", "NETWORKDAYS"],
    description: "Automate aging reports, SLA tracking, payroll periods, and self-refreshing dashboards that adjust every morning the spreadsheet is opened without manual intervention.",
    highlight: "Build working-day-aware SLA and debt aging trackers with holiday calendar exclusions."
  },
  {
    number: 7,
    title: "Lookup and Reference Functions",
    page: 87,
    category: "lookup",
    functions: ["CHOOSE", "CHOOSECOLS ★", "CHOOSEROWS ★", "INDEX", "MATCH", "VLOOKUP", "XLOOKUP ★", "XMATCH ★", "INDEX+MATCH", "FIELDVALUE ★"],
    description: "Retire brittle VLOOKUPs forever. Master bidirectional lookups, multi-column spills, bottom-up searches with XMATCH, and two-way matrix lookups.",
    highlight: "XLOOKUP replaces VLOOKUP, HLOOKUP, and INDEX+MATCH with native error handling."
  },
  {
    number: 8,
    title: "Financial Functions",
    page: 105,
    category: "financial",
    functions: ["ACCRINT", "PMT", "PV", "FV", "IRR", "NPV"],
    description: "The 5 pillars of financial modeling taught in top MBA programs: loan amortization, retirement drawdown planning, compound wealth projection, and project hurdle rate decisions.",
    highlight: "Avoid the #1 financial model bug: mastering cash inflow/outflow sign conventions and NPV period-0 placement."
  },
  {
    number: 9,
    title: "Dynamic Array Functions",
    page: 118,
    category: "arrays",
    functions: ["FILTER", "SORT", "SORTBY", "UNIQUE", "SEQUENCE", "RANDARRAY", "DROP", "EXPAND", "TAKE", "TOROW", "TOCOL", "HSTACK", "VSTACK", "WRAPROWS", "WRAPCOLS"],
    description: "The biggest revolution in modern Excel. Eliminate 80% of repetitive formula dragging. Build self-updating live query views, reshaped grid calendars, and stacked consolidation tables.",
    highlight: "Chain FILTER + SORT + VSTACK to create complete executive dashboards with zero VBA."
  },
  {
    number: 10,
    title: "LAMBDA & Advanced Array Helper Functions",
    page: 140,
    category: "lambda",
    functions: ["LAMBDA", "BYROW", "BYCOL", "MAP", "SCAN", "REDUCE", "MAKEARRAY", "ISOMITTED"],
    description: "Turn custom logic into reusable native functions without VBA macros. Process arrays row-by-row with BYROW, calculate running totals with SCAN, and generate programmatic matrices.",
    highlight: "Build enterprise custom functions like =CalculateCommission() and deploy them across the company."
  },
  {
    number: 11,
    title: "Advanced Summary and Grouping Functions (2025/2026)",
    page: 159,
    category: "ai",
    functions: ["GROUPBY ★", "PIVOTBY ★", "PERCENTOF ★"],
    description: "The crown jewels of Microsoft 365. Generate full PivotTable-style summaries and multi-dimensional crosstabs directly inside formulas with zero manual 'Refresh' buttons.",
    highlight: "Create two-dimensional matrix reports with row/column totals and custom LAMBDA weighted averages."
  },
  {
    number: 12,
    title: "Web, Media, and AI Functions",
    page: 171,
    category: "ai",
    functions: ["IMAGE", "STOCKHISTORY", "FIELDVALUE", "COPILOT ★"],
    description: "Connect the grid to live web data, embed dynamic product photos with IMAGE, pull financial market histories with STOCKHISTORY, and prompt AI Copilot directly within formula cells.",
    highlight: "Call =COPILOT('Summarize this sales data', Table1) to generate executive insights inside a cell."
  }
];

export const FORMULA_PLAYGROUND_ITEMS = [
  {
    id: "xlookup",
    name: "XLOOKUP (Modern Search)",
    formula: '=XLOOKUP(E2, A2:A6, C2:C6, "Not Found")',
    description: "Searches for an Employee ID and returns their Department directly—even if the return column is to the left or right, with built-in error handling.",
    chapter: "Chapter 7 (Page 106)",
    tableHeaders: ["ID", "Employee Name", "Department", "Salary (₦)"],
    sampleData: [
      ["EMP-101", "Amina Bello", "Finance & Accounts", "₦650,000"],
      ["EMP-102", "Chidi Okonkwo", "Data Analytics", "₦820,000"],
      ["EMP-103", "Folake Adebayo", "Supply Chain", "₦540,000"],
      ["EMP-104", "Tariq Ibrahim", "Engineering", "₦910,000"],
    ],
    searchKey: "EMP-102",
    result: "Data Analytics",
    explanation: "Unlike legacy VLOOKUP, XLOOKUP doesn't care about column ordering, needs no column index count, and returns a clean fallback if not found."
  },
  {
    id: "filter_sort",
    name: "FILTER + SORT (Dynamic Spill)",
    formula: '=SORT(FILTER(A2:D5, D2:D5 > 600000), 4, -1)',
    description: "Filters all employees with salary > ₦600,000 and automatically sorts them highest to lowest in a single live spilled formula.",
    chapter: "Chapter 9 (Page 126 & 130)",
    tableHeaders: ["ID", "Employee Name", "Department", "Salary (₦)"],
    sampleData: [
      ["EMP-101", "Amina Bello", "Finance", "₦650,000"],
      ["EMP-102", "Chidi Okonkwo", "Analytics", "₦820,000"],
      ["EMP-103", "Folake Adebayo", "Operations", "₦540,000"],
      ["EMP-104", "Tariq Ibrahim", "Engineering", "₦910,000"],
    ],
    searchKey: "Threshold: ₦600,000",
    result: "3 matching rows spilled automatically",
    explanation: "Zero Ctrl+Shift+Enter required. The moment an employee receives a salary increment in the source table, the filtered view updates live."
  },
  {
    id: "groupby",
    name: "GROUPBY (Formula Pivot Table)",
    formula: '=GROUPBY(B2:B10, D2:D10, 1, 1, 0, -1)',
    description: "Groups sales by region and calculates total revenue with automatic header and descending sort—no right-click 'Refresh' needed ever.",
    chapter: "Chapter 11 (Page 168)",
    tableHeaders: ["Region", "Total Revenue"],
    sampleData: [
      ["Lagos", "₦42,500,000"],
      ["Port Harcourt", "₦38,100,000"],
      ["Abuja", "₦29,400,000"],
      ["Kano", "₦18,200,000"],
    ],
    searchKey: "Function Code: 1 (SUM)",
    result: "Live Regional Summary with Totals",
    explanation: "Microsoft 365's crown jewel function. Turns entire multi-step PivotTable workflows into a single lightweight, ultra-fast formula."
  },
  {
    id: "regexextract",
    name: "REGEXEXTRACT (Text Intelligence)",
    formula: '=REGEXEXTRACT(A2, "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}")',
    description: "Pulls clean email addresses out of unformatted customer CRM notes without complex MID and FIND nesting.",
    chapter: "Chapter 5 (Page 80)",
    tableHeaders: ["Raw CRM Note", "Extracted Email"],
    sampleData: [
      ["Spoke with client Dr. Emeka at emeka.consult@energy.ng regarding Q2", "emeka.consult@energy.ng"],
      ["Send commercial invoice to finance@indorama.com urgently", "finance@indorama.com"],
      ["Contract signed by legal.lead@dataedge.org on Friday", "legal.lead@dataedge.org"],
    ],
    searchKey: "Regex Pattern Matching",
    result: "Clean Email Strings",
    explanation: "Brings modern regular expression syntax to standard Excel cells. What used to take 15 lines of VBA or Power Query is done in one formula."
  },
  {
    id: "pmt",
    name: "PMT (Loan & Equipment Financing)",
    formula: '=PMT(0.18/12, 36, 15000000)',
    description: "Calculates the fixed monthly repayment for a ₦15,000,000 equipment purchase financed over 3 years at 18% annual interest.",
    chapter: "Chapter 8 (Page 116)",
    tableHeaders: ["Principal", "Annual Rate", "Tenure", "Monthly Payment"],
    sampleData: [
      ["₦15,000,000", "18.0% p.a.", "36 Months", "-₦542,674.20/month"],
    ],
    searchKey: "Equipment Loan",
    result: "₦542,674.20 / month",
    explanation: "Strict sign convention explained: negative value represents the borrower's monthly cash outflow. Includes real-world commercial banking examples."
  }
];

export const TESTIMONIALS = [
  {
    name: "Ngozi Eze",
    role: "Senior Financial Analyst",
    company: "Stanbic IBTC Bank",
    text: "Before reading Chapter 9 and 11, I spent two hours every Monday manually refreshing pivot tables and fixing broken VLOOKUPs. Uweh's explanation of GROUPBY, PIVOTBY, and dynamic arrays cut my weekly reporting time by 75%. This book is worth ten times the ₦25,000 price.",
    rating: 5,
    location: "Lagos, Nigeria"
  },
  {
    name: "Babatunde Aliyu",
    role: "Supply Chain & Operations Lead",
    company: "Manufacturing Sector",
    text: "The real-world business focus sets this apart from online tutorials. Every function has practical industrial examples—like NETWORKDAYS for factory shutdown schedules and CEILING.MATH for bulk packaging. It has become our department's desk reference.",
    rating: 5,
    location: "Port Harcourt, Nigeria"
  },
  {
    name: "Dr. Kalu Onuoha",
    role: "Corporate Training Director",
    company: "TechTalent Africa",
    text: "Uweh Bariduanen's teaching method of 'clarity through structure' is unmatched. Chapter 10 on LAMBDA and custom functions demystified advanced array helpers that even senior professionals struggle with. Highly recommended for every serious Excel user.",
    rating: 5,
    location: "Abuja, Nigeria"
  }
];

export const PACKAGE_INCLUSIONS = [
  {
    title: "Excel Formula Mastery 2026 eBook",
    format: "Complete PDF (196 Pages)",
    description: "Full unwatermarked digital edition covering 100+ functions, 600 hands-on examples, and 400 real-world business scenarios.",
    value: "₦35,000"
  },
  {
    title: "600+ Companion Exercise Workbooks",
    format: "Excel Files (.xlsx)",
    description: "Pre-populated spreadsheets matching every single formula example and business scenario in the book ready to inspect and practice.",
    value: "₦18,000"
  },
  {
    title: "Appendix B Real-World Challenges & Solution Keys",
    format: "Complete Practical Kit",
    description: "Structured test datasets across 5 practical scenarios (Inventory, CRM Data Cleaning, Accounts Receivable, Dashboards, and Portfolios).",
    value: "₦12,000"
  },
  {
    title: "Microsoft 365 & Copilot 2026 Formula Quick Card",
    format: "Printable High-Res PDF",
    description: "Laminated-style desktop reference guide with syntax cheatsheets for XLOOKUP, REGEX, GROUPBY, PIVOTBY, and LAMBDA.",
    value: "₦8,000"
  },
  {
    title: "Lifetime Updates & New Function Releases",
    format: "Digital Delivery",
    description: "Any future revisions or new function additions released by Microsoft will be delivered directly to your email at zero extra charge.",
    value: "Priceless"
  }
];

export const FAQS = [
  {
    q: "How will I receive the book after paying ₦25,000?",
    a: "Immediately upon completing your payment, you will see an instant download button on the confirmation screen, and an automated email with your permanent download link will be dispatched to your email address."
  },
  {
    q: "Which Excel versions does this book support?",
    a: "The book covers all versions from Excel 2010 through Microsoft 365. For newer additions (like XLOOKUP, Dynamic Arrays, REGEX, GROUPBY, PIVOTBY, and Copilot), Microsoft 365 features are clearly indicated with a star (★) alongside backward-compatible alternatives (like INDEX+MATCH)."
  },
  {
    q: "Can I read the eBook on my phone or tablet?",
    a: "Yes. The book is delivered in high-resolution, universal PDF format that reads crisply on iPhone, iPad, Android devices, Mac, and Windows PC. You can also print physical copies if desired."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept Nigerian Bank Transfers, Debit/Credit Cards (Mastercard, Visa, Verve) via Paystack, as well as USSD and Apple Pay. All transactions are securely processed in Nigerian Naira (₦25,000)."
  },
  {
    q: "What if I need help with an exercise?",
    a: "The companion workbooks include step-by-step formula audits for all 600 examples. Furthermore, readers can connect with Author Uweh Bariduanen's training community at Data Edge Academy."
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Yes. We offer a 100% 14-day money-back guarantee. If you don't discover formulas and automation techniques that save you hours of work, simply email us for an immediate full refund."
  }
];
