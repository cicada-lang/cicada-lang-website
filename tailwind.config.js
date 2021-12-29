const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Linux Biolinum O", "LXGWNewClearGothic", "sans-serif"],
      serif: ["Linux Libertine O", "LXGWWenKai", "serif"],
      mono: ["Fira Code", "monospace"],
      logo: ["BodoniModa", "LXGWWenKai", "serif"],
    },
    extend: {
      colors: {
        gray: colors.stone,
      },
    },
  },
}
