import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { getArticleList, groqArticleList, GroqArticleList } from "@lib/groq/article-list";
import { useInfiniteList } from "@hooks/use-infinite-list";
import { ButtonText } from "@components/button/button-text";
import { LayoutSidebar } from "@components/layout/layout-sidebar";
import { Feed, FeedColumns } from "@components/common/feed";

interface Props {
	preview: boolean;
	articles: GroqArticleList;
}

export const HomePage = ({ articles }: Props): React.ReactElement => {
	const handleFetch = useInfiniteList({
		id: "article-list",
		fetchDocs: groqArticleList,
		initialData: articles,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<LayoutSidebar>
				{handleFetch.data?.pages.map(({ data, page }) => {
					console.log({ data });
					return (
						<Feed
							key={"articles-page" + page}
							items={data}
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

export default HomePage;
