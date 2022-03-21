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
				primary: colors.teal,
				secondary: colors.yellow,
				alt: colors.sky,
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
