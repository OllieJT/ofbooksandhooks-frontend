import groq from "groq";
import { Img, Metadata } from "../schema";
import { groqSanityDocument, GroqSanityDocument } from "./groq";

export type GroqAnyCard = GroqCardArticle | GroqCardCollection;

export const groqCardArticle = groq`
	${groqSanityDocument},
	title,
	topics[]->{
		${groqSanityDocument},
		title,
		"slug":slug.current,
	},
	"slug":slug.current,
	thumbnail,
	metadata,
 `;

export interface GroqCardArticle_Topic extends GroqSanityDocument<"topic"> {
	slug: string;
	title: string;
}
export interface GroqCardArticle extends GroqSanityDocument<"article"> {
	topics: GroqCardArticle_Topic[];
	slug: string;
	thumbnail: Img;
	metadata: Metadata;
	title: string;
}

export const groqCardCollection = groq`
	${groqSanityDocument},
	title,
	metadata,
	"slug":slug.current,
	theme,
	articles[0...4]->{
		${groqSanityDocument},
		title,
		"slug":slug.current,
		thumbnail,
	},
 `;

export interface GroqCardCollection_Article extends GroqSanityDocument<"article"> {
	title: string;
	slug: string;
	thumbnail: Img;
}
export interface GroqCardCollection extends GroqSanityDocument<"collection"> {
	title: string;
	metadata: Metadata;
	slug: string;
	theme: string;
	articles: GroqCardCollection_Article[];
}
