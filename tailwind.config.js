/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      paste: "#2EBFED",
      sweetPink: "#FF709F",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

