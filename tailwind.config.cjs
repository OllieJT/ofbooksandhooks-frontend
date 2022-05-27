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
				sans: ["Sora", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				// neutral: {background: "rgba(255, 255, 255, 1)",shade: "rgba(238, 240, 246, 1)",border: "rgba(224, 227, 235, 1)",title: "rgba(9, 11, 17, 1)",content: "rgba(64, 64, 64, 1)",subtle: "rgba(121, 125, 134, 1)",},
				primary: {
					brand: "rgba(235, 196, 188, 1)",
					lighter: "rgba(238, 203, 196, 1)",
					base: "rgba(187, 139, 129, 1)",
					darker: "rgba(107, 56, 46, 1)",
				},
				secondary: {
					brand: "rgba(32, 62, 121, 1)",
					lighter: "rgba(200, 210, 249, 1)",
					base: "rgba(102, 153, 204, 1)",
					darker: "rgba(19, 49, 108, 1)",
				},
				accent: {
					brand: "rgba(242, 189, 13, 1)",
					lighter: "rgba(252, 224, 131, 1)",
					base: "rgba(217, 172, 38, 1)",
					darker: "rgba(87, 58, 0, 1)",
				},
				success: {
					darker: "rgba(0, 51, 4, 1)",
					lighter: "rgba(179, 255, 185, 1)",
					mask: "rgba(0, 51, 4, 0.66)",
				},
				error: {
					darker: "rgba(128, 0, 21, 1)",
					lighter: "rgba(255, 204, 213, 1)",
					mask: "rgba(128, 0, 21, 0.66)",
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
		require("@tailwindcss/aspect-ratio"),
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
