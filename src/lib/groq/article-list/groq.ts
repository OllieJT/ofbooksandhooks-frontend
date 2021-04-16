import groq from "groq";
import { GroqArticleCard } from "../models";

export type GroqArticleList = GroqArticleCard[];

interface Props {
	from: number;
	to: number;
	client: import("picosanity").PicoSanity;
}

export const groqArticleList = async ({ from, to, client }: Props) =>
	client.fetch<GroqArticleList>(
		groq`*[
			_type == "article"
			&& defined(slug)
			&& defined(metadata.publishAt)
			&& metadata.publishAt <= now()
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
	 `,
		{ from, to },
	);
