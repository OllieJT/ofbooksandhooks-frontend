import type { GroqArticleCard } from "$lib/api/groq/fragments/article-list";
import { urlFor } from "$lib/api/sanity/client";
import type { Card } from "$lib/components/card/part/types";
import { colorFromTag } from "../color-from-tag";

export function transformArticleCard(article: GroqArticleCard): Card {
	const tags = article.tags || [];
	return {
		href: `/articles/${article.slug}`,
		title: article.title,
		date: new Date(article.date),
		tags: tags.map((x) => ({
			name: x.label,
			color: colorFromTag(x.value),
		})),
		src: article.thumbnail ? urlFor(article.thumbnail).width(400).url() : undefined,
		author: undefined,
		duration: undefined,
		excerpt: "",
	};
}
