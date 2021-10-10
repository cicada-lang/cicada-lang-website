import { setup } from "twind/shim"
import "@/assets/fonts/fonts.css"

setup({
  theme: {
    fontFamily: {
      sans: ["Linux Biolinum O", "sans-serif"],
      serif: ["Linux Libertine O", "serif"],
      mono: ["Inconsolata LGC", "DejaVu Sans Mono", "monospace"],
    },
  },
})
