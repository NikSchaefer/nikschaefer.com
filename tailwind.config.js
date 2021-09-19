module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
			},
			animation: {
				wave: "wave 1.25s linear infinite alternate",
			},
			keyframes: {
				wave: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(-5deg)" },
				},
			},
			colors: {
				coal: {
					DEFAULT: "#24292D",
					50: "#909CA6",
					100: "#82909B",
					200: "#687682",
					300: "#515D66",
					400: "#3B4349",
					500: "#24292D",
					600: "#0D0F11",
					700: "#000000",
					800: "#000000",
					900: "#000000",
				},
				shark: {
					DEFAULT: "#131722",
					100: "#d0d1d3",
					200: "#a1a2a7",
					300: "#71747a",
					400: "#42454e",
					500: "#131722",
					600: "#0f121b",
					700: "#0b0e14",
					800: "#08090e",
					900: "#040507",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
