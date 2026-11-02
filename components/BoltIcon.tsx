import type { SeriesKey } from "@/lib/products";

const shank =
  '<rect x="46" y="58" width="28" height="92" rx="3" fill="#8b949c"/><path d="M46 70h28M46 84h28M46 98h28M46 112h28M46 126h28M46 140h28" stroke="#6b737b" stroke-width="2"/>';

const heads: Record<SeriesKey, string> = {
  carriage: '<path d="M26 58a40 26 0 0 1 68 0z" fill="#c9d0d6"/><rect x="26" y="56" width="68" height="6" fill="#aab2b9"/>',
  flange: '<path d="M30 56l10-18h28l10 18z" fill="#c9d0d6"/><ellipse cx="60" cy="56" rx="38" ry="6" fill="#aab2b9"/>',
  tbolt: '<path d="M20 44h80v24a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6z" fill="#c9d0d6"/>',
  square: '<rect x="30" y="34" width="60" height="30" rx="3" fill="#c9d0d6"/>',
  anchor: '<path d="M46 150v-40q0-40 30-40h8" fill="none" stroke="#8b949c" stroke-width="12" stroke-linecap="round"/>',
};

// Drawn fallback shown behind the photo, and when the photo fails to load.
export function BoltIcon({ series }: { series: SeriesKey }) {
  const body = series === "anchor" ? "" : shank;
  return (
    <svg viewBox="0 0 120 170" aria-hidden="true" focusable="false">
      <g dangerouslySetInnerHTML={{ __html: body + heads[series] }} />
    </svg>
  );
}
