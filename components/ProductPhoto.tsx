"use client";

import Image from "next/image";
import { useState } from "react";
import { SERIES_PHOTO, type SeriesKey } from "@/lib/products";

// The photo sits over the drawn icon. If it fails to load, the icon shows through.
export function ProductPhoto({ series, sizes }: { series: SeriesKey; sizes: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={SERIES_PHOTO[series]}
      alt=""
      fill
      sizes={sizes}
      className="photo"
      onError={() => setFailed(true)}
    />
  );
}
