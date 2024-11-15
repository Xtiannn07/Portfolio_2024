// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Tiny5', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Replace default sans
        title: ['Tiny5', 'sans-serif'], // Custom font family for other specific uses
      },
    },
  },
  plugins: [],
};
