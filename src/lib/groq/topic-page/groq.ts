import groq from "groq";
import type { GroqArticleCard } from "../models";
import type * as Schema from "../models/schema";

export type GroqTopicPage = Omit<Schema.Collection, "articles"> & {
	articles: GroqArticleCard[];
};

interface TopicProps {
	slug: string;
	client: import("@sanity/client").SanityClient;
}

export const groqTopicPage = async ({ slug, client }: TopicProps) =>
	client.fetch<GroqTopicPage>(
		groq`*[_type == "topic" && slug.current == $slug][0]
			{...}
		`,
		{ slug },
	);

export type GroqTopic_ArticleList = GroqArticleCard[];

interface ArticlesProps {
	slug: string;
	from: number;
	to: number;
	client: import("@sanity/client").SanityClient;
}

export const groqTopicArticleListQuery = groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	&& $slug in topics[]->.slug.current
] | order(publishAt desc) [$from...$to]
{
	_id,
	_type,
	_createdAt,

	title,
	slug,
	metadata,

	thumbnail,
	topics[]->,
}
`;

export const groqTopicArticleList = async ({ slug, from, to, client }: ArticlesProps) =>
	client.fetch<GroqTopic_ArticleList>(groqTopicArticleListQuery, { slug, from, to });
