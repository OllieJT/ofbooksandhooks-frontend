import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { SidebarTaxonomy } from "@components/common/sidebar";
import { getArticleList, groqArticleList, GroqArticleList } from "../../lib/groq/article-list";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { ButtonText } from "@components/button/button-text";
import { LayoutSidebar } from "@components/layout/layout-sidebar";
import { Feed, FeedColumns } from "@components/common/feed";
import { handleFeedArticles } from "@lib/utility/handle-feed-articles";

interface Props {
	preview: boolean;
	articles: GroqArticleList;
}

export const AllPostsPage = ({ articles }: Props): React.ReactElement => {
	const handleFetch = fetchArticleList({
		id: "article-list",
		fetchDocs: groqArticleList,
		initialData: articles,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<LayoutSidebar sidebar={<SidebarTaxonomy />}>
				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Feed
							key={"articles-page" + page}
							items={handleFeedArticles(data)}
							columns={FeedColumns.Two}
						/>
					);
				})}

				<ButtonText
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
					label="Load More"
				/>
			</LayoutSidebar>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const { articles } = await getArticleList(1, preview);

	return {
		props: {
			preview,

			articles,
		},
		revalidate: 1,
	};
};

export default AllPostsPage;
