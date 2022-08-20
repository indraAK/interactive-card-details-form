/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "body-lg": "url('/images/bg-main-desktop.png')",
        "body-sm": "url('/images/bg-main-mobile.png')",
        "card-back": "url(/images/bg-card-back.png)",
        "card-front": "url(/images/bg-card-front.png)",
      },
    },
  },
  plugins: [],
};
