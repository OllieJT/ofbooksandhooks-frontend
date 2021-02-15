import style from "./styles.module.scss";
import { TagList, TagProps } from "../../tag";
import { Collection, CollectionProps } from "../../collection";
import { useArrayFeature } from "../../layout/layout-logo/handle-array-feature";

export interface ArticlePageSidebarProps {
	collections?: CollectionProps[];
	topics?: TagProps[];
}

export const ArticlePageSidebar = ({
	collections,
	topics,
}: ArticlePageSidebarProps) => {
	const collection = collections && useArrayFeature(collections);

	return (
		<aside className={style.container}>
			{collection?.featured && <Collection {...collection.featured} />}

			{collection && (
				<TagList
					title="Collections"
					tags={collection?.items.map(({ linkTo, title, theme }) => ({
						label: title,
						theme,
						linkTo,
					}))}
				/>
			)}

			{topics && <TagList title="Topics" tags={topics} />}
		</aside>
	);
};
