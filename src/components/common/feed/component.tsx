import { CardArticle } from "@components/card/card-article";
import { CardCollection } from "@components/card/card-collection";

import type { GroqArticleCard } from "@lib/groq/article-list";
import type { GroqCollectionCard } from "@lib/groq/collection-list";
import { handleThemeClass } from "@lib/utility/handle-theme-color";
import { resolveUrl } from "@lib/utility/resolve-url";
import style from "./article-list.module.scss";

export enum FeedColumns {
	Two,
	Three,
	Four,
}

export type FeedItem = GroqArticleCard | GroqCollectionCard;

interface Props {
	items: FeedItem[];
	columns?: FeedColumns;
}

const articleListColumnStyle = (columns: FeedColumns) => {
	switch (columns) {
		case FeedColumns.Two:
			return style.two;
		case FeedColumns.Three:
			return style.three;
		case FeedColumns.Four:
			return style.four;
	}
};

export const Feed = ({ items, columns = FeedColumns.Three }: Props) => {
	const classNames = [style.list, articleListColumnStyle(columns)].join(" ");
	let href = "";

	return (
		<ul className={classNames}>
			{items.map((item) => {
				switch (item._type) {
					case "article":
						href = resolveUrl({ slug: item.slug, type: item._type });
						const date = new Date(item.date);
						const tags = item.tags.map((tag) => tag.label);

						return (
							<li key={item._id} className={style.item}>
								<CardArticle
									href={href}
									title={item.title}
									date={date}
									image={item.thumbnail}
									tags={tags}
									// theme={item.theme}
								/>
							</li>
						);
						break;
					case "collection":
						href = resolveUrl({ slug: item.slug, type: item._type });
						const subtitle = "";
						const theme = handleThemeClass(item.theme);

						return (
							<li key={item._id} className={style.item}>
								<CardCollection
									href={href}
									title={item.title}
									subtitle={subtitle}
									articles={item.articles}
									theme={theme}
								/>
							</li>
						);
				}
			})}
		</ul>
	);
};
