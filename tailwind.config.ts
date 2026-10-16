import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { sand: "#EEE5D6", turk: "#C51A1A", ink: "#1a1613" },
      fontFamily: { futura: ["Futura", "'Century Gothic'", "'Trebuchet MS'", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
