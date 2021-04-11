import groq from "groq";
import { Metadata } from "../schema";
import { groqSanityDocument, GroqSanityDocument } from "./groq";

export type GroqAnyTag = GroqTagCollection;

export const groqTagCollection = groq`
	${groqSanityDocument}
	title,
	metadata,
	"slug":slug.current,
	theme,
	"articles": articles[]->{title}.title,
 `;
export interface GroqTagCollection extends GroqSanityDocument<"collection"> {
	title: string;
	metadata: Metadata;
	slug: string;
	theme: string;
	articles: string;
}

export const groqTagTopic = groq`
	${groqSanityDocument}
	title,
	metadata,
	"slug":slug.current,
 `;
export interface GroqTagTopic extends GroqSanityDocument<"topic"> {
	title: string;
	metadata: Metadata;
	slug: string;
}
