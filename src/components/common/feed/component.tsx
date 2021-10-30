import { CardArticle, CardArticleProps } from "@components/card/card-article";
import type { CardCollectionProps } from "@components/card/card-collection";
import style from "./article-list.module.scss";

export enum FeedColumns {
	Two,
	Three,
	Four,
}

interface FeedItemShape<Type, Props> {
	key: string;
	type: Type;
	card: Props;
}

export type FeedItemArticle = FeedItemShape<"article", CardArticleProps>;
export type FeedItemCollection = FeedItemShape<"collection", CardCollectionProps>;

export type FeedItem = FeedItemArticle | FeedItemCollection;

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
	return (
		<ul className={classNames}>
			{items.map(({ key, type, card }) => {
				switch (type) {
					case "article":
						return (
							<li key={key} className={style.item}>
								<CardArticle {...card} />
							</li>
						);
				}
			})}
		</ul>
	);
};
