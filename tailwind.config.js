const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Linux Biolinum O", "LXGWWenKai", "sans-serif"],
      serif: ["Linux Libertine O", "LXGWWenKai", "serif"],
      mono: ["Fira Code", "monospace"],
    },
    extend: {
      colors: {
        gray: colors.stone,
      },
    },
  },
}
