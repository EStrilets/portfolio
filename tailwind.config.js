const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        levitate: {
          '0%': { transform: 'translate(0)' },
          '10%': { transform: 'translate(-0.5px, -0.5px)' },
          '20%': { transform: 'translate(0.5px, -px)' },
          '30%': { transform: 'translate(-0.5px, 0.5px)' },
          '40%': { transform: 'translate(0.5px, 0.5px)' },
          '50%': { transform: 'translate(-0.5px, -0.5px)' },
          '60%': { transform: 'translate(0.5px, -0.5px)' },
          '70%': { transform: 'translate(-0.5px, 0.5px)' },
          '80%': { transform: 'translate(-0.5px, -0.5px)' },
          '90%': { transform: 'translate(0.5px, -0.5px)' },
          '100%': { transform: 'translate(0)' },
        },
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slide: "slide 9s linear infinite",
        ["infinite-slider"]: "infiniteSlider 35s linear infinite",
        float: 'float 3s ease-in-out infinite',
        levitate: 'levitate 1s ease-in-out infinite',
      },
      colors: {
        main: "#0F1521",
        second: "#1B263E",
        text: "#5686f5",
        "main-light": "#fcfcfc",
        "second-light": "#f6f9fe",
        "light-text": "#020617",
        "text-secondary": "#727e99",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}