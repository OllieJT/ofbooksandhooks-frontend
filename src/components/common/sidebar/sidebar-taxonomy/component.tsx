import { TagList, TagProps } from "../../tag";
import { CardAuthor } from "../../../card/card-author";
import { useSettings } from "@lib/providers/settings";
import { resolveUrl } from "@lib/utility/resolve-url";
import { memo } from "react";
import { CardCollection } from "@components/card/card-collection";
import { handleThemeClass } from "@lib/utility/handle-theme-color";

const SidebarTaxonomyComponent = () => {
	const {
		biography,
		featured: { collection },
		taxonomy,
	} = useSettings();
	const { topics, collections } = taxonomy;

	const collectionTags: TagProps[] = collections.map((collection) => ({
		label: collection.title,
		linkTo: resolveUrl({
			slug: collection.slug.current,
			type: collection._type,
		}),
		theme: handleThemeClass(collection.theme),
	}));

	const topicTags: TagProps[] = topics.map((topic) => ({
		label: topic.title,
		linkTo: resolveUrl({
			slug: topic.slug.current,
			type: topic._type,
		}),
	}));

	return (
		<>
			{collection && (
				<CardCollection
					theme={handleThemeClass(collection.theme)}
					title={collection.title}
					href={resolveUrl({
						slug: collection.slug.current,
						type: collection._type,
					})}
					articles={collection.articles.map((article) => ({
						key: article._id,
						title: article.title,
						tags: article.topics?.map((topic) => topic.title),
					}))}
				/>
			)}

			{biography.title && biography.description && (
				<CardAuthor
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
