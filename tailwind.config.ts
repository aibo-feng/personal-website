import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // custom dark bg colors
        'dark-bg': '#0A192F',
        'charcoal': '#2D2D2D',

        // custom text colors
        'light-text': '#E0E0E0',
        'muted-text': '#A0AEC0',
      },
      fontFamily: {
        // define custom times font family
        "times": ['"Times New Roman"', 'Times', 'serif'],
        "eb-garamond": ['var(--font-eb-garamond)', "serif"],
        "mono": ['"Courier New"', "Courier", "monospace"],
        // sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // mono: ['var(--font-roboto-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

    },
  },
  plugins: [],
} satisfies Config;
