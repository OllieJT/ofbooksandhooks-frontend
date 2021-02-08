import styles from "./article-list.module.scss";
import { ArticleListQuery } from "../../lib/groq/groq-article-list";
import { LoadMore } from "../button";

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
			{articles.map((post) => {
				return (
					<li key={post._id} className={styles.item}>
						<pre>{JSON.stringify(post)}</pre>
					</li>
				);
			})}
			{loadMore && <LoadMore isLoading={isLoading} onClick={loadMore} />}
		</ul>
	);
};
