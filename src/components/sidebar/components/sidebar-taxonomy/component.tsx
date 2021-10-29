import { TagList, TagProps } from "../../../tag";
import { AuthorBio } from "../../../author-bio";
import { useSettings } from "@lib/providers/settings";
import { useTaxonomy } from "@lib/providers/taxonomy";
import { resolveUrl } from "@lib/utility/resolve-url";
import { handleThemeColor, Theme } from "@lib/utility/handle-theme-color";
import { memo } from "react";
import { CollectionCard } from "../../../collection";

const SidebarTaxonomyComponent = () => {
	const {
		biography,
		featured: { collection },
	} = useSettings();
	const { topics, collections } = useTaxonomy();

	const collectionTags: TagProps[] = collections.map((collection) => ({
		label: collection.title,
		linkTo: resolveUrl({
			slug: collection.slug.current,
			type: collection._type,
		}),
		theme: handleThemeColor(collection.theme),
	}));

	const topicTags: TagProps[] = topics.map((topic) => ({
		label: topic.title,
		linkTo: resolveUrl({
			slug: topic.slug.current,
			type: topic._type,
		}),
		theme: Theme.Default,
	}));

	return (
		<>
			{collection && (
				<CollectionCard
					theme={handleThemeColor(collection.theme)}
					title={collection?.title}
					//subtitle
					linkTo={resolveUrl({
						slug: collection.slug.current,
						type: collection._type,
					})}
					images={collection.articles.map((article) => article.thumbnail)}
				/>
			)}

			{biography.title && biography.description && (
				<AuthorBio
					title={biography.title}
					subtitle={biography.description}
					avatar={biography.photo}
					//cta={{label: "Learn More", url: '/about'}}
				/>
			)}

			<TagList title="Collections" tags={collectionTags} />
			<TagList title="Topics" tags={topicTags} />
		</>
	);
};
export const SidebarTaxonomy = memo(SidebarTaxonomyComponent);
