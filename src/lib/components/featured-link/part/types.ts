import type { THEME_COLOR } from "@inqling/components/types";

export interface FeaturedLink {
	icon?: ICON;
	theme?: THEME_COLOR;
	title: string;
	description: string;
	href: string;
	internal?: boolean;
}
