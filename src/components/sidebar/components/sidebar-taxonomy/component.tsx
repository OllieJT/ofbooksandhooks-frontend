import style from "./styles.module.scss";
import { TagList, TagProps } from "../../../tag";
import { CardCollection, CardSize, handleCardCollection } from "../../../card";
import { AuthorBio } from "../../../author-bio";
import { useSettings } from "../../../../providers/settings";
import { useTaxonomy } from "../../../../providers/taxonomy";
import { resolveUrl } from "../../../../utility/resolve-url";
import { handleThemeColor, Theme } from "../../../../utility/handle-theme-color";
import { memo } from "react";

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

	const featureCollection =
		collection &&
		handleCardCollection({
			document: collection,
			size: CardSize.Small,
		});

	return (
		<>
			{featureCollection && <CardCollection {...featureCollection} />}

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
