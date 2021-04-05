import groq from "groq";
import { GroqCardArticle, groqCardArticle } from "./groq-partial-card";

export const groqArticleList = groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		${groqCardArticle}
	}
 `;

export type GroqArticleList = GroqCardArticle[];
