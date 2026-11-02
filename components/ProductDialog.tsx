"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCTS, SERIES_LABEL } from "@/lib/products";
import { BoltIcon } from "./BoltIcon";
import { GradeChips } from "./Catalog";
import { ProductPhoto } from "./ProductPhoto";
import { useStore } from "./store";

export function ProductDialog() {
  const { activeId, setActiveId, addToQuote, setDrawerOpen } = useStore();
  const ref = useRef<HTMLDialogElement>(null);
  const [qty, setQty] = useState(1);
  const product = PRODUCTS.find((p) => p.id === activeId);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (activeId && !dialog.open) {
      setQty(1);
      dialog.showModal();
    }
    if (!activeId && dialog.open) dialog.close();
  }, [activeId]);

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialogTitle"
      onClose={() => setActiveId(null)}
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
    >
      {product && (
        <>
          <div className="dialog__body">
            <div className="dialog__img">
              <ProductPhoto series={product.series} sizes="380px" />
              <BoltIcon series={product.series} />
            </div>
            <div>
              <span className="product__series dialog__series">{SERIES_LABEL[product.series]}</span>
              <h2 id="dialogTitle">{product.name}</h2>
              <p className="dialog__std">{product.std} standard &middot; <GradeChips grades={product.grades} /></p>
              <dl className="specs">
                <dt>Material</dt><dd>{product.grades.map((g) => `${g} stainless`).join(", ")}</dd>
                <dt>Thread size</dt><dd>{product.thread}</dd>
                <dt>Length</dt><dd>{product.length}</dd>
                <dt>Thread type</dt><dd>{product.threadType}</dd>
              </dl>
              <div className="qty">
                <span>Quantity</span>
                <div className="qty__ctl">
                  <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">&minus;</button>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Math.floor(Number(e.target.value)) || 1))}
                    aria-label="Quantity"
                  />
                  <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase">+</button>
                </div>
              </div>
              <button
                type="button"
                className="btn btn--primary btn--block"
                onClick={() => {
                  addToQuote(product.id, qty);
                  ref.current?.close();
                  setDrawerOpen(true);
                }}
              >
                Add to quote list
              </button>
              <p className="dialog__note">Pricing and lead time are confirmed by sales. Custom lengths available on request.</p>
            </div>
          </div>
          <button type="button" className="dialog__close" onClick={() => ref.current?.close()} aria-label="Close">
            &times;
          </button>
        </>
      )}
    </dialog>
  );
}
