/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principal: "#1b676b",
        navbar: "#bef202",
        background: "#eafde6",
      },
    },
  },
  plugins: [],
};
