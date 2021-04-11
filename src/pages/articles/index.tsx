import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { ArticleList, ArticleListColumns } from "../../components/article-list";
import { useLoadMore } from "../../hooks/use-load-more";
import { getArticleList } from "../../lib/groq/groq-article-list";
import { ViewSidebar } from "../../components/view";
import { ArticlePageSidebar } from "../../components/article-page/article-page-sidebar";
import { handleThemeColor, Theme } from "../../utility/handle-theme-color";
import { getPageArticles } from "../../lib/groq/groq-page-articles";
import { resolveUrl } from "../../utility/resolve-url";
import { CardSize, handleCardCollection } from "../../components/card";
import { GroqArticleList } from "../../lib/db/groq-article-list";
import { GroqCollectionList } from "../../lib/db/groq-collection-list";
import { GroqTopicListLite } from "../../lib/db/groq-topic-list";
import { GroqCardArticle } from "../../lib/db/groq-partial-card";

interface Props {
	preview: boolean;
	articles: GroqArticleList;
	collections: GroqCollectionList;
	topics: GroqTopicListLite;
}

export const AllPostsPage = ({
	// articles,
	collections,
	topics,
}: Props): React.ReactElement => {
	const handleFetch = (pageNum: number) => getArticleList(pageNum);
	const { entries, isLoading, nextPage } = useLoadMore<GroqCardArticle>(handleFetch);

	return (
		<>
			<NextSeo title="Articles" />
			<ViewSidebar
				sidebar={
					<ArticlePageSidebar
						featureCollection={handleCardCollection({
							document: collections[0],
							size: CardSize.Small,
						})}
						collectionList={collections.map((collection) => ({
							label: collection.title,
							linkTo: resolveUrl({
								slug: collection.slug,
								type: collection._type,
							}),
							theme: handleThemeColor(collection.theme),
						}))}
						topicList={topics.map((topic) => ({
							label: topic.title,
							linkTo: resolveUrl({
								slug: topic.slug,
								type: topic._type,
							}),
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
	const { collections, topics } = await getPageArticles(preview);

	return {
		props: {
			//data: { articles },
			preview,

			collections,
			topics,
		},
		revalidate: 1,
	};
};

export default AllPostsPage;
