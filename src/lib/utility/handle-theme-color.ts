export type ThemeClass = "theme-green" | "theme-yellow" | "theme-blue";

export const handleThemeClass = (theme?: string): ThemeClass => {
	switch (theme) {
		case "secondary":
		case "green":
		case "teal":
			return `theme-green`;
		case "accent":
		case "yellow":
			return `theme-yellow`;
		case "primary":
		case "default":
		case "blue":
		default:
			return `theme-blue`;
	}
};
