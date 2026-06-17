import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["'Barlow Condensed'", "sans-serif"],
        inter:  ["Inter", "sans-serif"],
        cormorant: ["'Cormorant Garamond'", "serif"],
      },
      colors: {
        purple: {
          DEFAULT: "#6B21A8",
          light:   "#7C3AED",
          bright:  "#8B5CF6",
          pale:    "#EDE9FE",
          dark:    "#4C1D95",
          deep:    "#2E1065",
        },
        ink: "#1A1A2E",
        silk: "#F8F7FF",
        stone: "#6B7280",
      },
      keyframes: {
        fadeUp:      { "0%":{ opacity:"0", transform:"translateY(28px)" }, "100%":{ opacity:"1", transform:"translateY(0)" } },
        marquee:     { "0%":{ transform:"translateX(0)" }, "100%":{ transform:"translateX(-50%)" } },
        pulsePurple: { "0%,100%":{ boxShadow:"0 0 0 0 rgba(107,33,168,.5)" }, "70%":{ boxShadow:"0 0 0 14px rgba(107,33,168,0)" } },
        float:       { "0%,100%":{ transform:"translateY(0)" }, "50%":{ transform:"translateY(-8px)" } },
      },
      animation: {
        "fade-up":      "fadeUp .75s cubic-bezier(.16,1,.3,1) forwards",
        marquee:        "marquee 32s linear infinite",
        "pulse-purple": "pulsePurple 2.4s ease infinite",
        float:          "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
