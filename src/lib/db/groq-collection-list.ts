import groq from "groq";
import { GroqCardCollection, groqCardCollection } from "./groq-partial-card";
import { GroqTagCollection, groqTagCollection } from "./groq-partial-tag";

export const groqCollectionList = groq`*[
	_type == "collection"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		${groqCardCollection}
	}
 `;

export type GroqCollectionList = GroqCardCollection[];

export const groqCollectionListLite = groq`*[
	_type == "collection"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		${groqTagCollection}
	}
 `;

export type GroqCollectionListLite = GroqTagCollection[];
