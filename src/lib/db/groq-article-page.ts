import groq from "groq";
import { Img, Metadata } from "../schema";
import {
	GroqSanityDocument,
	groqSanityDocument,
	groqSanityPlatform,
	GroqSanityPlatform,
} from "./groq";
import { GroqAnyCard, groqCardArticle, groqCardCollection } from "./groq-partial-card";

export const groqArticle = groq`*[
		_type == "article" && slug.current == $slug
	][0] {
		${groqSanityDocument}
		title,
		content[]{
			...,
			markDefs[]{...,reference->},
		},
		topics[]->{
			${groqSanityDocument}
			title,
			"slug":slug.current,
		},
		"slug":slug.current,
		thumbnail,
		metadata,
		recommended[]->{
			${groqCardArticle}
			${groqCardCollection}
		},
		author->{
			${groqSanityDocument}
			avatar,
			name,
			knownAs,
			"slug":slug.current,
			platforms[]{
				${groqSanityPlatform}
			}
		},
	}
 `;

export interface GroqArticle_Topic extends GroqSanityDocument<"topic"> {
	slug: string;
	title: string;
}
export interface GroqArticle_Author extends GroqSanityDocument<"author"> {
	name: string;
	knownAs: string;
	avatar: Img;
	platforms: GroqSanityPlatform[];
	slug: string;
}

export interface GroqArticle extends GroqSanityDocument<"article"> {
	topics: GroqArticle_Topic[];
	slug: string;
	thumbnail: Img;
	metadata: Metadata;
	title: string;
	content: any[];
	recommended: GroqAnyCard[];
	author: GroqArticle_Author;
}
