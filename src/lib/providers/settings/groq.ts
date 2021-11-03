import groq from "groq";
import { getClient } from "../../sanity";
import type * as Schema from "@lib/groq/models/schema";
import flatten from "just-flatten-it";
import unique from "just-unique";
import type { MenuLink } from ".";

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
	tags: Schema.Tags;
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

	const tags = settings.tags ? flatten(settings.tags) : [];

	const Output: GroqSettings = {
		...settings,
		tags: unique(tags),
	};

	return Output;
};
