/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      backgroundImage: {
        "main-bg":
          "url('https://png.pngtree.com/background/20230617/original/pngtree-upward-trending-stock-market-graph-in-3d-rendering-picture-image_3701625.jpg')",
        "sec-bg":
          "url('https://png.pngtree.com/background/20231029/original/pngtree-search-engine-marketing-placement-market-website-photo-picture-image_5775350.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
