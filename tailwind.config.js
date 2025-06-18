// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{ts,tsx,js,jsx}'],
    theme: {
      extend: {
        colors: {
          border:       "hsl(var(--border) / <alpha-value>)",
          background:   "hsl(var(--background) / <alpha-value>)",
          foreground:   "hsl(var(--foreground) / <alpha-value>)",
        },
        fontFamily: {
          sans: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'sans-serif',
          ],
        },
      },
    },
    plugins: [],
  }
