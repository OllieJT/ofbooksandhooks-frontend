import type { FeedItem, FeedItemArticle } from "@components/common/feed";
import type { GroqArticleList } from "@lib/groq/article-list";
import { resolveUrl } from "./resolve-url";
import split from "just-split";

export function handleFeedArticles(articles: GroqArticleList): FeedItem[] {
	return articles.map(({ _id, _type, title, topics, slug, metadata, thumbnail }) => {
		const topicTitles = topics.map((topic) => topic.title);

		const feedItem: FeedItemArticle = {
			type: "article",
			key: _id,
			card: {
				title: title,
				href: resolveUrl({ slug: slug.current, type: _type }),
				date: new Date(metadata.publishAt),
				image: thumbnail,
				tags: split(topicTitles, 3)[0],
			},
		};

		return feedItem;
	});
}
