/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // paste: "#2EBFED",
        darkpaste: "#008db8",
        paste: "#51B59F",
        sweetPink: "#FF7798",
        white: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
};

