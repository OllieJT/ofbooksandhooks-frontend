export enum Theme {
	Green,
	Blue,
	Yellow,
	Default,
	None,
}

export const handleThemeColor = (theme?: string): Theme => {
	switch (theme) {
		case "primary":
		case "green":
		case "teal":
			return Theme.Green;
		case "secondary":
		case "blue":
			return Theme.Blue;
		case "accent":
		case "yellow":
			return Theme.Yellow;
		case "default":
			return Theme.Default;
		default:
			return Theme.None;
	}
};

export const handleThemeClass = (theme?: Theme): string => {
	switch (theme) {
		case Theme.Green:
			return `theme-green`;
		case Theme.Blue:
			return `theme-blue`;
		case Theme.Yellow:
			return `theme-yellow`;
		case Theme.Default:
			return "theme-default";
		default:
			return "theme-none";
	}
};
