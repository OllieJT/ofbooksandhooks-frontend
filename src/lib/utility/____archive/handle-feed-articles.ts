import type { FeedItem, FeedItemArticle } from "@components/common/feed";
import type { GroqArticleList } from "@lib/groq/article-list";
import { resolveUrl } from "../resolve-url";

export function handleFeedArticles(articles: GroqArticleList): FeedItem[] {
	return articles.map((article) => {
		const feedItem: FeedItemArticle = {
			type: "article",
			key: article._id,
			card: {
				title: article.title,
				href: resolveUrl({ slug: article.slug, type: article._type }),
				date: new Date(article.date),
				image: article.thumbnail,
				tags: article.tags.map((tag) => tag.label),
			},
		};

		return feedItem;
	});
}
