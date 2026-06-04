// Conjunto enxuto de ícones de traço (stroke) reutilizáveis.
const PATHS = {
  book: "M4 5a2 2 0 0 1 2-2h11v16H6a2 2 0 0 0-2 2V5Zm13 14H6M9 7h5M9 11h5",
  chip: "M9 3v3m6-3v3M9 18v3m6-3v3M3 9h3m-3 6h3m12-6h3m-3 6h3M7 7h10v10H7V7Z",
  target: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0",
  school: "M3 9l9-5 9 5-9 5-9-5Zm3 2.5V17c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5.5",
  rocket: "M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2m4-12c3-3 7-3 7-3s0 4-3 7l-3 3-4-4 3-3ZM9 11l-4 1 3 3 1-4Z",
  network: "M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-7 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM10.5 8 6.5 14m7 0-4-6",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3Zm-3 9 2 2 4-4",
  chart: "M4 20V4M20 20H4m4 0v-8m4 8V8m4 12v-5",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  check: "M5 12l5 5 9-9",
  brush: "M9 14a3 3 0 0 0-3 3c0 1-1 2-2 2 1 1.5 3 2 4 2a4 4 0 0 0 4-4 3 3 0 0 0-3-3Zm2-2 8-8 3 3-8 8-3-3Z",
  pencil: "M4 20l4-1L19 8l-3-3L5 16l-1 4Zm10-13 3 3",
  doc: "M7 3h8l4 4v14H7V3Zm8 0v4h4M10 13h6M10 17h6",
  camera: "M3 9a2 2 0 0 1 2-2h2l1.5-2h5L17 7h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm9 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  search: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm10 17-4-4",
  sparkle: "M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Zm6 11 .9 2.1 2.1.9-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z",
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2",
  users: "M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1m6-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm12 9v-1a4 4 0 0 0-3-3.9M16 4.1a3.5 3.5 0 0 1 0 6.8",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.4 4 5.7 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.7-4-9s1.5-6.6 4-9Z",
  lock: "M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5V11Zm7 4v3",
  award: "M12 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM8.5 12.5 7 21l5-3 5 3-1.5-8.5",
  wand: "M5 19 16 8m-3-3 3 3M18 4l.7 1.8L20.5 6l-1.8.7L18 8.5l-.7-1.8L15.5 6l1.8-.5L18 4Z",
  flag: "M5 21V4m0 0h12l-2 4 2 4H5",
  list: "M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01",
  mail: "M3 6h18v12H3V6Zm0 1.5 9 6 9-6",
  phone: "M6.5 3.5 9 4l1 4-2 1.5a10 10 0 0 0 4.5 4.5L14 13l4 1 .5 2.6a1.5 1.5 0 0 1-1.6 1.8A14 14 0 0 1 4.6 5a1.5 1.5 0 0 1 1.9-1.5Z",
  chat: "M4 5h16v11H9l-4 4v-4H4V5Zm4 4h8M8 12h5",
};

export default function Icon({ name, size = 24, className = "" }) {
  const d = PATHS[name] || PATHS.check;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
    </svg>
  );
}
