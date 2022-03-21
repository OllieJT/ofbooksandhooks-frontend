import groq from "groq";
import { client } from "$lib/api/sanity/client";
import type * as Schema from "$lib/api/sanity/schema";

export type GroqLinkPage = Pick<
	Schema.Linkpage,
	"_id" | "_type" | "_updatedAt" | "title" | "links"
>;

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
				links
			}
		`,
		{ slug },
	);
}

export const getLinkPage = async (slug: string) => {
	const linkpage = await groqLinkPage({ client, slug });

	return linkpage;
};
