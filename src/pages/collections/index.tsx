import { NextSeo } from "next-seo";
import type { GetStaticProps } from "next";
import { groqCollectionList, GroqCollectionList } from "@lib/groq/collection-list";
import { ButtonText } from "@components/button/button-text";
import { getCollectionList } from "@lib/groq/collection-list";
import { LayoutSimple } from "@components/layout/layout-simple";
import { HeaderPage } from "@components/header/header-page";
import { Feed, FeedColumns } from "@components/common/feed";
import { useInfiniteList } from "@hooks/use-infinite-list";

interface Props {
	preview: boolean;

	collections: GroqCollectionList;
}

export const AllCollectionsPage = ({ collections }: Props): React.ReactElement => {
	const handleFetch = useInfiniteList({
		id: "collections-list",
		fetchDocs: groqCollectionList,
		initialData: collections,
	});

	return (
		<>
			<NextSeo title="Articles" />
			<LayoutSimple>
				<HeaderPage title="All Collections" />

				{handleFetch.data?.pages.map(({ data, page }) => {
					console.log({ data });
					return (
						<Feed
							key={"collections" + page}
							items={data}
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
