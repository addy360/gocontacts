module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00FF80",
          50: "#B8FFDB",
          100: "#A3FFD1",
          200: "#7AFFBD",
          300: "#52FFA9",
          400: "#29FF94",
          500: "#00FF80",
          600: "#00C764",
          700: "#008F48",
          800: "#00572C",
          900: "#001F0F",
        },
        primary: {
          DEFAULT: "#0000FF",
          50: "#B8B8FF",
          100: "#A3A3FF",
          200: "#7A7AFF",
          300: "#5252FF",
          400: "#2929FF",
          500: "#0000FF",
          600: "#0000C7",
          700: "#00008F",
          800: "#000057",
          900: "#00001F",
        },
        secondary: {
          DEFAULT: "#FFFF00",
          50: "#FFFFB8",
          100: "#FFFFA3",
          200: "#FFFF7A",
          300: "#FFFF52",
          400: "#FFFF29",
          500: "#FFFF00",
          600: "#C7C700",
          700: "#8F8F00",
          800: "#575700",
          900: "#1F1F00",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
