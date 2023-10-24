/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          "px-20": "10px",
          "py-20": "10px",
          "px-20-py-0": "10px 0",
          "py-20-px-0": "0 10px",
        },
      },
      colors: {
        green: {
          primary: "#4E6E58",
          secondary: "#544B3D",
          "akzent-base": "#4C8577",
          "akzent-lighter": "#A6ECE0",
          "akzent-light": "#7ADFBB",
          gradient: "linear-gradient(90deg, #4E6E58, #4C8577)",
          success: "#0CB044",
        },
        gray: {
          100: "#E4E7E5",
          200: "#C9CFCB",
          300: "#AEB7B1",
          400: "#939F97",
          500: "#78877D",
        },
        text: {
          "dark-base": "#181B19",
          "dark-light": "#303632",
          "light-base": "#F1F3F2",
          "light-light": "#F1F3F2",
        },
        red: {
          error: "#B00C33",
        },
      },
      fontFamily: {
        baskerville: ["Baskerville", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
