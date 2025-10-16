export type Plant = {
  id: string;
  commonName: string;
  scientificName?: string;
  category?: "Perennial" | "Shrub" | "Tree" | "Annual" | "Grass" | "Groundcover" | "Vine" | "Other";
  zone?: string; // e.g., "4-8"
  sun?: string; // e.g., "Full Sun"
  water?: string; // e.g., "Low | Medium | High"
  heightIn?: number;
  spreadIn?: number;
  bloomMonths?: number[]; // 1..12
  tasksByMonth?: Record<number, string[]>;
  imageUrl?: string;
  notes?: string;
  source?: "Bluestone" | "Local";
  sourceUrl?: string;
  tags?: string[];
  lastUpdated?: string; // ISO date
};

export const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
] as const;

export type MonthPair = { slug: string; label: string; months: number[] };

export const MONTH_PAIRS: MonthPair[] = [
  { slug: "jan-feb", label: "Jan / Feb", months: [1, 2] },
  { slug: "mar-apr", label: "Mar / Apr", months: [3, 4] },
  { slug: "may-jun", label: "May / Jun", months: [5, 6] },
  { slug: "jul-aug", label: "Jul / Aug", months: [7, 8] },
  { slug: "sep-oct", label: "Sep / Oct", months: [9, 10] },
  { slug: "nov-dec", label: "Nov / Dec", months: [11, 12] },
];

export function uuid(): string {
  return (Date.now().toString(36) + Math.random().toString(36).slice(2, 8)).toUpperCase();
}