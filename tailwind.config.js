/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          900: "#0B3D2E",
          700: "#0E6E4E",
          500: "#1B9E6B",
          100: "#E6F4EE",
        },
        azul: {
          900: "#0A2540",
          600: "#1456C4",
          100: "#E8F0FE",
        },
        amarelo: {
          500: "#FFC400",
          300: "#FFE08A",
        },
        ink: "#0F1B17",
        slate: "#4A5B54",
        line: "#E3E8E6",
        "bg-soft": "#F6F9F8",
        cta: "#FFC400",
        "cta-ink": "#1A1300",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "18px",
        lg: "28px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(10,37,64,.08)",
        pop: "0 20px 50px rgba(10,37,64,.14)",
      },
      maxWidth: {
        container: "1200px",
      },
      fontSize: {
        display: ["clamp(2.75rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["clamp(2rem, 2.5vw + 1rem, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.4rem, 1vw + 1rem, 1.75rem)", { lineHeight: "1.2" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s cubic-bezier(.16,.84,.44,1) both",
      },
    },
  },
  plugins: [],
};
