import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { ViewSidebar } from "@components/view";
import { SidebarTaxonomy } from "@components/sidebar";
import { getArticleList, groqArticleList, GroqArticleList } from "@lib/groq/article-list";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { Button } from "@components/button";
import { ArticleList, ArticleListColumns } from "@components/article";

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
			<ViewSidebar sidebar={<SidebarTaxonomy />}>
				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<ArticleList
							key={"articles-page" + page}
							articles={data}
							columns={ArticleListColumns.Two}
						/>
					);
				})}

				<Button
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
					label="Load More"
				/>
			</ViewSidebar>
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
