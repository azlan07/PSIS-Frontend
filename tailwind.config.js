/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kosong: "#e2e8f0",
        satu: "#B9EDDD",
        dua: "#87CBB9",
        tiga: "#569DAA",
        empat: "#577D86",
        lima: "#2d3748"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}