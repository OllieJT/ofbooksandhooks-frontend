import type { THEME_COLOR } from "@inqling/components/types";

export interface CardAuthor {
	name: string;
	avatar: string;
}

export interface CardTopic {
	name: string;
	color: THEME_COLOR;
}

export interface Card {
	href: string;
	title: string;
	excerpt: string;
	date: Date;
	topic: CardTopic;
	src?: string;
	author?: CardAuthor;
	duration?: string;
}
