/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        widthGrow: {
          "0%": { width: "40px" },
          "100%": { width: "100px" },
        },
      },
      animation: {
        widthGrow: "widthGrow 200ms ease-out",
      },
    },
  },
  plugins: [],
};
