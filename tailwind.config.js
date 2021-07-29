module.exports = {
  purge: [
    "./components/**/*.js",
    "./components/**/*.css",
    "./pages/**/*.js",
    "./pages/**/*.css",
    "./lib/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "extra-light-pink": "#FFD8D1",
        "light-pink": "#F7A394",
        "light-green": "#91D4CC",
        "light-gray": "#F8F8F8",
      },
      fontFamily: {
        sans: ["Plex", "sans-serif"],
        serif: ["Plex Serif", "serif"],
      },
    },
    letterSpacing: {
      wide: ".06em",
      wider: "0.2em",
      widest: "0.4em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
