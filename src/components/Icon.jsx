const P = {
  code: ["M16 18l6-6-6-6", "M8 6l-6 6 6 6"],
  ai: ["M9 9h6v6H9z", "M4 4h16v16H4z", "M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"],
  design: ["M12 20h9", "M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z"],
  cart: ["M6 6h15l-2 9H8z", "M6 6L5 2H2", "M9 20h.01M18 20h.01"],
  megaphone: ["M3 11v2a1 1 0 001 1h3l8 5V5L7 10H4a1 1 0 00-1 1z", "M19 9a4 4 0 010 6"],
  phone: ["M7 2h10a1 1 0 011 1v18a1 1 0 01-1 1H7a1 1 0 01-1-1V3a1 1 0 011-1z", "M11 18h2"],
  chart: ["M3 3v18h18", "M8 16v-5M13 16V8M18 16v-8"],
  cloud: ["M7 18a4 4 0 01-.5-8 5.5 5.5 0 0110.7 1A3.5 3.5 0 0117 18z"],
  compass: ["M12 22a10 10 0 100-20 10 10 0 000 20z", "M16 8l-2 6-6 2 2-6z"],
  plan: ["M9 3h6v3H9z", "M7 5H5v16h14V5h-2", "M9 12h6M9 16h6"],
  shield: ["M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z", "M9 12l2 2 4-4"],
  rocket: ["M5 15c-1 1-2 4-2 6 2 0 5-1 6-2", "M12 15l-3-3a20 20 0 015-9c3-1 6-1 7-1 0 1 0 4-1 7a20 20 0 01-8 6z"],
  heart: ["M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z"],
  pulse: ["M3 12h4l2-5 4 10 2-5h6"],
  cap: ["M2 9l10-5 10 5-10 5z", "M6 11v5c3 2 9 2 12 0v-5"],
  home: ["M3 11l9-8 9 8", "M5 10v10h14V10", "M10 20v-6h4v6"],
  coin: ["M12 2v20", "M17 6H9.5a3 3 0 000 6h5a3 3 0 010 6H6"],
  check: ["M20 6L9 17l-5-5"],
  arrow: ["M5 12h14M13 6l6 6-6 6"],
};
export default function Icon({ name, size = 28, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {(P[name] || []).map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
