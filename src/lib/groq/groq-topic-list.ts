import { groq } from "next-sanity";
import { Metadata, SanityDocument } from "../schema";
import { getClient } from "../sanity.server";

export const topicListQuery = groq`*[
	_type == "topic"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(title desc)  {
		_id,
		_createdAt,
		_rev,
		_updatedAt,

		_type,
		title,
		slug,
		metadata,
	}
 `;

export interface TopicListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	metadata: Metadata;
}

export const getTopicList = async (preview = false) => {
	const data: TopicListQuery[] = await getClient(preview).fetch(topicListQuery);

	return data;
};
