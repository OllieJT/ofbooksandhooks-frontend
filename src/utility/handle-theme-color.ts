export enum Theme {
	Green,
	Blue,
	Yellow,
	Default,
}

export const handleThemeColor = (theme?: string): Theme => {
	switch (theme) {
		case "primary":
		case "green":
			return Theme.Green;
		case "secondary":
		case "blue":
			return Theme.Blue;
		case "accent":
		case "yellow":
			return Theme.Yellow;
		default:
			return Theme.Default;
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
		default:
			return "theme-default";
	}
};
