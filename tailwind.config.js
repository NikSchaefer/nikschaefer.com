module.exports = {
	purge: ["./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
			},
			animation: {
				wave: "wave 1.25s linear infinite alternate",
				popinout: "popup 5s",
				fadein: "fadein 0.2s ease",
			},
			keyframes: {
				wave: {
					"0%, 100%": { transform: "rotate(0deg)" },
					"50%": { transform: "rotate(-5deg)" },
				},
				popup: {
					"0%, 100%": {
						transform: "translateY(0px) translateX(-50%)",
					},
					"10%, 90%": {
						transform: "translateY(180px) translateX(-50%)",
					},
				},
				fadein: {
					"0%": { opacity: 0, "margin-top": "1rem" },
					"100%": { opacity: 10, "margin-top": "0.75rem" },
				},
			},
			transitionTimingFunction: {
				expo: "cubic-bezier(0.645, 0.045, 0.355, 1);",
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
