import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brat: {
          "50": "#faffe5",
          "100": "#f1ffc6",
          "200": "#e2ff94",
          "300": "#ccff56",
          "400": "#b4f724",
          "500": "#89cc04",
          "600": "#73b200",
          "700": "#568704",
          "800": "#466a0a",
          "900": "#3b590e",
          "950": "#1d3201",
        },
      },
    },
  },
  plugins: [],
};
export default config;
