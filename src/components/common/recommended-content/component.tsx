import style from "./styles.module.scss";

import type { GroqArticlePage_Recommended } from "@lib/groq/article-page";
import { resolveUrl } from "@lib/utility/resolve-url";
import { CardArticle } from "../../card/card-article";
import { CardCollection } from "@components/card/card-collection";
import { handleThemeClass } from "@lib/utility/handle-theme-color";

interface Props {
	recommendations?: GroqArticlePage_Recommended[];
}

export const RecommendedContent = ({ recommendations }: Props) => {
	return (
		<ul className={style.list}>
			{recommendations?.map((rec) => {
				switch (rec._type) {
					case "article":
						const topics = rec.topics.map((topic) => topic.title);

						if (topics.length > 3) {
							topics.length = 3;
						}
						return (
							<li className={style.listItem}>
								<CardArticle
									title={rec.title}
									// subtitle={collection}
									href={resolveUrl({
										slug: rec.slug.current,
										type: rec._type,
									})}
									date={new Date(rec.metadata.publishAt)}
									image={rec.thumbnail}
									tags={topics}
								/>
							</li>
						);
					case "collection":
						const themeClass = handleThemeClass(rec.theme);
						const collectionArticles = rec.articles.map((article) => ({
							key: article._id,
							title: article.title,
							tags: article.topics?.map((topic) => topic.title),
						}));
						return (
							<li className={style.listItem}>
								<CardCollection
									theme={themeClass}
									title={rec.title}
									href={resolveUrl({
										slug: rec.slug.current,
										type: rec._type,
									})}
									articles={collectionArticles}
								/>
							</li>
						);
				}
			})}
		</ul>
	);
};
