import groq from "groq";
import { Metadata } from "../schema";
import { GroqSanityDocument, groqSanityDocument } from "./groq";
import { GroqCardArticle, groqCardArticle } from "./groq-partial-card";

export const groqCollection = groq`*[
		_type == "collection" && slug.current == $slug
	][0] {
		${groqSanityDocument}
		title,
		metadata,
		"slug":slug.current,
		theme,
		articles[]->{
			${groqCardArticle}
		},
	}
 `;

export interface GroqCollection extends GroqSanityDocument<"collection"> {
	title: string;
	metadata: Metadata;
	slug: string;
	theme: string;
	articles: GroqCardArticle[];
}
