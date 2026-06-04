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
