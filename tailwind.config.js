/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1640px",
      // => @media (min-width: 1540px) { ... }

      "4xl": "2000px",
      // => @media (min-width: 1540px) { ... }
    },
    minHeight: {
      "1/2": "50%",
    },
    extend: {
      colors: {
        eggplant: "#6f4b79", // homepage section headings
        lightBlue: "#eaeff8", // homepage background
        mauve: "#956f9f",
        pink: "#d79eff", // site navigation links, resume position titles
        lightMauve: "#c098ca",
      },
      animation: {
        fade: "fade 1s ease-in-out",
        fadeSlow: "fade 1700ms ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
