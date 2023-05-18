/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paste: "#2EBFED",
        sweetPink: "#FF709F",
        white: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
};

