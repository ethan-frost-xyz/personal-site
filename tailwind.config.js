// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{ts,tsx,js,jsx}', './src/components/**/*.{ts,tsx,js,jsx}'],
    theme: {
      extend: {
        animation: {
          move: "move 5s linear infinite",
        },
        keyframes: {
          move: {
            "0%": { transform: "translateX(-200px)" },
            "100%": { transform: "translateX(200px)" },
          },
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
  