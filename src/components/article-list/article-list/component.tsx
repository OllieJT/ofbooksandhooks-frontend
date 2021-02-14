import styles from "./article-list.module.scss";
import { ArticleListQuery } from "../../../lib/groq/groq-article-list";
import { LoadMore } from "../../button";
import { ArticleListCard } from "../article-list-card";
import { handleSanityImage } from "../../../utility/handle-sanity-image";
import { resolveUrl } from "../../../utility/resolve-url";
import { handleDate } from "../../../utility";

export interface ArticleListProps {
	articles: ArticleListQuery[];
	onLoadMore?: () => void;
	isLoading?: boolean;
}

export const ArticleList = ({
	articles,
	onLoadMore: loadMore,
	isLoading = false,
}: ArticleListProps) => {
	return (
		<ul className={styles.list}>
			{articles.map((article) => {
				const image =
					article.thumbnail &&
					handleSanityImage(article.thumbnail, {
						width: 400,
						height: 400,
						alt: article.thumbnail.alt,
						fit: "max", //min
					});

				return (
					<li key={article._id} className={styles.item}>
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
