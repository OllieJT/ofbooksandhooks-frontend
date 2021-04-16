import groq from "groq";
import { GroqCollectionToken } from "../models";

export type GroqCollectionListTokens = GroqCollectionToken[];

interface Props {
	from: number;
	to: number;
	client: import("picosanity").PicoSanity;
}

export const groqCollectionTokens = async ({ from, to, client }: Props) =>
	client.fetch<GroqCollectionListTokens>(
		groq`*[
				_type == "collection"
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

				theme,
				articles[]->{slug},
			}
		`,
		{ from, to },
	);
