/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: "url('./assets/background-img/cables-udp.jpg')",
      colors: {
        primarybg: "#22484C",
        secondarybg: "#03342F",
        verde: "#82D173",
        gris: "#95A3B3",
        marron: "#5E4C5A",
        rosacrema: "#FFE2D1",
      },
    },
  },
  plugins: [],
}