import groq from "groq";
import { groqTagTopic, GroqTagTopic } from "./groq-partial-tag";

/* export const groqCollectionList = groq`*[
	_type == "collection"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		${groqCardCollection}
	}
 `;

export type GroqCollectionList = GroqCardCollection[]; */

export const groqTopicListLite = groq`*[
	_type == "topic"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(title desc) [$from...$to] {
		${groqTagTopic}
	}
 `;

export type GroqTopicListLite = GroqTagTopic[];
