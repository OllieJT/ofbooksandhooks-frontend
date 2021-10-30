import type { FeedItem, FeedItemCollection } from "@components/common/feed";
import { resolveUrl } from "./resolve-url";
import type { GroqCollectionList } from "@lib/groq/collection-list";
import { handleThemeColor } from "./handle-theme-color";

export function handleFeedCollections(collections: GroqCollectionList): FeedItem[] {
	return collections.map((collection) => {
		const theme = handleThemeColor(collection.theme);
		const images = collection.articles.map((article) => article.thumbnail);

		const feedItem: FeedItemCollection = {
			type: "collection",
			key: collection._id,
			card: {
				theme,
				title: collection.title,
				href: resolveUrl({ slug: collection.slug.current, type: collection._type }),
				images,
			},
		};

		return feedItem;
	});
}
