// Product data taken from the "Fasteners Catalog" PDF (stainless 304 / 316).
// Replace with a CMS or ERP feed later.

export type SeriesKey = "carriage" | "flange" | "tbolt" | "square" | "anchor";
export type Grade = "304" | "316";

export type Product = {
  id: string;
  series: SeriesKey;
  name: string;
  std: string;
  grades: Grade[];
  thread: string;
  length: string;
  threadType: string;
};

export type Series = { key: SeriesKey; label: string; blurb: string };

export const SERIES: Series[] = [
  { key: "carriage", label: "Carriage Bolt", blurb: "Round dome head with square neck. Timber, sheet and cladding fixings." },
  { key: "flange", label: "Flange Bolt", blurb: "Hex or flange head that spreads load without a washer." },
  { key: "tbolt", label: "T-Bolt", blurb: "Slides into T-slot framing for solar racks and machine frames." },
  { key: "square", label: "Square Head Bolt", blurb: "Square head for hand-tight fixing in wood and steel." },
  { key: "anchor", label: "Anchor Bolt", blurb: "Bent foundation bolts for concrete and steel base plates." },
];

export const SERIES_LABEL = Object.fromEntries(SERIES.map((s) => [s.key, s.label])) as Record<SeriesKey, string>;

export const PRODUCTS: Product[] = [
  { id: "c1", series: "carriage", name: "DIN 603 Carriage Bolt (Large Head)", std: "DIN", grades: ["304", "316"], thread: "M5 to M16", length: "12 to 200 mm", threadType: "Full thread" },
  { id: "c2", series: "carriage", name: "GB 12 Carriage Bolt (Small Head)", std: "GB", grades: ["304", "316"], thread: "M5 to M16", length: "16 to 200 mm", threadType: "Full thread" },
  { id: "c3", series: "carriage", name: "ANSI B18.5 Carriage Bolt (Imperial)", std: "ANSI", grades: ["304", "316"], thread: '1/4" to 1/2"', length: '1/2" to 6"', threadType: "Full thread" },
  { id: "c4", series: "carriage", name: "Embedded T-Bolt, 38/23 Flat Tooth", std: "EU", grades: ["304"], thread: "M12, M16", length: "50 mm", threadType: "Full thread" },
  { id: "c5", series: "carriage", name: "EU Standard T-Bolt Type 20", std: "EU", grades: ["304"], thread: "M5", length: "40 mm", threadType: "Full thread" },
  { id: "c6", series: "carriage", name: "EU Standard T-Bolt Type 30", std: "EU", grades: ["304"], thread: "M6", length: "40 mm", threadType: "Full thread" },
  { id: "f1", series: "flange", name: "DIN 603 Flange Bolt (Large Head)", std: "DIN", grades: ["304", "316"], thread: "M5 to M16", length: "12 to 200 mm", threadType: "Full thread" },
  { id: "f2", series: "flange", name: "GB 12 Flange Bolt (Small Head)", std: "GB", grades: ["304", "316"], thread: "M5 to M16", length: "16 to 200 mm", threadType: "Full thread" },
  { id: "f3", series: "flange", name: "ANSI B18.5 Flange Bolt (Imperial)", std: "ANSI", grades: ["304", "316"], thread: '1/4" to 1/2"', length: '1/2" to 6"', threadType: "Full thread" },
  { id: "f4", series: "flange", name: "EU Standard T-Bolt Type 40", std: "EU", grades: ["304"], thread: "M8", length: "40 mm", threadType: "Full thread" },
  { id: "f5", series: "flange", name: "EU Standard T-Bolt Type 45", std: "EU", grades: ["304"], thread: "M8", length: "40 mm", threadType: "Full thread" },
  { id: "t1", series: "tbolt", name: "GB 37 T-Slot Bolt", std: "GB", grades: ["304", "316"], thread: "M5 to M16", length: "12 to 70 mm", threadType: "Full thread" },
  { id: "t2", series: "tbolt", name: "T-Bolt for Solar / PV Use", std: "Solar", grades: ["304", "316"], thread: "M8", length: "20 to 70 mm", threadType: "Head 14.5x8x5, 18x8x5, 23x10x4" },
  { id: "t3", series: "tbolt", name: "Embedded T-Bolt, 30/20 Flat Tooth", std: "EU", grades: ["304"], thread: "M12", length: "50 mm", threadType: "Full thread" },
  { id: "s1", series: "square", name: "GB 35 Square-Head Bolt", std: "GB", grades: ["304", "316"], thread: "M5 to M12", length: "12 to 60 mm", threadType: "Full thread" },
  { id: "a1", series: "anchor", name: "Foundation (J/L-type) Anchor Bolt", std: "Custom", grades: ["304", "316"], thread: "M16 to M30", length: "300 to 500 mm", threadType: "Bent foundation hook" },
];

// Temporary Wikimedia Commons photos (closest match per series). Replace before launch.
export const SERIES_PHOTO: Record<SeriesKey, string> = {
  carriage: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/DIN_914-like_1-4%22-20_UNC_x_9.5mm_hex_socket_screws.jpg/960px-DIN_914-like_1-4%22-20_UNC_x_9.5mm_hex_socket_screws.jpg",
  flange: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Molly_bolts.jpg/960px-Molly_bolts.jpg",
  tbolt: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Extruded_aluminium_section_x3.jpg/960px-Extruded_aluminium_section_x3.jpg",
  square: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Stainless-steel-mild-steel.jpg/960px-Stainless-steel-mild-steel.jpg",
  anchor: "https://upload.wikimedia.org/wikipedia/commons/9/9f/AnchorBolt_M12_01.jpg",
};

// Hero photos: acorn nuts, hex standoff spacers and nylon lock nuts (Wikimedia Commons).
export const HERO_TILES = {
  acorn: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Circa_2005_acorn_nuts_MHM_A4_M4_DIN_1587_for_marine_use_by_Hjertmans_Sweden.jpg/960px-Circa_2005_acorn_nuts_MHM_A4_M4_DIN_1587_for_marine_use_by_Hjertmans_Sweden.jpg",
  spacer: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Abstandsbolzen%2C_verschiedene_Typen.JPG/960px-Abstandsbolzen%2C_verschiedene_Typen.JPG",
  lock: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Nylon_Lock_Nut.png/960px-Nylon_Lock_Nut.png",
};

// Full-width hero background: stainless assortment case (Wikimedia Commons).
export const HERO_BG = "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Dornbirn-A4_Screws_assortment-01ASD.jpg/1920px-Dornbirn-A4_Screws_assortment-01ASD.jpg";

export const SITE = {
  company: "TorqueConnect",
  tagline: "Precision in every turn, strength in every connection",
  email: "sales@torqueconnect.com",
  phone: "+971 524593044",
  address: "Dubai Investment Park - 1, Dubai, UAE",
  hours: "Mon to Fri, 9:00 to 18:00",
};
