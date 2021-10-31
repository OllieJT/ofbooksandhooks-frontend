import style from "./styles.module.scss";
import Link from "next/link";
import { handleThemeClass, ThemeClass } from "@lib/utility/handle-theme-color";
import { CardDetails } from "../common/card-details";

export interface CardCollectionArticleProps {
	key: string;
	title: string;
	tags?: string[];
}

export interface CardCollectionProps {
	href: string;
	title: string;
	subtitle?: string;
	articles: CardCollectionArticleProps[];

	theme?: ThemeClass;
}

export const CardCollection = (props: CardCollectionProps) => {
	const classNames = [style.container, props.theme ? handleThemeClass(props.theme) : ""].join(
		" ",
	);

	return (
		<Link href={props.href} passHref>
			<a className={classNames}>
				<CardDetails title={props.title} metadata={[props.subtitle ?? "Collection"]} />

				<ul className={style.articles}>
					{props.articles.map((article) => (
						<li key={article.key}>
							<CardDetails
								title={article.title}
								tags={article.tags}
								size="small"
							/>
						</li>
					))}
				</ul>
			</a>
		</Link>
	);
};
