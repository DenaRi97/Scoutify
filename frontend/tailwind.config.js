/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#142740",
        "custom-yellow": "#F2D16D",
        "custom-red": "#C84343",
        "custom-white": "#F2F2F2",
        "custom-black": "#1E1E1E"
      },
      backgroundImage: {
        'gradient-yellow': 'linear-gradient(to bottom right, white, #F2D16D)'
      }
    },
  },
  plugins: [require("daisyui")],
};
