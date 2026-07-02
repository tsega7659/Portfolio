// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#09090b',
        darkCard: '#18181b', // zinc-900
        darkBorder: '#27272a', // zinc-800
        darkText: '#f4f4f5', // zinc-100
        darkTextMuted: '#a1a1aa', // zinc-400
        accentCyan: '#06b6d4', // cyan-500
        accentYellow: '#eab308', // yellow-500
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
