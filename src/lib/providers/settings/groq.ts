import groq from "groq";
import { getClient } from "../../sanity";
import type * as Schema from "@lib/groq/models/schema";
import flatten from "just-flatten-it";
import unique from "just-unique";
import type { MenuLink } from ".";
import { slugify } from "@lib/utility";
import type { TagProps } from "@components/common/tag";

type FetchSettings = Omit<
	Schema.Settings,
	"profile" | "navigation_pinned" | "navigation_menu"
> & {
	navigation_pinned: MenuLink[];
	navigation_menu: MenuLink[];
	profile: Schema.Person;
	tags: Schema.Tags[];
};
export type GroqSettings = Omit<FetchSettings, "tags"> & {
	tags: TagProps[];
};

export const getSettings = async (preview = false) => {
	const client = getClient(preview);

	const settings = await client.fetch<FetchSettings>(
		groq`
			*[_type == "settings"][0]{
				navigation_menu[]{...,page->{id,_type,slug,title}},
				navigation_pinned[]{...,page->{id,_type,slug,title}},
				profile->{...},
				"tags": *[_type == "article" && defined(tags)].tags
			}
		`,
		{},
	);

	const flattenedTags = settings.tags && flatten(settings.tags);
	const uniqueTags = flattenedTags.reduce((prev, current) => {
		const exists = prev.find((x) => x.value === current.value);
		if (exists) return prev;
		return [...prev, current];
	}, [] as Schema.Tag[]);

	const tags: TagProps[] = uniqueTags.map((tag) => ({
		label: tag.label,
		value: tag.value,
		href: "/tag/" + slugify(tag.value),
	}));

	const Output: GroqSettings = {
		...settings,
		tags: unique(tags),
	};

	return Output;
};
