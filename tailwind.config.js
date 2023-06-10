module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
				inter: ["Inter", "sans-serif"],
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
				link: {
					DEFAULT: "#0366D6",
				},
				primary: {
					100: "#f2e1fb",
					200: "#e5c4f6",
					300: "#d7a6f2",
					400: "#ca89ed",
					500: "#bd6be9",
					600: "#9756ba",
					700: "#71408c",
					800: "#4c2b5d",
					900: "#26152f",
					DEFAULT: "#bd6be9",
				},
				secondary: {
					DEFAULT: "#10101a",
					100: "#cfcfd1",
					200: "#9f9fa3",
					300: "#707076",
					400: "#404048",
					500: "#10101a",
					600: "#0d0d15",
					700: "#0a0a10",
					800: "#06060a",
					900: "#030305",
				},
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
