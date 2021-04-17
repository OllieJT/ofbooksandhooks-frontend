import style from "./card-list.module.scss";

export enum CardListColumns {
	Two,
	Three,
	Four,
}

export interface CollectionListProps {
	children: React.ReactNode;
	columns?: CardListColumns;
}

const cardListColumnStyle = (columns: CardListColumns) => {
	switch (columns) {
		case CardListColumns.Two:
			return style.two;
		case CardListColumns.Three:
			return style.three;
		case CardListColumns.Four:
			return style.four;
	}
};

export const CardList = ({
	children,
	columns = CardListColumns.Three,
}: CollectionListProps) => {
	return (
		<ul className={`${style.list} ${cardListColumnStyle(columns)}`}>{children}</ul>
	);
};
