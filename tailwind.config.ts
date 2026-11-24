import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: "#F0F4F8",
          100: "#D9E2EC",
          200: "#BCCCDC",
          300: "#9FB3C8",
          400: "#829AB1",
          500: "#627D98",
          600: "#486581",
          700: "#334E68",
          800: "#243B53",
          900: "#102A43",
          950: "#0B1D30",
        },
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        medical: {
          50: "#F4FBF7",
          100: "#E6F7EF",
          200: "#C3ECDA",
          300: "#94DDC0",
          400: "#5DC6A1",
          500: "#2EA882",
          600: "#228B6A",
          700: "#1D6E55",
          800: "#1B5845",
          900: "#17493A",
        },
        ivory: {
          50: "#FCFCF9",
          100: "#FAF9F5",
          200: "#F5F3EC",
          300: "#EFECE1",
          400: "#E6E1D1",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(16, 42, 67, 0.05), 0 1px 2px 0 rgba(16, 42, 67, 0.03)',
        'premium': '0 10px 25px -5px rgba(16, 42, 67, 0.06), 0 8px 10px -6px rgba(16, 42, 67, 0.04)',
        'hover': '0 20px 30px -10px rgba(16, 42, 67, 0.1), 0 10px 15px -5px rgba(16, 42, 67, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;
