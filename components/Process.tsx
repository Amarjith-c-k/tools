const steps = [
  { title: "Send your list", text: "Pick parts from the catalog or upload a drawing." },
  { title: "Get pricing", text: "Our engineers confirm specs, price and lead time." },
  { title: "Confirm & order", text: "Approve the quote and we reserve the stock." },
  { title: "Delivered", text: "Shipped with full documentation for your site." },
];

export function Process() {
  return (
    <section className="process container">
      <div className="section-head">
        <p className="eyebrow">Simple process</p>
        <h2>How we work</h2>
      </div>
      <ol className="process__steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="process__num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
