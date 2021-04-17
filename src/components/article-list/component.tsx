import { GroqArticleList } from "../../lib/groq/article-list";
import { resolveUrl } from "../../utility/resolve-url";
import { Card, CardSize, CardType } from "../card";
import style from "./article-list.module.scss";

export enum ArticleListColumns {
	Two,
	Three,
	Four,
}

export interface ArticleListProps {
	articles: GroqArticleList;
	columns?: ArticleListColumns;
}

const articleListColumnStyle = (columns: ArticleListColumns) => {
	switch (columns) {
		case ArticleListColumns.Two:
			return style.two;
		case ArticleListColumns.Three:
			return style.three;
		case ArticleListColumns.Four:
			return style.four;
	}
};

export const ArticleList = ({
	articles,
	columns = ArticleListColumns.Three,
}: ArticleListProps) => {
	return (
		<ul className={`${style.list} ${articleListColumnStyle(columns)}`}>
			{articles.map((article) => {
				return (
					<li key={article._id} className={style.item}>
						<Card
							type={CardType.Article}
							size={CardSize.Small}
							title={article.title}
							// subtitle={collection}
							linkTo={resolveUrl({
								slug: article.slug.current,
								type: article._type,
							})}
							publishAt={new Date(article.metadata.publishAt)}
							image={article.thumbnail}
							tags={["Tag", "Here"]}
						/>
					</li>
				);
			})}
		</ul>
	);
};
