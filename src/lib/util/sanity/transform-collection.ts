import type { GroqCollectionCard } from "$lib/api/groq/collection-list";
import type { Card } from "$lib/components/card/part/types";
import type { FeaturedLink } from "$lib/components/featured-link/part/types";
import Collection from "@inqling/svelte-icons/solid/collection.svelte";
import { colorFromTag } from "../color-from-tag";

export function transformCollectionCard(collection: GroqCollectionCard): Omit<Card, "src"> {
	const tags = collection.tags || [];
	return {
		href: `/collections/${collection.slug}`,
		title: collection.title,
		date: new Date(collection.date),
		tags: tags.map((x) => ({
			name: x.label,
			color: colorFromTag(x.value),
		})),
		author: undefined,
		duration: undefined,
		excerpt: "",
	};
}

/* function handleCollectionTheme(slug: string): "primary" | "secondary" | "mono" {
	switch (slug) {
		case "books":
			return "primary";
		case "hooks":
			return "secondary";
		default:
			return "mono";
	}
} */

export function transformCollectionLink(collection: GroqCollectionCard): FeaturedLink {
	return {
		icon: Collection,
		title: collection.title,
		description: "Something here",
		href: `/collections/${collection.slug}`,
		theme: collection.theme || "mono",
		internal: true,
	};
}
