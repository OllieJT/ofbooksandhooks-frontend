import { GroqArticleList } from "../../../lib/groq/article-list";
import { resolveUrl } from "../../../utility/resolve-url";
import { ArticleCard } from "../article-card";
import style from "./article-list.module.scss";

export enum ArticleListColumns {
	Two,
	Three,
	Four,
}

interface Props {
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
}: Props) => {
	return (
		<ul className={`${style.list} ${articleListColumnStyle(columns)}`}>
			{articles.map((article) => {
				return (
					<li key={article._id} className={style.item}>
						<ArticleCard
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
