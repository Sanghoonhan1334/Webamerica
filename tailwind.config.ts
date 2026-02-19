import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1020",
        surface: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.10)",
        text: "#EAF0FF",
        text2: "rgba(234,240,255,0.72)",
        accent: "#3B5BFF",
        accentGlow: "rgba(59,91,255,0.35)",
      },
      borderRadius: {
        card: "18px",
        button: "12px",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0,0,0,0.45)",
      },
      backdropBlur: {
        glass: "10px",
      },
    },
  },
  plugins: [],
};
export default config;

