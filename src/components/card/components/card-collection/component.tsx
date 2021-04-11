import style from "./styles.module.scss";
import Link from "next/link";
import { FluidImage } from "../../../../utility/handle-sanity-image";
import { CardTitle } from "../../common";

export enum CardArticleComponentLayout {
	Row,
	Grid,
	Stack,
}
export interface CardCollectionComponentProps {
	title: string;
	subtitle: string;
	linkTo: string;
	articles: FluidImage[];
	layout?: CardArticleComponentLayout;
}

const handleLayoutClassName = (layout: CardArticleComponentLayout) => {
	switch (layout) {
		case CardArticleComponentLayout.Grid:
			return style.grid;
		case CardArticleComponentLayout.Row:
			return style.row;
		case CardArticleComponentLayout.Stack:
			return style.stack;
	}
};

export const CardCollectionComponent = ({
	title,
	subtitle,
	articles,
	linkTo,
	layout = CardArticleComponentLayout.Grid,
}: CardCollectionComponentProps) => {
	const layoutClassName = handleLayoutClassName(layout);
	return (
		<Link href={linkTo} passHref>
			<a className={style.container}>
				<CardTitle className={style.title} title={title} subtitle={subtitle} />

				<ul className={`${style.articles} ${layoutClassName}`}>
					{articles.map((image) => (
						<li key={image.url}>
							<img src={image.url} alt={image.alt} />
						</li>
					))}
				</ul>
			</a>
		</Link>
	);
};
