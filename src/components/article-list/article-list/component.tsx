import style from "./article-list.module.scss";
import { ArticleListQuery } from "../../../lib/groq/groq-article-list";
import { LoadMore } from "../../button";
import { ArticleListCard } from "../article-list-card";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import { resolveUrl } from "../../../utility/resolve-url";
import { handleDate } from "../../../utility";

export enum ArticleListColumns {
	Two,
	Three,
	Four,
}

export interface ArticleListProps {
	articles: ArticleListQuery[];
	onLoadMore?: () => void;
	isLoading?: boolean;
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
	onLoadMore: loadMore,
	isLoading = false,
	columns = ArticleListColumns.Three,
}: ArticleListProps) => {
	return (
		<ul className={`${style.list} ${articleListColumnStyle(columns)}`}>
			{articles.map((article) => {
				const image =
					article.thumbnail &&
					handleSanityImage(article.thumbnail, {
						width: 400,
						height: 400,
						fit: "max", //min
					});

				return (
					<li key={article._id} className={style.item}>
						<ArticleListCard
							link={resolveUrl(article)}
							title={article.title}
							date={handleDate(new Date(article.metadata.publishAt))}
							image={image?.url}
							tags={["Tag", "Here"]}
						/>
					</li>
				);
			})}
			{loadMore && <LoadMore isLoading={isLoading} onClick={loadMore} />}
		</ul>
	);
};
