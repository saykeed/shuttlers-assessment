/** @type {import('tailwindcss').Config} */
const newColors = {
	black1: 'var(--black1)',
	black2: 'var(--black2)',
	black3: 'var(--black3)',
	gray6: 'var(--gray6)',
	gray5: 'var(--gray5)',
	gray9: 'var(--gray9)',
	blue: 'var(--blue)',
	green: 'var(--green)',
	yellow: 'var(--yellow)',
	background: 'var(--background)',
	white: 'var(--white)'
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
		colors: newColors,
	},
  },
  plugins: [],
}
