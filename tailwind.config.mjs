/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080c",
          900: "#0c0e15",
          850: "#11141d",
          800: "#171b27",
          700: "#232838",
        },
        fg: {
          DEFAULT: "#e9ecf3",
          muted: "#9aa3b6",
          subtle: "#6b7489",
        },
        brand: {
          DEFAULT: "#7389ff",
          strong: "#4c63c1",
          soft: "rgba(115, 137, 255, 0.12)",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', '"Rubik Variable"', "system-ui", "sans-serif"],
        sans: ['"Rubik Variable"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
