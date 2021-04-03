import groq from "groq";
import { SanityDocument } from "sanity-codegen";
import { Img, Metadata, Topic, Author } from "../../lib/schema";

export const articleListQuery = () => groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		_id,
		_createdAt,
		_rev,
		_updatedAt,

		_type,
		title,
		slug,
		topics[]->,
		author->,
		thumbnail,
		metadata,
	}
 `;

export interface ArticleListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	topics?: Array<Topic>;
	author: Author;
	thumbnail?: Img;
	metadata: Metadata;
}
