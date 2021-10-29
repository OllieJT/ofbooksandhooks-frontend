import style from "./article-list.module.scss";
import { resolveUrl } from "@lib/utility/resolve-url";
import type { GroqCollectionList } from "@lib/groq/collection-list";
import { handleThemeColor } from "@lib/utility/handle-theme-color";
import { CardList, CardListColumns } from "../../card-list";
import { CollectionCard } from "../collection-card";

export interface CollectionListProps {
	collections: GroqCollectionList;
	columns?: CardListColumns;
}

export const CollectionList = ({
	collections,
	columns = CardListColumns.Three,
}: CollectionListProps) => {
	return (
		<CardList columns={columns}>
			{collections.map((collection) => {
				const themeClass = handleThemeColor(collection.theme);
				const collectionArticles = collection.articles.map(
					(article) => article.thumbnail,
				);

				return (
					<li key={collection._id} className={style.item}>
						<CollectionCard
							theme={themeClass}
							title={collection.title}
							// subtitle={collection}
							linkTo={resolveUrl({
								slug: collection.slug.current,
								type: collection._type,
							})}
							images={collectionArticles}
						/>
					</li>
				);
			})}
		</CardList>
	);
};
