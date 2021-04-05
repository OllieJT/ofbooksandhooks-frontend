import groq from "groq";
import { Metadata } from "../schema";
import { GroqSanityDocument, groqSanityDocument } from "./groq";
import {
	GroqAnyCard,
	GroqCardArticle,
	groqCardArticle,
	groqCardCollection,
} from "./groq-partial-card";

export const groqHome = groq`*[
	_id == "homepage"
	] [0] {
		${groqSanityDocument}

		featured->{
			${groqCardArticle}
		},
		blocks[]->{
			${groqCardArticle}
			${groqCardCollection}
		},
		metadata,
	}
 `;

export interface GroqHome extends GroqSanityDocument<"homepage"> {
	featured: GroqCardArticle;
	blocks: GroqAnyCard[];
	metadata: Metadata;
}
