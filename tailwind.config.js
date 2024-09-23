/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        outfit: '"Outfit", sans-serif',
      },
      colors: {
        primary: "#5f6FFF",
      },
    },
  },
  plugins: [],
};
