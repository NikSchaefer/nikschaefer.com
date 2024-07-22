/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			transitionTimingFunction: {
				expo: "cubic-bezier(0.645, 0.045, 0.355, 1);",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: {
					100: "#fcfaf8",
					200: "#f8f6f1",
					300: "#f5f1eb",
					400: "#f1ede4",
					500: "#eee8dd",
					600: "#bebab1",
					700: "#8f8b85",
					800: "#5f5d58",
					900: "#302e2c",
					DEFAULT: "#eee8dd",
				},
				foreground: "#4C6763",
				primary: {
					100: "#cddedc",
					200: "#9abdb8",
					300: "#689b95",
					400: "#357a71",
					500: "#03594e",
					600: "#02473e",
					700: "#02352f",
					800: "#01241f",
					900: "#011210",
					DEFAULT: "#03594E",
					foreground: "#fff",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				wave: "wave 1.25s linear infinite alternate",
				popinout: "popup 5s",
				fadein: "fadein 0.2s ease",
			},
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
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
