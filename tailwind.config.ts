import daisyui from "daisyui"
import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr'
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "synthwave",
      "garden"
    ]
  }
} satisfies Config

