const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.vue"],
  theme: {
    fontFamily: {
      sans: ["Linux Biolinum O", "sans-serif"],
      serif: [
        "Linux Libertine O",
        "serif",
      ],
      narration: [
        "EBGaramond",
        // "BodoniModa",
        "serif",
      ],
      mono: [
        // "Inconsolata LGC",
        // "Terminus (TTF)",
        "Fira Code",
        // "DejaVu Sans Mono",
        "monospace",
      ],
    },
    extend: {
      colors: {
        gray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      borderWidth: ["hover", "focus"],
    },
  },
}
