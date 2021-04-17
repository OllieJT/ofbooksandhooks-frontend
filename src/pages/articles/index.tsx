import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { ArticleList, ArticleListColumns } from "../../components/article-list";
import { ViewSidebar } from "../../components/view";
import { ArticlePageSidebar } from "../../components/article-page/article-page-sidebar";
import { handleThemeColor, Theme } from "../../utility/handle-theme-color";
import { resolveUrl } from "../../utility/resolve-url";
import { CardSize, handleCardCollection } from "../../components/card";
import {
	getArticleList,
	groqArticleList,
	GroqArticleList,
} from "../../lib/groq/article-list";
import { GroqCollectionList } from "../../lib/groq/collection-list/groq";
import { GroqTopicList } from "../../lib/groq/topic-list/groq";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { Fragment } from "react";
import { LoadMore } from "../../components/button";

interface Props {
	preview: boolean;

	articles: GroqArticleList;
	collections: GroqCollectionList;
	topics: GroqTopicList;
}

export const AllPostsPage = ({
	articles,
	collections,
	topics,
}: Props): React.ReactElement => {
	const handleFetch = fetchArticleList({
		id: "article-list",
		fetchDocs: groqArticleList,
		initialData: articles,
	});

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
								slug: collection.slug.current,
								type: collection._type,
							}),
							theme: handleThemeColor(collection.theme),
						}))}
						topicList={topics.map((topic) => ({
							label: topic.title,
							linkTo: resolveUrl({
								slug: topic.slug.current,
								type: topic._type,
							}),
							theme: Theme.Default,
						}))}
					/>
				}
			>
				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Fragment key={"articles" + page}>
							<ArticleList
								articles={data}
								columns={ArticleListColumns.Two}
							/>
						</Fragment>
					);
				})}

				<LoadMore
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
				/>
			</ViewSidebar>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const { articles, collections, topics } = await getArticleList(1, preview);

	return {
		props: {
			preview,

			articles,
			collections,
			topics,
		},
		revalidate: 1,
	};
};

export default AllPostsPage;
