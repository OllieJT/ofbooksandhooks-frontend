import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { ArticleList, ArticleListColumns } from "../../components/article-list";
import { useLoadMore } from "../../hooks/use-load-more";
import { getArticleList, ArticleListQuery } from "../../lib/groq/groq-article-list";
import { ViewSidebar } from "../../components/view";
import { ArticlePageSidebar } from "../../components/article-page/article-page-sidebar";
import { handleThemeColor, Theme } from "../../utility/handle-theme-color";
import {
	getPageArticles,
	PageArticlesArticleListQuery,
	PageArticlesCollectionListQuery,
	PageArticlesTopicListQuery,
} from "../../lib/groq/groq-page-articles";
import { resolveUrl } from "../../utility/resolve-url";
import { handleCollectionImages } from "../../utility/handle-collection-images";

interface Props {
	preview: boolean;
	//data: { articles: ArticleListQuery[] };
	articles: PageArticlesArticleListQuery[];
	collections: PageArticlesCollectionListQuery[];
	topics: PageArticlesTopicListQuery[];
}

export const AllPostsPage = ({
	// articles,
	collections,
	topics,
}: Props): React.ReactElement => {
	const handleFetch = (pageNum: number) => getArticleList(pageNum);
	const { entries, isLoading, nextPage } = useLoadMore<ArticleListQuery>(handleFetch);

	console.log({ topics });

	return (
		<>
			<NextSeo title="Articles" />
			<ViewSidebar
				sidebar={
					<ArticlePageSidebar
						collections={collections.map((collection) => ({
							title: collection.title,
							subtitle: "Featured Collection",
							linkTo: resolveUrl(collection),
							articles: handleCollectionImages(collection.articles),
							theme: handleThemeColor(collection.theme),
						}))}
						topics={topics.map((topic) => ({
							label: topic.title,
							linkTo: resolveUrl(topic),
							theme: Theme.Default,
						}))}
					/>
				}
			>
				<ArticleList
					articles={entries}
					isLoading={isLoading}
					onLoadMore={nextPage}
					columns={ArticleListColumns.Two}
				/>
			</ViewSidebar>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const articles = await getPageArticles(1, preview);

	return {
		props: {
			//data: { articles },
			preview,
			...articles,
		},
		revalidate: 1,
	};
};

export default AllPostsPage;
