import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { groqCollectionList, GroqCollectionList } from "@lib/groq/collection-list/groq";
import { fetchArticleList } from "../../hooks/fetch-infinite-list";
import { ButtonText } from "@components/button/button-text";
import { getCollectionList } from "@lib/groq/collection-list";
import { LayoutSimple } from "@components/layout/layout-simple";
import { PageHeader } from "@components/common/page-header";
import { handleFeedCollections } from "@lib/utility/handle-feed-collections";
import { Feed, FeedColumns } from "@components/common/feed";

interface Props {
	preview: boolean;

	collections: GroqCollectionList;
}

export const AllCollectionsPage = ({ collections }: Props): React.ReactElement => {
	const handleFetch = fetchArticleList({
		id: "collections-list",
		fetchDocs: groqCollectionList,
		initialData: collections,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<LayoutSimple>
				<PageHeader title="All Collections" />

				{handleFetch.data?.pages.map(({ data, page }) => {
					return (
						<Feed
							key={"collections" + page}
							items={handleFeedCollections(data)}
							columns={FeedColumns.Three}
						/>
					);
				})}

				<ButtonText
					isLoading={handleFetch.isFetching}
					onClick={() => handleFetch.fetchNextPage()}
					label="Load More"
				/>
			</LayoutSimple>
		</>
	);
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const collections = await getCollectionList(1, preview);

	return {
		props: {
			preview,

			collections,
		},
		revalidate: 1,
	};
};

export default AllCollectionsPage;
