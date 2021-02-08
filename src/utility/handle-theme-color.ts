export enum Theme {
	Green,
	Blue,
	Yellow,
	Default,
}

export const handleThemeColor = (theme: string): Theme => {
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
