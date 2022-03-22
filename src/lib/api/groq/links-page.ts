import groq from "groq";
import { client } from "$lib/api/sanity/client";
import type * as Schema from "$lib/api/sanity/schema";
import { GroqArticleCardQuery, type GroqArticleCard } from "./fragments/article-list";

export type GroqLinkPage = Pick<
	Schema.Linkpage,
	"_id" | "_type" | "_updatedAt" | "title" | "links"
> & {
	recommended: GroqArticleCard[];
};

interface Props {
	slug: string;
	client: import("@sanity/client").SanityClient;
}

export async function groqLinkPage({ slug, client }: Props) {
	return client.fetch<GroqLinkPage>(
		groq`*[_type == "linkpage"][0]
			{
				_id,
				_type,
				_updatedAt,
				title,
				links,

				"recommended": *[
						_type == "article"
						&& metadata.publishAt <= now()
					] | order(publishAt desc)[0...3] {
						${GroqArticleCardQuery}
					},
			}
		`,
		{ slug },
	);
}

export const getLinkPage = async (slug: string) => {
	const linkpage = await groqLinkPage({ client, slug });

	return linkpage;
};
