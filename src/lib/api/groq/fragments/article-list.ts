import type * as Schema from "$lib/api/sanity/schema";
import groq from "groq";

export type GroqArticleCard = Pick<
	Schema.Article,
	"_id" | "_type" | "tags" | "thumbnail" | "title"
> & {
	date: string;
	slug: string;
};

export const GroqArticleCardQuery = groq`
	_id,
	_type,
	tags,
	thumbnail,
	title,
	"slug":slug.current,
	"date": metadata.publishAt,
`;
