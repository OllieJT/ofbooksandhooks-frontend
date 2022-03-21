const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/@inqling/components/**/*.{html,js,svelte,ts}",
	],
	darkMode: "class",

	theme: {
		extend: {
			fontFamily: {
				sans: ["Sen", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				alt: {
					50: "#fcfaf8",
					100: "#f9eee8",
					200: "#efd6cd",
					300: "#ddaea3",
					400: "#cb8277",
					500: "#b55f59",
					600: "#9a4346",
					700: "#76313a",
					800: "#52222a",
					900: "#33161b",
				},
				primary: {
					50: "#f6f9fa",
					100: "#e1f1fb",
					200: "#bddff7",
					300: "#8dbfe9",
					400: "#5b99d8",
					500: "#4575c6",
					600: "#395ab0",
					700: "#2d438b",
					800: "#202d63",
					900: "#121b3e",
				},
				secondary: {
					50: "#faf9f1",
					100: "#f8efac",
					200: "#efde6c",
					300: "#d7bb3f",
					400: "#bb8f23",
					500: "#aa7323",
					600: "#8a5118",
					700: "#6e3b18",
					800: "#4e2715",
					900: "#321a11",
				},

				// primary: colors.blue,
				// secondary: colors.yellow,
				// alt: colors.rose,
				mono: colors.slate,
			},
			minHeight: {
				interactive: "48px",
			},
			minWidth: {
				interactive: "48px",
			},
		},
	},

	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		plugin(function ({ addVariant }) {
			addVariant("is-enabled", "&.is-enabled");
			addVariant("group-is-enabled", `:merge(.group).is-enabled &`);
			addVariant("peer-is-enabled", `:merge(.peer).is-enabled ~ &`);

			addVariant("is-current", "&.is-current");
			addVariant("group-is-current", `:merge(.group).is-current &`);
			addVariant("peer-is-current", `:merge(.peer).is-current ~ &`);

			addVariant("is-active", "&.is-active", "");
			addVariant("group-is-active", `:merge(.group).is-active &`);
			addVariant("peer-is-active", `:merge(.peer).is-active ~ &`);

			addVariant("hocus", ["&:hover", "&:focus"]);
		}),
	],
};

module.exports = config;
