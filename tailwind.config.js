/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sono"],
      },
      backgroundColor: {
        darkBrown: "#45171d",
        lightBrown: "#6b242d",
        lightGrey: "#889daf",
        darkGrey: "#6a849a",
        black: "#1f0a0d",
      },
    },
  },
  plugins: [],
};
