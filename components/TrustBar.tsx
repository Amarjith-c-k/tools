const items = [
  { label: "304 & 316 stock", icon: <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /> },
  { label: "Full thread", icon: <path d="M4 12h16M7 8h10M7 16h10" /> },
  { label: "Custom lengths", icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></> },
  { label: "Quote in one day", icon: <path d="M4 6h16v10H8l-4 4z" /> },
];

export function TrustBar() {
  return (
    <ul className="trustbar" aria-label="Why buy from us">
      {items.map((i) => (
        <li key={i.label}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{i.icon}</svg>
          <span>{i.label}</span>
        </li>
      ))}
    </ul>
  );
}
